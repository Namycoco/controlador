const express = require("express");
const app = express();

const alienRoutes = require("./routes/alienRoutes");

app.use(express.static("public"));
app.use("/", alienRoutes);

app.listen(3000, () => {
  console.log("🛸 Sistema iniciado en http://localhost:3000");
});