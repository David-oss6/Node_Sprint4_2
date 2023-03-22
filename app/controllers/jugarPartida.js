const filterId = require("../helpers/filterId")
const { User, Game } = require("../models")

const jugarPartida = async (req, res) => {
  const id = await filterId(req.params.id)
  if (id) {
    const player = await User.findOne({ where: { id: id } })
    const dau1 = Math.floor(Math.random(1) * 3)
    const dau2 = 5 // Math.floor(Math.random(1) * 6)
    if (dau1 + dau2 === 7) {
      console.log(`${player.name} GANA la partida: ${dau1} y ${dau2}`)
      res.send(`${player.name} GANA la partida: ${dau1} y ${dau2}`)
      const win = player.partidesWin + 1
      const loose = player.partidesLose
      const totales = win + loose
      await User.update(
        {
          partidesWin: win,
          percentatgeExit: (win * totales) / 100,
        },
        { where: { id: id } }
      ).catch((err) => console.log(err))
    } else {
      console.log(`${player.name} PERD la partida: ${dau1 + dau2}`)
      res.send(`${player.name} PERD la partida: ${dau1 + dau2}`)
      const win = player.partidesWin
      const loose = player.partidesLose + 1
      const totales = win + loose
      await User.update(
        {
          partidesLose: player.partidesLose + 1,
          percentatgeExit: (win * totales) / 100,
        },
        { where: { id: id } }
      ).catch((err) => console.log(err))
    }
    await Game.create({
      player: id,
      dau1: dau1,
      dau2: dau2,
      resultatPartida: dau1 + dau2 == 7 ? "win" : "loose",
    })
  } else {
    console.log(`el id: ${req.params.id} no existe`)
    res.send(`el id: ${req.params.id} no existe`)
  }
}

module.exports = { jugarPartida }
