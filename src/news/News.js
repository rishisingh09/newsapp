import React, { useEffect, useState, useContext } from "react";
import { getHeadlinesUtils } from "../Utilities/Utilities";
import NewsContext from "../Context/NewsContext";
import Checkbox from "@mui/material/Checkbox";
import "./news.css";
import Divider from "@mui/material/Divider";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function News(props) {
  const headlinesContext = useContext(NewsContext);

  console.log(headlinesContext);

  return (
    <div>
      <div className="news">
        <div className="newsSourceName">{headlinesContext.selectedSource}</div>
        <Divider variant="middle" />
        <div className="headlinesContainer">
          {headlinesContext.headlines.map((headline) => {
            return (
              <div className="headlines">
                <div className="imageContainer">
                  <img className="image" src={headline.urlToImage} alt=""></img>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className="headlineDetails">
                  <div
                    className="heading"
                    onClick={headlinesContext.sendSelectedHeadline(headline)}
                  >
                    {headline.title}
                  </div>
                  <div className="timeDate">{headline.publishedAt}</div>
                  <div className="star">
                    <Checkbox />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
