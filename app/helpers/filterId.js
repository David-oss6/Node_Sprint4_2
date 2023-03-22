const { User, Game } = require("../models")

const filterId = async (id) => {
  let result = null
  let player = await User.findOne({ where: { id: id } })
  if (player != null) result = id
  console.log("filterID::::::::::::***********", result)
  return result
}

module.exports = filterId
