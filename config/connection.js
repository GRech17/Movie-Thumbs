// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  // ? new Sequelize(process.env.JAWSDB_URL)
  // : new Sequelize('movie_Thumbs_db', 'root', 'hijodeputa1', {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      define: {
        timestamps: false
    }
    });

// Exports the connection for other files to use

module.exports = sequelize;