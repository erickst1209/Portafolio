
const path = require('path')
const express = require('express')


module.exports = (app) => {
    
    app.use(express.static(path.join(__dirname,'../config')))
    app.get('/',(req,res) => {
        res.sendFile(path.join(__dirname,'../index.html'))
    })
    app.get('*',(req,res) => {
        res.status(404).send('Esta pagina no existe')
    })
    return app
}