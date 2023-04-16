const { userRepo } = require("../dependency-injection/dependency-injection")
const { GetPlayerCreator } = require("../services/GetPlayerCreator")


const getPlayers = async (req, res) => {
  const getPlayerCreator = new GetPlayerCreator(userRepo)
  const users = await getPlayerCreator.run()
  res.send(users)
}

module.exports = { getPlayers }
