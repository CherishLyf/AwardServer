'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('games', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      desc: STRING(30),
      status: INTEGER,
      banner: STRING,
      sponsor_id: INTEGER,
      sign: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
