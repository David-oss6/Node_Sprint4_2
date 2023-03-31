const { MongoClient } = require("mongodb")
const url = "mongodb://localhost:27017/juego_dados"
const url2 = "mongodb://127.0.0.1:27017/juego_dados"

let dbConnection

const connectToDb = async (cb) => {
  try {
    const client = await MongoClient.connect(url2)
    dbConnection = client.db()
    return cb()
  } catch (err) {
    console.log(err)
    return cb(err)
  }
}
const getDb = () => dbConnection

module.exports = { connectToDb, getDb }


