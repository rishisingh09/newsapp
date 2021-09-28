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
          <div className="headlineDetailsContainer"></div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="starContainer"></div>
        </div>
        <div className="bigImageContainer">
          <img></img>
        </div>
        <div className="newsDescription"></div>
      </div>
    </div>
  );
}

export default Details;
