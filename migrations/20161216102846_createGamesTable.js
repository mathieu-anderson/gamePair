
exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", function (table) {
    table.increments();
    table.string("game_name");
    table.integer("num_of_players");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("games");
};
