require("dotenv").config()
const express = require("express")
const app = express()

const playersRouter = require("./routes/playersRouter")
const gameRouter = require("./routes/gameRouter")
const rankingRouter = require("./routes/rankingRouter")


const port = process.env.PORT || 5000

// app.get("/resettables", resetTables) // vacia las tablas mysql

app.use(express.json())


app.use(playersRouter)
app.use(gameRouter)
app.use(rankingRouter)


app.listen(port, () => {
  console.log(`Server iniciado en puerto ${port}`)
})
