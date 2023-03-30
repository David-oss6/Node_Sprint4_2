const { MongoClient } = require("mongodb")
const express = require('express')
const app = express()
const port = process.env.MONGODB_PORT || 5001

let dbConnection
if (process.env.DB = "mongodb") {
  connectToDb()
  const getDb = () => dbConnection
}
const connectToDb = () => {
  MongoClient.connect("mongodb://localhost:27017/juego_dados")
    .then((client) => {
      dbConnection = client.db()
      app.listen(port, () => {
        console.log(`listening MONGODB port: ${port}`)
      })
      db = getDb()

    })
    .catch((err) => {
      console.log(err)
    })
}




