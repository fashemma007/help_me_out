// Models
const User = require('./video.model');

sequelize.sync({}).then(() => {
  console.log('Database sync done!');
});

module.exports = { User };
