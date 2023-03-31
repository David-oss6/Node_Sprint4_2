const { getDb } = require("../mongoConnection")
const { ObjectId } = require('mongodb');

class UserRepoMongodb {

  async playerExists(newName) {
    const db = await getDb()
    let exists = await db.collection('users').findOne({ name: newName })
    return exists
  }

  async getPlayers() {
    console.log('llega a getPlayers')
    let players = []
    const db = await getDb()
    const users = await db.collection('users').find()
    await users.forEach(user => {
      players.push(user)
    });
    console.log(players)
    return players
  }

  async createPlayer(playerName) {
    const db = await getDb()
    console.log(`llega creatPlayer`)
    await db.collection('users').insertOne({
      name: playerName,
      partidesWin: 0,
      partidesLose: 0,
      percentatgeExit: 0,
      dataRegistre: new Date().toISOString(),
      games: [],
    })
  }

  async filterId(id) {
    const db = getDb()
    let result
    let player = await db.collection('users').findOne({ _id: new ObjectId(id) })
    player ? result = id : result = null
    return result
  }

  async getOnePlayer(id) {
    const db = getDb()
    const player = await db.collection('users').findOne({ _id: new ObjectId(id) })
    return player
  }

  async changeName(newName, newId) {
    const db = await getDb()
    await db.collection('users').updateOne({ _id: new ObjectId(newId) }, { $set: { name: newName } })

  }

  async updatePlayer(win, loose, percentatge, id) {
    const db = getDb()
    await db.collection('users').updateOne({ _id: new ObjectId(id) }, {
      $set: {
        partidesWin: win,
        partidesLose: loose,
        percentatgeExit: percentatge,
      }
    })
  }

  async createGame(id, dau1, dau2) {
    const db = await getDb()
    let result = "loose"
    if (dau1 + dau2 == 7) { result = "win" }
    const newGame = {
      player: id,
      dau1: dau1,
      dau2: dau2,
      resultatPartida: result
    }
    await db.collection('users').updateOne({ _id: new ObjectId(id) }, { $push: { games: newGame } })
  }
  async deleteGames(id) {
    console.log('llega DELETE games')
    const db = await getDb()
    await db.collection('users').updateOne({ _id: new ObjectId(id) }, { $set: { games: [] } })
  }

  async getGames(id) {

    const db = getDb()
    const user = await db.collection('users').findOne({ _id: new ObjectId(id) })
    const partides = user.games
    return partides
  }

  async getRanking() {
    const db = await getDb()
    let rankingList = []
    const ranking = await db.collection('users').find({}).sort({ percentatgeExit: -1 })
    await ranking.forEach((ele) => rankingList.push(ele))
    console.log(rankingList)
    return rankingList
  }
  async getWinner() {
    const db = await getDb()
    let rankingList = []
    const ranking = await db.collection('users').find({}).sort({ percentatgeExit: -1 })
    await ranking.forEach((ele) => rankingList.push(ele))
    console.log(rankingList)
    return rankingList[0]
  }

  async getLoser() {
    const db = await getDb()
    let rankingList = []
    const ranking = await db.collection('users').find({}).sort({ percentatgeExit: 1 })
    await ranking.forEach((ele) => rankingList.push(ele))
    console.log(rankingList)
    return rankingList[0]
  }
  async resetTable() {
    const db = await getDb()
    await db.collection('users').deleteMany({})
  }
}

module.exports = { UserRepoMongodb }
