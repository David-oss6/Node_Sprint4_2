const { userRepo } = require("../dependency-injection/dependency-injection")
const { ChangeNameCreator } = require("../services/ChangeNameCreator")

const changeName = async (req, res) => {
  const changeNameCreator = new ChangeNameCreator(userRepo)
  const result = await changeNameCreator.run(req)
  res.send(result)
}

module.exports = {
  changeName,
}
