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
      movie_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: 'lucu banget sih..',
      movier_id: 1,
      movie_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: 'cinta dan rangga serasi..',
      movier_id: 2,
      movie_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: 'saya suka minum kopi setelah nonton film ini juga...',
      movier_id: 2,
      movie_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: 'serem bingits...',
      movier_id: 1,
      movie_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: 'bikin ngakak...',
      movier_id: 1,
      movie_id: 6,
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
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
