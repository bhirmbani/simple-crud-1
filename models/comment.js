'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    movier_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Comment.belongsTo(models.Movier,{foreignKey: 'movier_id'});
        Comment.belongsTo(models.Movie,{foreignKey: 'movie_id'});
      }
    }
  });
  return Comment;
};