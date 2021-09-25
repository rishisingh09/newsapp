import React, { useEffect, useState } from "react";
import { getNewsUtils } from "../Utilities/Utilities";
import "./sources.css";
import lang from "../constants/strings";
import Divider from "@mui/material/Divider";

function Sources(props) {
  const [news, setNews] = useState([]);
  const [id, setId] = useState("");

  const handleId = (id) => {
    setId(id);
  };

  const getNews = async () => {
    const response = await getNewsUtils();
    console.log(response.data.sources);
    setNews(response.data.sources);
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log(id);

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
                onClick={() => handleId(source.id)}
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
