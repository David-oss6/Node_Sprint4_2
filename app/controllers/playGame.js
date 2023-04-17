const { userRepo, gameRepo } = require("../dependency-injection/dependency-injection")
const { PlayGameCreator } = require("../services/PlayGameCreator")
const playGame = async (req, res) => {
  const playeGameCreator = new PlayGameCreator(userRepo, gameRepo)
  const result = await playeGameCreator.run(req.params.id)
  res.send(result)
}

module.exports = { playGame }
