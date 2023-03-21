// GET /ranking: retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.
const { User } = require("../models")

const getRanking = async (req, res) => {
  const ranking = await User.findAll({
    order: ["percentatgeExit"],
  })
  let sendRanking = []
  let sendMitjana
  let mitjana = 0
  ranking.forEach((ele) => {
    sendRanking.push(`${ele.name} percentatge: ${ele.percentatgeExit}`)
    mitjana += ele.percentatgeExit
  })
  //   console.log("Ranking:", ranking)
  mitjana = (mitjana * ranking.length + 1) / 100
  sendMitjana = `Percentatge d exit mitjà: ${mitjana}`
  res.send({ sendRanking, sendMitjana })
}
module.exports = { getRanking }
