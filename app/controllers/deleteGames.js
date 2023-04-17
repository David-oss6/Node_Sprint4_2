const { gameRepo, userRepo } = require('../dependency-injection/dependency-injection')
const { DeleteGamesCreator } = require('../services/DeleteGamesCreator')


const deleteGames = async (req, res) => {
  const deleteGamesCreator = new DeleteGamesCreator(gameRepo, userRepo)
  const id = req.params.id
  const result = await deleteGamesCreator.run(req, id)
  res.send(result)



}

module.exports = {
  deleteGames,
}
