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
      description: 'Stand by Me Doraemon (STAND BY ME ドラえもん?) adalah film animasi pencitraan hasil komputer Jepang tahun 2014. Film ini diadaptasi dari serial manga Doraemon. Film yang disutradarai oleh Takashi Yamazaki dan Ryūichi Yagi.[5] Film ini akan dirilis pada tanggal 8 Agustus 2014 oleh Walt Disney International Japan.[6][2] Film ini menceritakan bagaimana Doraemon harus meninggalkan sahabat terbaiknya.',
      rating: 1,
      movier_id: 1,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/doraemon.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lord of The Ring: Fellowship of The Ring',
      description: 'Seorang hobbit muda, Frodo, menemukan cincin milik Sauron Pangeran Kegelapan, memulai perjalanannya dengan delapan sahabat menuju Gunung Doom, satu-satunya tempat di mana Cincin bisa dihancurkan',
      rating: 1,
      movier_id: 2,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/LOTR.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ada Apa dengan Cinta 2',
      description: 'Ada Apa dengan Cinta? 2 adalah sebuah film Indonesia produksi Miles Productions yang merupakan sekuel dari Ada Apa dengan Cinta? yang rilis tahun 2002. Film ini tayang di Indonesia pada 28 April 2016.[1][2] Film ini masih dibintangi oleh pemeran film sebelumnya, termasuk Dian Sastrowardoyo sebagai Cinta dan Nicholas Saputra sebagai Rangga. Film ini berhasil meraih 3,6 juta penonton dan menjadi film Indonesia terlaris kedua tahun 2016. Selain itu kesuksesan ini juga melampaui pencapaian film pertamanya.[3]',
      rating: 1,
      movier_id: 1,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/AADC.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Filosofi Kopi',
      description: 'Filosofi Kopi adalah sebuah buku fiksi karya Dewi Lestari yang akrab dipanggil dengan nama Dee. Selain Filosofi Kopi, karya lain Dee adalah Supernova, Rectoverso, dan Perahu Kertas. Melalui buku Filosofi Kopi ini, Dee ingin menghadirkan bagaimana perjuangan seorang yang memiliki hobi terhadap kopi dan memaknai kopi dari sudut pandang kehidupan. Buku ini dianugerahi sebagai karya sastra terbaik tahun 2006 oleh majalah Tempo . Pada tahun yang sama, Filosofi Kopi juga berhasil dinobatkan menjadi 5 Besar Khatulistiwa Award kategori fiksi.',
      rating: 1,
      movier_id: 2,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/FilosofiKopi.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Conjuring 2',
      description: 'Film The Conjuring 2 masih mengisahkan tentang pasangan penyelidik supernatural, Ed (Patrick Wilson) dan Lorraine Warren (Vera Famiga). Kali ini, keduanya menangani kasus dari satu keluarga di Enfield, London, yang tengah dihantui makhluk halus.',
      rating: 1,
      movier_id: 2,
      image_url: 'https://www.imageupload.co.uk/images/2017/04/20/TheConjuring2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Hangover',
      description: 'The Hangover adalah film komedi Amerika Serikat tahun 2009 yang disutradarai oleh Todd Phillips, ditulis oleh Jon Lucas, dan diproduseri oleh Todd Phillips dan Daniel Goldberg. Film ini dibintangi oleh Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha, dan Heather Graham. Film ini dirilis di Amerika Utara pada 5 Juni 2009 dan mendapat tanggapan positif serta sukses di pasaran.',
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
