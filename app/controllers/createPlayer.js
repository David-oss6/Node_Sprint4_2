const { User } = require("../models")

const createPlayer = async (req, res) => {
  let playerName = req.params.name
  let exist = null
  if (playerName === undefined) {
    playerName = "anonim"
  }
  if (playerName !== "anonim") {
    exist = await User.findOne({ where: { name: req.params.name } })
  }
  if (exist === null) {
    User.create({
      name: playerName,
      partidesWin: 0,
      partidesLose: 0,
      percentatgeExit: 0,
      dataRegistre: new Date().toISOString(),
    }).catch((err) => err && console.log(err))
    console.log(`${playerName} registrado como jugador`)
    res.send(`${playerName} registrado como jugador`)
  } else {
    console.log(`El nombre ${playerName} ya existe`)
    res.send(`El nombre ${playerName} ya existe`)
  }
}

module.exports = {
  createPlayer,
}
