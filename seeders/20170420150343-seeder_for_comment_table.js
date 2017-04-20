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
    return queryInterface.bulkInsert('Comments', [
    {
      content: 'takut ah serem...',
      movier_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: 'lucu banget sih..',
      movier_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
