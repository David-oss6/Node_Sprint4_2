const { User } = require("../models")

class UserRepoMysql {
  async createPlayer(playerName) {
    User.create({
      name: playerName,
      partidesWin: 0,
      partidesLose: 0,
      percentatgeExit: 0,
      dataRegistre: new Date().toISOString(),
    }).catch((err) => err && console.log(err))
  }

  async filterId(id) {
    let result
    let player = await User.findOne({ where: { id: id } })
    player ? result = id : result = null
    return result
  }

  async getPlayers() {
    const users = await User.findAll()
    return users
  }

  async getOnePlayer(id) {
    const player = await User.findOne({ where: { id: id } })
    return player
  }

  async updatePlayer(win, loose, percentatge, id) {

    await User.update(
      {
        partidesWin: win,
        partidesLose: loose,
        percentatgeExit: percentatge,
      },
      { where: { id: id } }
    ).catch((err) => console.log(err))
  }

  async playerExists(newName) {
    let exists = await User.findOne({ where: { name: newName } })
    return exists
  }

  async changeName(newName, newId) {
    await User.update({ name: newName }, { where: { id: newId } })
  }

  async deleteGames(id) {
    await User.update(
      {
        partidesWin: 0,
        partidesLose: 0,
        percentatgeExit: 0,
      },
      { where: { id: id } }
    )
  }

  async getWinner() {
    const ranking = await User.findAll({
      order: ["percentatgeExit"],
    })
    return ranking[ranking.length - 1]
  }

  async getLoser() {
    const ranking = await User.findAll({
      order: ["percentatgeExit"],
    })
    return ranking[0]
  }

  async getRanking() {
    const ranking = await User.findAll({
      order: ["percentatgeExit"],
    })
    return ranking
  }

  async resetTable() {
    await User.destroy({ truncate: true })
  }

}

module.exports = { UserRepoMysql }
