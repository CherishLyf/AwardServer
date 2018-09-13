'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.changeColumn('games', 'status', {
      type: INTEGER,
      defaultValue: 0,
      allowNull: false,
    });
    await queryInterface.changeColumn('games', 'sponsor_id', {
      type: INTEGER,
      references: {
        model: 'sponsors',
        key: 'id',
      },
    });
  },

  down: () => {
  },
};
