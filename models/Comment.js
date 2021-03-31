let { Model, DataTypes } = require('sequelize');

let sequelize = require('../config/connection.js');

class Comment extends Model {}


Comment.init(
  {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   
     comment_text: {
        type: DataTypes.STRING,
        validate: {
          
          len: [1]
        }
      },
  favorite_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    }

  },
  },
 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;