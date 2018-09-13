'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('awards', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: {
        type: STRING,
        allowNull: false,
      },
      desc: STRING,
      pic: STRING,
      num: {
        type: INTEGER,
        defaultValue: 1,
      },
      game_id: {
        type: INTEGER,
        references: {
          model: 'games',
          key: 'id',
        },
        allowNull: false,
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: () => {
  },
};
