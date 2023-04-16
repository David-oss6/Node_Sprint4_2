const { userRepo } = require("../dependency-injection/dependency-injection")
const { CreatePlayerCreator } = require("../services/CreatePlayerCreator")

const createPlayer = async (req, res) => {
  const createPlayerCreator = new CreatePlayerCreator(userRepo)
  const result = await createPlayerCreator.run(req.params.name)
  res.send(result)
}

module.exports = {
  createPlayer,
}
