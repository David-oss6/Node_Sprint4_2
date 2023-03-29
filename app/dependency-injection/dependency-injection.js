const { GameRepoMysql } = require("../repositories/gameRepoMysql")
const { UserRepoMongodb } = require("../repositories/userRepoMongodb")
const { UserRepoMysql } = require("../repositories/userRepoMysql")


let userRepo = new UserRepoMysql()
let gameRepo = new GameRepoMysql()

if ((process.env.DB = "mysql")) {
  userRepo = new UserRepoMysql()
  gameRepo = new GameRepoMysql()
}
if ((process.env.DB == "mongodb")) {
  userRepo = new UserRepoMongodb()
}

// const userCretor = new UserCreator(userRepo)
// module.exports = userCretor

module.exports = { userRepo, gameRepo }
