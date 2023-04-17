const { gameRepo, userRepo } = require('../dependency-injection/dependency-injection')
const { DeleteGamesCreator } = require('../services/DeleteGamesCreator')


const deleteGames = async (req, res) => {
  const deleteGamesCreator = new DeleteGamesCreator(gameRepo, userRepo)
  const result = await deleteGamesCreator.run(req.params.id)
  res.send(result)



}

module.exports = {
  deleteGames,
}
