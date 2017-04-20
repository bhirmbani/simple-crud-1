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
      first_name: 'Mister',
      last_name: 'Bean',
      email: 'mrbean@gmail.com',
      username: 'mrbean',
      password: '12345',
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/mrbean.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Cena',
      email: 'johncena@gmail.com',
      username: 'johncena',
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/john-cena.jpg',
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
