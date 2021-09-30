import React, { useContext } from "react";
import NewsContext from "../Context/NewsContext";
import "./news.css";
import Divider from "@mui/material/Divider";
import moment from "moment";

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
                  {headlinesContext.favourites.some(
                    (item) => item === headline
                  ) ? (
                    <div
                      className="star"
                      onClick={() => {
                        headlinesContext.removeFavouriteClicked(headline);
                      }}
                    >
                      <headlinesContext.Favourite color="red" />
                    </div>
                  ) : (
                    <div
                      className="star"
                      onClick={() => {
                        headlinesContext.handleFavouriteClicked(headline);
                      }}
                    >
                      <headlinesContext.Favourite color="gray" />
                    </div>
                  )}
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
