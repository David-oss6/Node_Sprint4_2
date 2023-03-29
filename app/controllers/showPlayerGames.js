const { userRepo, gameRepo } = require("../dependency-injection/dependency-injection")


const showPlayerGames = async (req, res) => {
  const id = await userRepo.filterId(req.params.id)
  if (id) {
    const partides = await gameRepo.showPlayerGames(id)
    partides.length == 0
      ? res.send("Aquest jugador no ha jugat cap partida")
      : res.send(partides)
  } else {
    console.log(`el id: ${req.params.id} no existe`)
    res.send(`el id: ${req.params.id} no existe`)
  }
}

module.exports = {
  showPlayerGames,
}
