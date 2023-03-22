const { User } = require("../models")

const getPlayers = async (req, res) => {
  const users = await User.findAll()
  res.send(users)
}

module.exports = { getPlayers }
