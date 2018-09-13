'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('sponsors', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: {
        type: STRING,
        allowNull: false,
      },
      phone: INTEGER,
      address: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: () => {
  },
};
