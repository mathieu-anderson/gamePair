var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var routes = require('./routes')

var app = express()

module.exports = app

app.use(bodyParser.urlencoded({extended: true}))
app.engine('hbs', hbs({extname: 'hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('Game Pear!')
})
