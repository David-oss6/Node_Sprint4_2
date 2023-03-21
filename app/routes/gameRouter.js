const express = require("express")
const router = express.Router()
const { jugarPartida } = require("../controllers/jugarPartida")
const { eliminarPartides } = require("../controllers/eliminarPartides")
const {
  mostrarPartidesJugador,
} = require("../controllers/mostrarPartidesJugador")

router.post("/game/:id", jugarPartida)

router.delete("/games/:id", eliminarPartides)

router.get("/games/:id", mostrarPartidesJugador)

module.exports = router
