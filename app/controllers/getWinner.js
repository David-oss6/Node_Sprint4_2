const { userRepo } = require("../dependency-injection/dependency-injection")
const { GetWinnerCreator } = require("../services/GetWinnerCreator")

const getWinner = async (req, res) => {
  const getWinnerCreator = new GetWinnerCreator(userRepo)
  const winner = await getWinnerCreator.run()

  res.send(winner)
}

module.exports = { getWinner }
