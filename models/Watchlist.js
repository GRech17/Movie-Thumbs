const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Favorite model
class Watchlist extends Model {}


Watchlist.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
     },
      movieTitle: {
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
      modelName: 'watchlist'
    }
  );

  module.exports = Watchlist;