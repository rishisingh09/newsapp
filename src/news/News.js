import React, { useContext, useEffect, useState } from "react";
import newsDetailContext from "../Sources";

import "./news.css";
// import lang from "../constants/strings";
import Divider from "@mui/material/Divider";

function News(props) {
  var contextData = useContext(newsDetailContext);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {});
  return (
    <div>
      <div className="news">
        <div className="newsSourceName">Hello</div>
        <Divider variant="middle" />
      </div>
    </div>
  );
}

export default News;
