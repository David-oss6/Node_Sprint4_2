const { User } = require("../models")

const getLoser = async (req, res) => {
  const ranking = await User.findAll({
    order: ["percentatgeExit"],
  })
  console.log(ranking)
  res.send(ranking[0])
}

module.exports = { getLoser }
