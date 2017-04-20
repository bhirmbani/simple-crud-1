'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Moviers', [{
      first_name: 'Budi',
      last_name: 'Tadi',
      email: 'butad@gmail.com',
      username: 'buditad',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Imas',
      last_name: 'Rosaimas',
      email: 'rosaimas@gmail.com',
      username: 'imasros',
      password: '11111',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Moviers', null, {});
  }
};
