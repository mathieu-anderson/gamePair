
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_games", function (table) {
    table.increments();
    table.integer("user_id");
    table.integer("game_id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users_games");
};
