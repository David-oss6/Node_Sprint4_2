const express = require("express")
const router = express.Router()
const { getRanking } = require("../controllers/getRanking")
const { getLoser } = require("../controllers/getLoser")
const { getWinner } = require("../controllers/getWinner")

router.get("/ranking", getRanking) // ranking de jugadors/es

router.get("/ranking/loser", getLoser) //jugador/a amb pitjor percentatge d’èxit

router.get("/ranking/winner", getWinner) // jugador/a amb millor percentatge d’èxit.

module.exports = router
