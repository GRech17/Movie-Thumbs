const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Favorite model
class Favorite extends Model {}


Favorite.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      listTitle: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      posterImg: {
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