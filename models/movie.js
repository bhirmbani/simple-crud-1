'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    movier_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Movie.belongsTo(models.Movier,{foreignKey: 'movier_id'});
        // Movie.hasMany(models.Comment,{foreignKey: 'movie_id'});
        Movie.belongsToMany(models.Comment, {
          through: 'CommentMovies',
          foreignKey: 'movie_id'
        });
      }
    }
  });
  return Movie;
};