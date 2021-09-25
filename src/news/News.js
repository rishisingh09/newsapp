import React, { useContext, useEffect, useState } from "react";
import { getHeadlinesUtils } from "../Utilities/Utilities";
import Checkbox from '@mui/material/Checkbox';


import "./news.css";
// import lang from "../constants/strings";
import Divider from "@mui/material/Divider";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function News(props) {
  const [headLines, setHeadLines] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const getHeadlines = async () => {
    try {
      const response = await getHeadlinesUtils(id);
      setHeadLines(response.data.articles);
    } catch (error) {}
  };
  // useEffect(() => {
  //   setId(props.id);
  //   setName(props.name);
  //   getHeadlines();
  // }, [props.id]);
  return (
    <div>
      <div className="news">
        <div className="newsSourceName">{name}</div>
        <Divider variant="middle" />
        <div className="headlines">
          <div className="imageContainer"></div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="headlineDetails">
            <div className="heading">Hello</div>
            <div className="timeDate">22:00</div>
            <div className="star">
              <Checkbox/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
