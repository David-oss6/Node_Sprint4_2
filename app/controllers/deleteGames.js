const { userRepo } = require("../dependency-injection/dependency-injection")
const { gameRepo } = require('../dependency-injection/dependency-injection')

const deleteGames = async (req, res) => {
  const id = await userRepo.filterId(req.params.id)
  if (id) {

    await gameRepo.deleteGames(id)
    await userRepo.deleteGames(id)
    res.send(`Partides eliminades`)
  } else {
    console.log(`el id: ${req.params.id} no existe`)
    res.send(`el id: ${req.params.id} no existe`)
  }
}

module.exports = {
  deleteGames,
}
