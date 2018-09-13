'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('web_users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: STRING(30),
      password: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('web_users');
  },
};
