const axios = require("axios");

const API_KEY = "IoadGEecOXg1qQ4QgGsJndWSIAIfQg42rRjfjaPe";

async function getAsteroids(start, end) {
  const response = await axios.get(
    "https://api.nasa.gov/neo/rest/v1/feed",
    {
      params: {
        start_date: start,
        end_date: end,
        api_key: API_KEY,
      },
    }
  );

  return response.data;
}

module.exports = {
  getAsteroids,
};