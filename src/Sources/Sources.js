import React from "react";
import "./sources.css";
import lang from "../constants/strings";

function Sources(props) {
  return (
    <div>
      <div className="sources">
        <div className="header">{lang.SOURCES}</div>
      </div>
    </div>
  );
}

export default Sources;
