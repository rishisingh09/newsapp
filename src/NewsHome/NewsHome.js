import React, { useEffect, useState } from "react";
import Sources from "../Sources/Sources";
import "./newsHome.css";
import News from "../news/News";
import Details from "../Details/Details";

function NewsHome(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const getData = (name) => {
    setId(name.id);
    setName(name.name);
  };

  // console.log("Name:", name);
  // console.log("Id:", id);

  return (
    <div className="container">
      <div className="newsContainer">
        <div className="firstSection">
          <Sources sendData={getData} />
        </div>
        <div className="secondSection">
          <News id={id} />
        </div>
        <div className="thirdSection">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default NewsHome;
