const { User } = require("../models")

const getPlayers = async (req, res) => {
  // obtener lista jugadores
  const users = await User.findAll()
  res.send(users)
}

module.exports = { getPlayers }
