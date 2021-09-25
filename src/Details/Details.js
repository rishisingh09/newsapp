import React from "react";
import "./details.css";
import { Divider } from "@mui/material";

function Details(props) {
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
