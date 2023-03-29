const { userRepo, gameRepo } = require("../dependency-injection/dependency-injection")

const playGame = async (req, res) => {
  const id = await userRepo.filterId(req.params.id)
  if (id) {
    const player = await userRepo.getOnePlayer(id)
    const dau1 = Math.floor(Math.random(1) * 3)
    const dau2 = 5 // Math.floor(Math.random(1) * 6)
    if (dau1 + dau2 === 7) {
      console.log(`${player.name} GANA la partida: ${dau1} y ${dau2}`)
      res.send(`${player.name} GANA la partida: ${dau1} y ${dau2}`)
      const win = player.partidesWin + 1
      const loose = player.partidesLose
      const totales = win + loose
      const percentatge = (win * totales) / 100
      await userRepo.updatePlayer(win, loose, percentatge, id)

    } else {
      console.log(`${player.name} PERD la partida: ${dau1 + dau2}`)
      res.send(`${player.name} PERD la partida: ${dau1 + dau2}`)
      const win = player.partidesWin
      const loose = player.partidesLose + 1
      const totales = win + loose
      const percentatge = (win * totales) / 100
      await userRepo.updatePlayer(win, loose, percentatge, id)
    }

    await gameRepo.createGame(id, dau1, dau2)

  } else {
    console.log(`el id: ${req.params.id} no existe`)
    res.send(`el id: ${req.params.id} no existe`)
  }
}

module.exports = { playGame }
