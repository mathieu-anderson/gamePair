var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {newUser, addUser}


function newUser(req, res){
  knex('games')
    .then(gamesArray => {
      res.render('newUser', {games: gamesArray})
    })
}

function addUser(req, res){
  if(typeof req.body.gameIds === 'array'){
    var gameIds = req.body.gameIds.map(id => {
      return Number(id)
    })
  }else{
    gameIds = [Number(req.body.gameIds)]
  }
  knex('users')
    .insert({user_name: req.body.user_name})
    .then(userId => {
      var arrayToInsert = gameIds.map(gameId => {
        return {user_id: userId[0], game_id: gameId}
      })
      return knex.insert(arrayToInsert).into('users_games')
    })
    .then(res.redirect('/'))
    .catch(err => {
    })
}
