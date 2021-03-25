const { Model, DataTypes } = require('sequelize');
const { Favorite } = require('.');
const sequelize = require('../config/connection');

// create our Favorite model
class Favorite extends Model {}


Favorite.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'favorite'
    }
  );

  module.exports = Favorite;