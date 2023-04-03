const { postLogin } = require('../controllers/postLogin')
const { tokenVerification } = require('../middlewares/tokenVerification')


const router = require('express').Router()


router.post('/login', postLogin)
// router.get('/info', tokenVerification, (req, res) => {
//     res.send('token correcto')
// })


module.exports = router