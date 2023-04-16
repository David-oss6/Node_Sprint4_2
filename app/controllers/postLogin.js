const { registredUsers } = require("../jason_web_token/registredUsers")
const jwt = require('jsonwebtoken')
const express = require("express")
const app = express()
const key = process.env.JWT_KEY

app.set('key', key)

const postLogin = async (req, res) => {
    const userLogin = registredUsers
        .find((usu) => {
            return usu.name == req.body.name && usu.pass == req.body.pass
        })
    if (userLogin) {
        const payload = {
            check: true
        }
        const token = jwt.sign(payload, app.get('key'), {
            expiresIn: '1d'
        })
        res.json({
            message: 'Autenticación correcta',
            token: token
        })
    } else {
        res.json({
            message: 'Usuario o pass incorrectos'
        })
    }
}


module.exports = { postLogin }