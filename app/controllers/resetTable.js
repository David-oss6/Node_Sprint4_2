const { userRepo } = require("../dependency-injection/dependency-injection")

const resetTables = async () => {
  //borrar tablas
  await userRepo.resetTable()
  await gameRepo.resetTable()
}

module.exports = {
  resetTables,
}
