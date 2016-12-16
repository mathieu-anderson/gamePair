var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  search,
  usersByGame
}


function search (req, res) {
  knex("games")
    .then(gamesArray => {
      res.render("search", {games: gamesArray})
    })

}

function usersByGame (req, res) {
    knex("users_games")
      .join("games", "game_id", "=", "games.id")
      .join("users", "user_id", "=", "users.id")
      .select("*")
      .where("game_name", req.body.game_name)
      .then(rows => {
        res.render("searchResults", {searchResults: rows, game_name: req.body.game_name})
      })
  }
