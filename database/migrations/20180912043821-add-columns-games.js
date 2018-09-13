'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.addColumn('games', 'draw_type', {
      type: STRING,
    });
    await queryInterface.addColumn('games', 'draw_number', {
      type: INTEGER,
    });
    await queryInterface.addColumn('games', 'starttime', {
      type: DATE,
    });
    await queryInterface.addColumn('games', 'endtime', {
      type: DATE,
    });
  },

  down: () => {
  },
};
