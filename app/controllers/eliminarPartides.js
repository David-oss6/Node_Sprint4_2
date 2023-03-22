const filterId = require("../helpers/filterId")
const { User, Game } = require("../models")

const eliminarPartides = async (req, res) => {
  const id = await filterId(req.params.id)
  if (id) {
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
  console.log(`el id: ${req.params.id} no existe`)
  res.send(`el id: ${req.params.id} no existe`)
}

module.exports = {
  eliminarPartides,
}
