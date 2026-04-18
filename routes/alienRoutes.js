const express = require("express");
const router = express.Router();

const alienController = require("../controllers/alienController");

router.get("/aliens", alienController.obtenerSenales);

module.exports = router;