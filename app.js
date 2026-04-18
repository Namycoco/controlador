const express = require("express");
const app = express();

const asteroidRoutes = require("./routes/asteroidRoutes");

// 🟢 PRIMERO archivos estáticos
app.use(express.static("public"));

// 🟢 DESPUÉS API
app.use("/", asteroidRoutes);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});