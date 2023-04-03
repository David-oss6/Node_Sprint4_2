const { envDatabase } = require("../envDatabase")
const { GameRepoMysql } = require("../repositories/gameRepoMysql")
const { UserRepoMongodb } = require("../repositories/userRepoMongodb")
const { UserRepoMysql } = require("../repositories/userRepoMysql")



if ((envDatabase == "mysql")) {
    userRepo = new UserRepoMysql()
    gameRepo = new GameRepoMysql()
}
if ((envDatabase == "mongodb")) {
    userRepo = new UserRepoMongodb()
    gameRepo = new UserRepoMongodb()
}

// const userCretor = new UserCreator(userRepo)

module.exports = { userRepo, gameRepo }

