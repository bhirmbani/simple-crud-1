'use strict';
module.exports = function(sequelize, DataTypes) {
  var CommentMovie = sequelize.define('CommentMovie', {
    movie_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER,
    movier_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        CommentMovie.belongsTo(models.Comment, {
          foreignKey: 'comment_id'
        });
        CommentMovie.belongsTo(models.Movie, {
          foreignKey: 'movie_id'
        });
        CommentMovie.belongsTo(models.Movier, {
          foreignKey: 'movier_id'
        })
      }
    }
  });
  return CommentMovie;
};