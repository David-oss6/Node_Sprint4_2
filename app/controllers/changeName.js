const { userRepo } = require("../dependency-injection/dependency-injection")

const changeName = async (req, res) => {
  const id = await userRepo.filterId(req.params.id)
  if (id) {
    const newName = req.body.name
    let exists = await userRepo.playerExists(newName)
    if (!exists) {
      await userRepo.changeName(newName, id)
      res.send(`Nombre cambiado a ${newName}`)
    } else {
      console.log(`El nombre: ${newName} ya esta en uso`)
      res.send(`El nombre: ${newName} ya esta en uso`)
    }
  } else {
    res.send(`El id:${id}, no existe`)
  }
}

module.exports = {
  changeName,
}
