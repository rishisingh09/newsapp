import React from "react";
import Sources from "../Sources/Sources";
import "./newsHome.css";
import News from "../News/News";
import Details from "../Details/Details";

function NewsHome(props) {
  // console.log("Name:", name);
  // console.log("Id:", id);

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
