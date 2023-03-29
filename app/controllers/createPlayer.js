const { userRepo } = require("../dependency-injection/dependency-injection")

const createPlayer = async (req, res) => {
  console.log(userRepo)
  let playerName = req.params.name
  let exist = null
  if (playerName === undefined) {
    playerName = "anonim"
  }
  if (playerName !== "anonim") {
    exist = await userRepo.playerExists(req.params.name)
  }
  if (exist === null) {
    await userRepo.createPlayer(playerName)
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
