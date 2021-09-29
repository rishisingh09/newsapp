import React, { useEffect, useState, useContext } from "react";
import { getHeadlinesUtils } from "../Utilities/Utilities";
import NewsContext from "../Context/NewsContext";
import Checkbox from "@mui/material/Checkbox";
import "./news.css";
import Divider from "@mui/material/Divider";
import moment from "moment";
import Favourite from "../common/Favourite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function News(props) {
  const headlinesContext = useContext(NewsContext);

  return (
    <div>
      <div className="news">
        <div className="newsSourceName">{headlinesContext.selectedSource}</div>
        <Divider variant="middle" />
        <div className="headlinesContainer">
          {headlinesContext.headlines.map((headline) => {
            return (
              <div className="headlines" key={headline.source.id}>
                <div
                  className="imageContainer"
                  style={{ backgroundImage: `url(${headline.urlToImage})` }}
                >
                  {" "}
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className="headlineDetails">
                  <div
                    className="heading"
                    onClick={() => {
                      headlinesContext.sendSelectedHeadline(headline);
                    }}
                  >
                    {headline.title}
                  </div>
                  <div className="timeDate">
                    {moment(headline.publishedAt).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </div>
                  <div
                    className="star"
                    onClick={() => {
                      headlinesContext.hadleFavouriteClicked(
                        headline.source.id
                      );
                    }}
                  >
                    <headlinesContext.Favourite />
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
