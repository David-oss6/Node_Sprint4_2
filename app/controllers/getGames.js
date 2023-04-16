const { gameRepo } = require("../dependency-injection/dependency-injection")
const { GetGamesCreator } = require("../services/GetGamesCreator")

const getGames = async (req, res) => {
  const getGamesCreator = new GetGamesCreator(gameRepo)
  const partides = await getGamesCreator.run(req.params.id)
  res.send(partides)
}

module.exports = {
  getGames,
}
