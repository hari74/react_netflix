// import express from 'express'
const express = require('express')
const cors = require('cors')

const db = require('mongoose')

//  const model= require('./Model/db')
const router = require('./routes')

let app = express()
db.connect('mongodb://localhost:27017/NetflixCurd')
app.use(cors())
app.use(router)

app.listen(4002)