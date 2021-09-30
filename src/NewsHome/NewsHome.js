import React, { useEffect, useState } from "react";
import { getNewsUtils, getHeadlinesUtils } from "../Utilities/Utilities";
import NewsContext from "../Context/NewsContext";
import Details from "../Details/Details";
import Sources from "../Sources/Sources";
import News from "../News/News";
import "./newsHome.css";
import Favourite from "../common/Favourite";

function NewsHome(props) {
  const [favourites, setFavourites] = useState([]);
  const [sources, setSources] = useState([]);
  const [headlines, setHeadLines] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [news, setNews] = useState({});

  const addfavourite = (item) => {
    const newFavouriteList = [...favourites, item];
    setFavourites(newFavouriteList);
  };

  const removeFavourite = (url) => {
    const newFavouriteList = favourites.filter((item) => item.url !== url);
    setFavourites(newFavouriteList);
  };

  const handleSelectSource = (id, name) => {
    setSelectedSource(name);
    setSelectedId(id);
  };

  const handleSelectedHeadline = (receivedNews) => {
    setNews(receivedNews);
  };

  const getNews = async () => {
    try {
      const response = await getNewsUtils();
      setSources(response.data.sources);
    } catch (error) {}
  };

  useEffect(() => {
    const getHeadlines = async () => {
      try {
        const response = await getHeadlinesUtils(selectedId);
        setHeadLines(response.data.articles);
      } catch (error) {}
    };
    getNews();
    getHeadlines();
  }, [selectedSource.getHeadlines, selectedId]);

  console.log(favourites);

  return (
    <NewsContext.Provider
      value={{
        favourites,
        Favourite,
        sources,
        headlines,
        selectedSource,
        news,
        removeFavouriteClicked: removeFavourite,
        handleFavouriteClicked: addfavourite,
        sendSelectedSource: handleSelectSource,
        sendSelectedHeadline: handleSelectedHeadline,
      }}
    >
      <div className="container">
        <div className="newsContainer">
          <div className="firstSection">
            <Sources />
          </div>
          <div className="secondSection">
            <News />
          </div>
          <div className="thirdSection">
            <Details />
          </div>
        </div>
      </div>
    </NewsContext.Provider>
  );
}

export default NewsHome;
