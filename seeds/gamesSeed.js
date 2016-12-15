
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('games').insert({id: 1, game_name: 'Hearthstone', num_of_players: 2}),
        knex('games').insert({id: 2, game_name: 'Diablo 3', num_of_players: 4}),
        knex('games').insert({id: 3, game_name: 'Starcraft 2', num_of_players: 3})
      ]);
    });
};
