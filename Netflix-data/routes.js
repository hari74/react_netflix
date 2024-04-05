const express = require('express')
const parser = require('body-parser')
const db=require('mongoose')

const cont = require('./Controller/controller')

let app = express()

app.use(parser.json())
app.post('/',cont.create)
app.get('/',cont.getdata)
app.put('/:id',cont.updatedata)
app.delete('/:id',cont.deletedata)

module.exports = app