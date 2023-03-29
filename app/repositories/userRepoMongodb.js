const { MongoClient } = require("mongodb")
const connectionString =
  "mongodb+srv://david:david@cluster0.ipucfm1.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(connectionString)

class UserRepoMongodb {
  constructor() {
    this.client = client
  }
  async createPlayer(playerName, client) {
    try {
      await client.connect()
      const player = {
        name: playerName,
        partidesWin: 0,
        partidesLose: 0,
        percentatgeExit: 0,
        dataRegistre: new Date().toISOString(),
        games: [],
      }
      const result = await client
        .db("juego_dados")
        .collection("users")
        .insertOne(player)
    } catch (e) {
      console.error(e)
    } finally {
      await client.close()
    }
  }

  async filterId(id) {
    let player = "" // query mongo
    return player
  }

  async playerExists(newName) {
    let exists = "" // query mongo
    return exists
  }

  async changeName(newName) {
    // query mongo
  }

  async mostrarPartides() {}
}

module.exports = { UserRepoMongodb }
