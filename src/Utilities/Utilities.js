import URL from "../constants/url";
import axios from "axios";

export const getNewsUtils = async () => {
  var response = await axios({
    url: URL.BASE_URL.SOURCE,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "4664c0a2e3404858a65c2fb392f4ad56",
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return response;
};
