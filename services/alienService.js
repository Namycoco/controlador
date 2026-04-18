const axios = require("axios");

async function obtenerSenales() {
  try {
    const response = await axios.get(
      "https://api.nasa.gov/neo/rest/v1/feed",
      {
        params: {
          start_date: "2026-04-15",
          end_date: "2026-04-17",
          api_key: "IoadGEecOXg1qQ4QgGsJndWSIAIfQg42rRjfjaPe"
        }
      }
    );

    const data = response.data.near_earth_objects;

    return Object.values(data).flat().map(obj => ({
      nombre: "👽 " + obj.name,
      velocidad_kmh: obj.close_approach_data[0].relative_velocity.kilometers_per_hour,
      distancia_km: obj.close_approach_data[0].miss_distance.kilometers,
      hostil: obj.is_potentially_hazardous_asteroid
    }));

  } catch (error) {
    console.log("Error NASA:", error.message);

    return [
      {
        nombre: "SEÑAL DE PRUEBA",
        velocidad_kmh: 12000,
        distancia_km: 450000,
        hostil: true
      }
    ];
  }
}

module.exports = { obtenerSenales };