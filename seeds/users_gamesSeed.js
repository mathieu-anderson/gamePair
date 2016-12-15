
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users_games').insert({id: 1, user_id: 1, game_id: 2}),
        knex('users_games').insert({id: 2, user_id: 2, game_id: 2}),
        knex('users_games').insert({id: 3, user_id: 3, game_id: 2}),
        knex('users_games').insert({id: 4, user_id: 4, game_id: 2}),
        knex('users_games').insert({id: 5, user_id: 1, game_id: 1}),
        knex('users_games').insert({id: 6, user_id: 2, game_id: 1}),
        knex('users_games').insert({id: 7, user_id: 5, game_id: 1}),
        knex('users_games').insert({id: 8, user_id: 6, game_id: 3}),
        knex('users_games').insert({id: 9, user_id: 2, game_id: 3}),
        knex('users_games').insert({id: 10, user_id: 7, game_id: 3})
      ]);
    });
};
