import React, { useContext } from "react";
import "./details.css";
import { Divider } from "@mui/material";
import NewsContext from "../Context/NewsContext";

function Details(props) {
  const detailContext = useContext(NewsContext);

  return (
    <div>
      <div className="details">
        <div className="headlineContainer">
          <div className="headlineDetailsContainer">
            {detailContext.news.title}
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="starContainer">
            {detailContext.favourites.some(
              (item) => item === detailContext.news
            ) ? (
              <detailContext.Favourite color="red" />
            ) : (
              <detailContext.Favourite color="gray" />
            )}
          </div>
        </div>
        <div className="bigImageContainer">
          <img src={detailContext.news.urlToImage} alt=""></img>
        </div>
        <div className="newsDescription">{detailContext.news.description}</div>
      </div>
    </div>
  );
}

export default Details;
