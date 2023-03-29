const { userRepo } = require("../dependency-injection/dependency-injection")


const getPlayers = async (req, res) => {
  const users = await userRepo.getPlayers()
  res.send(users)
}

module.exports = { getPlayers }
