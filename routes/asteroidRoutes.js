const express = require("express");
const router = express.Router();

const controller = require("../controllers/asteroidController");

router.get("/asteroids", controller.getAsteroids);

module.exports = router;