const { userRepo } = require("../dependency-injection/dependency-injection")
const { GetLoserCreator } = require("../services/GetLoserCreator")


const getLoser = async (req, res) => {
  const getLoserCreator = new GetLoserCreator(userRepo)
  const looser = await getLoserCreator.run()
  res.send(looser)
}
module.exports = { getLoser }
