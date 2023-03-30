

class UserRepoMongodb {

  async createPlayer(playerName) {
    await db.users.insertOne({
      name: playerName,
      partidesWin: 0,
      partidesLose: 0,
      percentatgeExit: 0,
      dataRegistre: new Date().toISOString(),
      games: [],
    })
    // try {
    //   await client.connect()
    //   const player = {
    //     name: playerName,
    //     partidesWin: 0,
    //     partidesLose: 0,
    //     percentatgeExit: 0,
    //     dataRegistre: new Date().toISOString(),
    //     games: [],
    //   }
    //   const result = await client
    //     .db("juego_dados")
    //     .collection("users")
    //     .insertOne(player)
    // } catch (e) {
    //   console.error(e)
    // } finally {
    //   await client.close()
    // }

  }

  async filterId(id) {
    let result
    let player = await db.users.find({ id: id })
    player ? result = id : result = null
    return result
  }

  async getPlayers() {
    const users = await db.users.find()
    return users
  }

  async getOnePlayer(id) {
    const player = await db.users.find({ id: id })
    return player
  }

  async updatePlayer(win, loose, percentatge, id) {

    // await User.update(
    //   {
    //     partidesWin: win,
    //     partidesLose: loose,
    //     percentatgeExit: percentatge,
    //   },
    //   { where: { id: id } }
    // ).catch((err) => console.log(err))
  }

  async playerExists(newName) {
    // let exists = await User.findOne({ where: { name: newName } })
    // return exists
  }

  async changeName(newName, newId) {
    // await User.update({ name: newName }, { where: { id: newId } })
  }

  async deleteGames(id) {
    // await User.update(
    //   {
    //     partidesWin: 0,
    //     partidesLose: 0,
    //     percentatgeExit: 0,
    //   },
    //   { where: { id: id } }
    // )
  }

  async getWinner() {
    // const ranking = await User.findAll({
    //   order: ["percentatgeExit"],
    // })
    // return ranking[ranking.length - 1]
  }

  async getLoser() {
    // const ranking = await User.findAll({
    //   order: ["percentatgeExit"],
    // })
    // return ranking[0]
  }

  async getRanking() {
    // const ranking = await User.findAll({
    //   order: ["percentatgeExit"],
    // })
    // return ranking
  }

  async deleteGames(id) {
    // await Game.destroy({ where: { player: id } })
  }

  async createGame(id, dau1, dau2) {
    // await Game.create({
    //   player: id,
    //   dau1: dau1,
    //   dau2: dau2,
    //   resultatPartida: dau1 + dau2 == 7 ? "win" : "loose",
    // })
  }

  async showPlayerGames(id) {
    // const partides = await Game.findAll({ where: { player: id } })
    // return partides
  }

  async resetTable() {
    // await User.destroy({ truncate: true })
  }



}

module.exports = { UserRepoMongodb }
