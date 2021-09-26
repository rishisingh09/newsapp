import React, { useEffect, useState } from "react";
import Sources from "../Sources/Sources";
import "./newsHome.css";
import News from "../news/News";
import Details from "../Details/Details";

function NewsHome(props) {
  return (
    <div className="container">
      <div className="newsContainer">
        <div className="firstSection">
          <Sources />
        </div>
        <div className="secondSection">
          <News />
        </div>
        <div className="thirdSection">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default NewsHome;
