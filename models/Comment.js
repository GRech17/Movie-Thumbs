let { Model, DataTypes } = require('sequelize');

let sequelize = require('../config/connection.js');

//creat our User model
class Comment extends Model {}
//define an ID columns 

Comment.init(
  {
    // use the special Sequelize DataTypes object provide what type of data it is
    id: {
      type: DataTypes.INTEGER,
    // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
    // instruct that this is the Primary Key
      primaryKey: true,
    // turn on auto increment
      autoIncrement: true
    },
    // define a name column
     // define a password column
     comment_text: {
        type: DataTypes.STRING,
         // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
        validate: {
          // this means the password must be at least four characters long
          len: [4]
        }
      },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
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
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
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