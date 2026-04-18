const nasaService = require("../services/nasaService");

async function getAsteroids(req, res) {
  try {
    const start = "2024-04-10";
    const end = "2024-04-12";

    const data = await nasaService.getAsteroids(start, end);

    const asteroids = Object.values(data.near_earth_objects)
      .flat()
      .map(a => {
        const approach = a.close_approach_data?.[0];

        return {
          name: a.name,
          hazardous: a.is_potentially_hazardous_asteroid,
          speed_kmh: approach?.relative_velocity?.kilometers_per_hour,
          distance_km: approach?.miss_distance?.kilometers,
        };
      });

    res.json(asteroids);

  } catch (error) {
  console.log(error.response?.data || error.message);
  res.status(500).json({ error: "Error NASA API" });

  }
}

module.exports = {
  getAsteroids,
};