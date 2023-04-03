const jwt = require('jsonwebtoken')
const express = require("express")
const app = express()
const key = process.env.JWT_KEY


app.set('key', key)

const tokenVerification = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (!token) {
        res.status(401).send('Necesario token para auteticación')
        return
    }
    if (token.startsWith('Bearer')) {
        token = token.slice(7, token.length)
    }
    if (token) {
        jwt.verify(token, app.get('key'), (error, decoded) => {
            if (error) {
                return res.json({
                    message: 'Invalid token'
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    }
    console.log('desde tokenVerification', token)
}

module.exports = { tokenVerification }