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
    return queryInterface.bulkInsert('Movies', [{
      title: 'Doraemon',
      description: 'Film tentang petualangan Doraemon di negeri Jepang.',
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lord of The Ring: Fellowship of The Ring',
      description: 'Film tentang petualangan hobbit di Middle Earth.',
      rating: 0,
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
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
