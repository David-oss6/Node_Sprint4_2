//const { envDatabase } = require("../envDatabase")
const { GameRepoMysql } = require("../repositories/gameRepoMysql")
const { UserRepoMongodb } = require("../repositories/userRepoMongodb")
const { UserRepoMysql } = require("../repositories/userRepoMysql")



if ((process.env.DB == "mysql")) {
    userRepo = new UserRepoMysql()
    gameRepo = new GameRepoMysql()
}
if ((process.env.DB == "mongodb")) {
    userRepo = new UserRepoMongodb()
    gameRepo = new UserRepoMongodb()
}

// const userCretor = new UserCreator(userRepo)

module.exports = { userRepo, gameRepo }

