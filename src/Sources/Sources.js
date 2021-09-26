import React, { useEffect, useState } from "react";
import { getNewsUtils } from "../Utilities/Utilities";
import "./sources.css";
import lang from "../constants/strings";
import Divider from "@mui/material/Divider";
import NewsContext from "../Context/NewsContext";

function Sources(props) {
  const [news, setNews] = useState(["A News", "B News"]);

  const getNews = async () => {
    const response = await getNewsUtils();
    console.log(response.data.sources);
    setNews(response.data.sources);
  };

  // useEffect(() => {
  //   getNews();
  // }, []);

  // console.log("Name:", name, "id:", id);

  return (
    <NewsContext.Provider value={[news, setNews]}>
      <div>
        <div className="sources">
          <div className="header">{lang.SOURCES}</div>
          <Divider variant="middle" />
          <div className="sourceName">
            {news.map((source) => {
              return (
                <div key={source} className="name">
                  {source}
                </div>
              );
            })}
          </div>
          <div className="sourceName"></div>
          <Divider variant="middle" />
          <div className="favourite">
            <div className="count">{lang.FAVOURITES} :</div>
          </div>
        </div>
      </div>
    </NewsContext.Provider>
  );
}

export default Sources;
