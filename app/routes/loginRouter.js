const { postLogin } = require('../controllers/postLogin')

const router = require('express').Router()

router.post('/login', postLogin)


module.exports = router