import React, { useEffect, useState, useContext } from "react";
import NewsContext from "../Context/NewsContext";
import lang from "../constants/strings";
import Divider from "@mui/material/Divider";
import "./sources.css";

function Sources(props) {
  const sourceContext = useContext(NewsContext);

  return (
    <div>
      <div className="sources">
        <div className="header">{lang.SOURCES}</div>
        <Divider variant="middle" />
        <div className="sourceName">
          {sourceContext.sources.map((source) => {
            return (
              <div
                key={source.id}
                className="name"
                onClick={() =>
                  sourceContext.sendSelectedSource(source.id, source.name)
                }
              >
                {source.name}
              </div>
            );
          })}
        </div>
        <div className="sourceName"></div>
        <Divider variant="middle" />
        <div className="favourite">
          <div className="count">
            {lang.FAVOURITES} : {sourceContext.favourites.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sources;
