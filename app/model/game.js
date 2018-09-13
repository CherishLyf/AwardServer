'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Game = app.model.define('games', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
    desc: STRING(30),
    status: INTEGER,
    banner: STRING,
    sponsor_id: INTEGER,
    sign: STRING,
    draw_type: INTEGER,
    draw_number: INTEGER,
    starttime: DATE,
    endtime: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  return Game;
};
