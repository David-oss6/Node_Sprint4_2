const express = require("express")

const getPruebas = require("../controllers/getPruebas")
const router = express.Router()

router.get("/pruebas", getPruebas)

module.exports = router
