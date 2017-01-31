const express = require('express')
const parseurl = require('parseurl')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secrue: false }
}))

app.use(function (req, res, next) {
  req.session.name = 'Lucas'
  next()
})

app.get('/', function (req, res, next) {
  res.send(req.session.name)
})

app.get('/login', function (req, res, next) {
  res.send('login')
})

app.listen(3000)
