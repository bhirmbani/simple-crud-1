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
    },
    {
      first_name: 'Julia',
      last_name: 'Perez',
      email: 'juliaperez@gmail.com',
      username: 'juliaperez',
      image_url: 'http://imageupload.co.uk/images/2017/04/21/066414300_1435094956-Gal230615_Julia_Perez_6.jpg',
      password: '12333',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Soni',
      last_name: 'Wakwaw',
      email: 'soniwakwaw@gmail.com',
      username: 'soniwakwaw',
      image_url: 'http://imageupload.co.uk/images/2017/04/21/00109978.jpg',
      password: '22224',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Cita',
      last_name: 'Citata',
      email: 'citacitata@gmail.com',
      username: 'citacitata',
      image_url: 'http://imageupload.co.uk/images/2017/04/21/073649600_1457087543-cita_citata-50.jpg',
      password: '65444',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Dead',
      last_name: 'Pool',
      email: 'deadpool@gmail.com',
      username: 'deadpool',
      image_url: 'http://imageupload.co.uk/images/2017/04/21/111-front.jpg',
      password: '12344',
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
