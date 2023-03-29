const { userRepo } = require("../dependency-injection/dependency-injection")

const getRanking = async (req, res) => {
  const ranking = await userRepo.getRanking()
  let sendRanking = []
  let sendMitjana
  let mitjana = 0
  ranking.forEach((ele) => {
    sendRanking.push(`${ele.name} percentatge: ${ele.percentatgeExit}`)
    mitjana += ele.percentatgeExit
  })

  mitjana = (mitjana * ranking.length + 1) / 100
  sendMitjana = `Percentatge d exit mitjà: ${mitjana}`
  res.send({ sendRanking, sendMitjana })
}
module.exports = { getRanking }
