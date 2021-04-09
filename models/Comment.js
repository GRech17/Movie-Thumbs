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
    movie_id: {
      type: DataTypes.INTEGER,
  allowNull: false
   },
   
     comment_text: {
        type: DataTypes.STRING,
        validate: {
          
          len: [1]
        }
      },
  favorite_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'favorite',
          key: 'id'
        }
    
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'

    created_at: {
      type: DataTypes.DATE,
      allowNull: true

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