var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {newUser}


function newUser(req, res){
  knex('games')
    // .then(thing => {
    //   console.log(Object.keys(thing))
    // })
    .then(gamesArray => {
      res.render('newUser', {games: gamesArray})
    })
}
