require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.MYSQL_PORT || 3001

const db = require("./models")

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("SERVER RUNNING")
  })
})
