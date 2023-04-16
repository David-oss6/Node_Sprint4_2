const { userRepo } = require("../dependency-injection/dependency-injection")
const { RankingCreator } = require("../services/RankingCreator")

const getRanking = async (req, res) => {
  const rankingCreator = new RankingCreator(userRepo)
  const ranking = await rankingCreator.run()
  res.send(ranking)
}
module.exports = { getRanking }
