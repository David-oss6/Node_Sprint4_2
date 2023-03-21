const { User } = require("../models")

const createPlayer = async (req, res) => {
  let exists = await User.findOne({ where: { name: req.params.name } })
  let playerName = req.params.name ? req.params.name : "anonim"
  if (!exists) {
    User.create({
      name: playerName,
      partidesWin: 0,
      partidesLose: 0,
      percentatgeExit: 0,
      dataRegistre: new Date().toISOString(),
    }).catch((err) => err && console.log(err))
    console.log(`${req.params.name} registrado como jugador`)
    res.send(`${req.params.name} registrado como jugador`)
  } else {
    console.log(`El nombre ${playerName} ya existe`)
    res.send(`El nombre ${playerName} ya existe`)
  }
}

module.exports = {
  createPlayer,
}
