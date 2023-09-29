const { sequelize, DataTypes } = require('../../extensions/database').mysql;

// Models
const User = require('./user.model')(sequelize, DataTypes);

sequelize.sync({}).then(() => {
  console.log('Database sync done!');
});

module.exports = { User };
