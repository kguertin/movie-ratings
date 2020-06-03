const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Session = sequelize.define('session', {
  sid: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  expires: Sequelize.DATE,
  data: Sequelize.STRING(50000),
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

function extendDefaultFields(defaults, session) {
  return {
    data: defaults.data,
    expires: defaults.expires,
    userId: session.userId
  };
}

module.exports = {
  Session,
  extendDefaultFields
}
