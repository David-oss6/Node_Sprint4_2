const express = require("express")
const { changeName } = require("../controllers/changeName")
const { createPlayer } = require("../controllers/createPlayer")
const { getPlayers } = require("../controllers/getPlayers")
const { tokenVerification } = require("../middlewares/tokenVerification")

const router = express.Router()

router.use(tokenVerification)

router.get("/players", getPlayers) // muestra la lista de jugadores
router.post("/players", createPlayer) // crea un jugador con nombre anonimo
router.post("/players/:name", createPlayer) // crea un jugador con nombre epecifico
router.put("/players/:id", changeName) // cambiar nombre

module.exports = router
