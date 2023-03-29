const express = require("express")
const router = express.Router()
const { playGame } = require("../controllers/playGame")
const {
  showPlayerGames,
} = require("../controllers/showPlayerGames")
const { deleteGames } = require("../controllers/deleteGames")

router.post("/game/:id", playGame)

router.delete("/games/:id", deleteGames)

router.get("/games/:id", showPlayerGames)

module.exports = router
