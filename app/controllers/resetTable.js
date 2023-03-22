const { User, Game } = require("../models")

const resetTables = async () => {
  await User.destroy({ truncate: true })
  await Game.destroy({ truncate: true })
}

module.exports = {
  resetTables,
}
