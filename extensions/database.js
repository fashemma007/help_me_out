const mysql2 = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');
const MYSQL_URI = process.env.MYSQL_URI;
// require('dotenv').config({ path: '.env' });

const mysql = {};

mysql.DataTypes = DataTypes;
mysql.sequelize = new Sequelize(MYSQL_URI, {
  pool: {
    max: 1000,
    min: 0,
    accuire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    timestamps: true, // This enables timestamps (createdAt and updatedAt)
    underscored: true, // This configures the column names to be in snake_case
  },
});

const mongodb = '';

module.exports = { mysql, mongodb };
