const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(morgan('dev'))

app.use(cors({
  origin: '*',
  methods: ['GET'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
  optionsSuccessStatus: 200,
  maxAge: -1
}))

module.exports = app
