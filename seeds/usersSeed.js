
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, user_name: 'xXMLG_B0X_5MA5H3R_420Xx'}),
        knex('users').insert({id: 2, user_name: 'blubli'}),
        knex('users').insert({id: 3, user_name: 'Infernal_Dusk'}),
        knex('users').insert({id: 4, user_name: 'Pickled_Dragon'}),
        knex('users').insert({id: 5, user_name: 'Pickled_Goose'}),
        knex('users').insert({id: 6, user_name: 'Pickled_Possum'}),
        knex('users').insert({id: 7, user_name: 'Pickled_Rat'})
      ]);
    });
};
