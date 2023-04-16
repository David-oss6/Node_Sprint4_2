require('dotenv').config()
const express = require("express")
const app = express()
const db = require("./database/models")// sequelize

const playersRouter = require("./routes/playersRouter")
const gameRouter = require("./routes/gameRouter")
const rankingRouter = require("./routes/rankingRouter")
const loginRouter = require('./routes/loginRouter')
const { connectToDb } = require("./database/mongoConnection")

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(loginRouter)
app.use(playersRouter)
app.use(gameRouter)
app.use(rankingRouter)

if (process.env.DB === "mysql") {
  console.log('********* process.env.DB=', process.env.DB, '***********')
  db.sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`SERVER * MYSQL * RUNNING AT PORT ${port}`)
    })
  })
}

if (process.env.DB === "mongodb") {
  console.log('********* process.env.DB=', process.env.DB, '***********')
  connectToDb((error) => {
    !error && app.listen(port, () => {
      console.log(`SERVER * MONGODB * RUNNING AT PORT ${port}`)
    })
  })
}




