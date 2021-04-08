const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const validator = require("validator");

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: function validateEmail(username) {
            return validator.validate(username);
        }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [4]
          }
        },
        watchlist: {
          type: DataTypes.STRING,
          allowNull: true
         
        }
        // favorite_id: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        //   references: {
        //     model: 'favorite',
        //     key: 'movie_id'
        //   }
        // },
      },
  {
      hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
      },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
