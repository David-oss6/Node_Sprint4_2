const { userRepo } = require("../dependency-injection/dependency-injection")
const { PlayGameCreator } = require("../services/PlayGameCreator")
const playGame = async (req, res) => {
  const playeGameCreator = new PlayGameCreator(userRepo)
  const result = await playeGameCreator.run(req)
  res.send(result)
}

module.exports = { playGame }
