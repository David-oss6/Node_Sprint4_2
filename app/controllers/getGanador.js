const { User } = require("../models")

const getGanador = async (req, res) => {
  const ranking = await User.findAll({
    order: ["percentatgeExit"],
  })
  res.send(ranking[ranking.length - 1])
}

module.exports = { getGanador }
