import React, { useEffect, useState, useContext } from "react";
import NewsContext from "../Context/NewsContext";
import lang from "../constants/strings";
import Divider from "@mui/material/Divider";
import "./sources.css";

function Sources(props) {
  const sources = useContext(NewsContext);

  console.log(sources);
  return (
    <div>
      <div className="sources">
        <div className="header">{lang.SOURCES}</div>
        <Divider variant="middle" />
        <div className="sourceName">
          {sources.map((source) => {
            return (
              <div key={source.id} className="name">
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
