var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var routes = require('./routes')

var app = express()

module.exports = app

var testGames = {games: [{game_name: 'Hearthstone'}, {game_name: 'Diablo 3'}, {game_name: 'Hearthstone'}]}


app.use(bodyParser.urlencoded({extended: true}))
app.engine('hbs', hbs({extname: 'hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('Game Pear!')
})

app.get('/test', (req, res) => {
  res.render('newUser', testGames)
})

app.get('/newuser', routes.newUser)
