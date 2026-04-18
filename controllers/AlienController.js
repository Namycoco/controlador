const alienService = require("../services/alienService");

async function obtenerSenales(req, res) {
  try {
    const datos = await alienService.obtenerSenales();
    res.json(datos);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener señales alienígenas"
    });
  }
}

module.exports = { obtenerSenales };