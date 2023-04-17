const { userRepo } = require("../dependency-injection/dependency-injection")
const { ChangeNameCreator } = require("../services/ChangeNameCreator")

const changeName = async (req, res) => {
  const changeNameCreator = new ChangeNameCreator(userRepo)
  const req_id = req.params.id
  const req_newName = req.body.name
  const result = await changeNameCreator.run(req_id, req_newName)
  res.send(result)
}

module.exports = {
  changeName,
}
