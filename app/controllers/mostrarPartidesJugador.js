const { User, Game } = require("../models")

const mostrarPartidesJugador = async (req, res) => {
  const id = req.params.id
  let players = await User.findAll()
  players = players.length
  if (id > players) {
    console.log(`el id: ${req.params.id} no existe`)
    res.send(
      `el id: ${req.params.id} no existe, hay ${players} jugadores registrados`
    )
  } else {
    const partides = await Game.findAll({ where: { player: req.params.id } })
    partides.length < 1
      ? res.send("Aquest jugador no ha jugat cap partida")
      : res.send(partides)
  }
}

module.exports = {
  mostrarPartidesJugador,
}
