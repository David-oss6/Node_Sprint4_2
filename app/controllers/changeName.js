const filterId = require("../helpers/filterId")
const { User } = require("../models")

const changeName = async (req, res) => {
  const id = filterId(req.params.id)
  if (id) {
    const newName = req.params.newname
    let exists = await User.findOne({ where: { name: newName } })
    if (!exists) {
      await User.update({ name: newName }, { where: { id: id } })
      res.send(`Nombre cambiado a ${newName}`)
    } else {
      console.log(`El nombre: ${newName} ya esta en uso`)
      res.send(`El nombre: ${newName} ya esta en uso`)
    }
  } else {
    res.send(`El id:${id}, existe`)
  }
}

module.exports = {
  changeName,
}
