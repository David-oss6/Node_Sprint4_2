const { userRepo } = require("../dependency-injection/dependency-injection")
const { User } = require("../models")

const getWinner = async (req, res) => {
  const ranking = await userRepo.getWinner()
  res.send(ranking)
}

module.exports = { getWinner }
