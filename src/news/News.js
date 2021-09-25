import React, { useContext, useEffect, useState } from "react";

import "./news.css";
// import lang from "../constants/strings";
import Divider from "@mui/material/Divider";

function News(props) {
  useEffect(() => {});
  return (
    <div>
      <div className="news">
        <div className="newsSourceName">{props.name}</div>
        <Divider variant="middle" />
      </div>
    </div>
  );
}

export default News;
