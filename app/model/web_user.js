'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const WebUser = app.model.define('web_users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: STRING(30),
    password: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  });

  WebUser.queryOne = async function(fields) {
    return await this.findOne({
      where: {
        username: fields.username,
      },
    });
  };

  return WebUser;
};
