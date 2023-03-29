const { userRepo } = require("../dependency-injection/dependency-injection")


const getLoser = async (req, res) => {
  const ranking = await userRepo.getLoser()
  res.send(ranking)
}
module.exports = { getLoser }
