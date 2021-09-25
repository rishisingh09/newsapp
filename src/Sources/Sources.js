import React, { useState } from "react";
import { getNewsUtils } from "../Utilities/Utilities";
import "./sources.css";
import lang from "../constants/strings";
import Divider from "@mui/material/Divider";

function Sources(props) {
  const [news, setNews] = useState([]);

  const handleClick = (source) => {
    props.sendData(source);
  };

  const getNews = async () => {
    try {
      const response = await getNewsUtils();
      setNews(response.data.sources);
    } catch (error) {}

  };

  // useEffect(() => {
  //   getNews();
  // }, []);

  return (
    <div>
      <div className="sources">
        <div className="header">{lang.SOURCES}</div>
        <Divider variant="middle" />
        <div className="sourceName">
          {news.map((source) => {
            return (
              <div
                key={source.id}
                className="name"
                onClick={() => handleClick(source)}
              >
                {source.name}
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
  );
}

export default Sources;
