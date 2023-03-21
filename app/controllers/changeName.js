const { User } = require("../models")

const changeName = async (req, res) => {
  const id = req.params.id
  const newName = req.params.newname
  let exists = await User.findOne({ where: { name: newName } })
  if (!exists) {
    await User.update({ name: newName }, { where: { id: id } })
    res.send(`Nombre cambiado a ${newName}`)
  } else {
    console.log(`El nombre: ${newName} ya esta en uso`)
    res.send(`El nombre: ${newName} ya esta en uso`)
  }
}

module.exports = {
  changeName,
}
