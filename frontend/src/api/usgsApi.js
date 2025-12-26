// src/api/usgsApi.js
import axios from "axios";

export const fetchDailyItems = async ({
  limit = 2,
  datetime,
  statistic_id,
  parameter_code,
} = {}) => {
  const apiKey = process.env.REACT_APP_USGS_API_KEY;

  const response = await axios.get("https://waterservices.usgs.gov/nwis/dv/", {
    params: {
      format: "json",
      limit,
      datetime,
      statistic_id,
      parameter_code,
      api_key: apiKey,
    },
  });
  return response.data;
};
