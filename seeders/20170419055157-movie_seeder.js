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
      rating: 1,
      movier_id: 1,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/doraemon.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lord of The Ring: Fellowship of The Ring',
      description: 'Film tentang petualangan hobbit di Middle Earth.',
      rating: 1,
      movier_id: 2,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/LOTR.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ada Apa dengan Cinta 2',
      description: 'Asik dan menarik...',
      rating: 1,
      movier_id: 1,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/AADC.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Filosofi Kopi',
      description: 'saya suka minum kopi setelah nonton ini',
      rating: 1,
      movier_id: 2,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/FilosofiKopi.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Conjuring 2',
      description: 'Aduh seremnya..',
      rating: 1,
      movier_id: 2,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/TheConjuring2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Hangover',
      description: 'lucunya bikin ngakak..',
      rating: 1,
      movier_id: 1,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/Hangover.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
