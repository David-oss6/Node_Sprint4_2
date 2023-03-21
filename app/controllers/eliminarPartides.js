const { User, Game } = require("../models")

const eliminarPartides = async (req, res) => {
  const id = req.params.id
  let players = await User.findAll()
  players = players.length
  if (id > players) {
    console.log(`el id: ${req.params.id} no existe`)
    res.send(
      `el id: ${req.params.id} no existe, hay ${players} jugadores registrados`
    )
  }
  res.send(`Partides eliminades`)
  await Game.destroy({ where: { player: id } })
  await User.update(
    {
      partidesWin: 0,
      partidesLose: 0,
      percentatgeExit: 0,
    },
    { where: { id: id } }
  )
}

module.exports = {
  eliminarPartides,
}
