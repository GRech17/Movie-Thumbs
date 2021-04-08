let { Model, DataTypes } = require('sequelize');

let sequelize = require('../config/connection.js');

class Comment extends Model {}


Comment.init(
  {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // title:{
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
  
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);


module.exports = Comment;