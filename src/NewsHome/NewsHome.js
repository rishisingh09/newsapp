import React, { useEffect, useState } from "react";
import { getNewsUtils, getHeadlinesUtils } from "../Utilities/Utilities";
import NewsContext from "../Context/NewsContext";
import Details from "../Details/Details";
import Sources from "../Sources/Sources";
import News from "../news/News";
import "./newsHome.css";

function NewsHome(props) {
  const [sources, setSources] = useState([]);
  const [headlines, setHeadLines] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");

  // const getHeadlines = async () => {
  //   try {
  //     const response = await getHeadlinesUtils();
  //     setHeadLines(response.data.articles);
  //   } catch (error) {}
  // };

  const getNews = async () => {
    try {
      const response = await getNewsUtils();
      console.log(response.data.sources);
      setSources(response.data.sources);
    } catch (error) {}
  };

  useEffect(() => {
    getNews();
    // getHeadlines();
  }, []);

  return (
    <NewsContext.Provider value={sources}>
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
