const { User } = require("../models")

const createAnonimo = (req, res) => {
  User.create({
    name: "anonim",
    partides: 0,
    partidesWin: 0,
    partidesLose: 0,
    percentatgeExit: 0,
    dataRegistre: new Date().toISOString(),
  }).catch((err) => err && console.log(err))
  console.log(`jugador registrado`)
  res.send("jugador registrado")
}

module.exports = {
  createAnonimo,
}
