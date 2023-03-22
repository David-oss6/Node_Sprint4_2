const filterId = require("../helpers/filterId")
const { User, Game } = require("../models")

const mostrarPartidesJugador = async (req, res) => {
  const id = await filterId(req.params.id)
  if (id) {    
    const partides = await Game.findAll({ where: { player: id } })    
    partides.length == 0
      ? res.send("Aquest jugador no ha jugat cap partida")
      : res.send(partides)
  } else {
    console.log(`el id: ${id} no existe`)
    res.send(`el id: ${id} no existe`)
  }
}

module.exports = {
  mostrarPartidesJugador,
}
