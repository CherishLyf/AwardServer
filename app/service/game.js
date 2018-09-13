'use strict';

const Service = require('egg').Service;

class GameService extends Service {
  async add(req) {
    const { ctx } = this;
    const game = await ctx.model.Game.create(req);
    return game;
  }

  async getList(req) {
    const { ctx } = this;
    const { page = 1, limit = 10, status = '0,1' } = req;
    const offset = (page - 1) * limit;
    const options = {
      offset,
      limit: Number(limit),
      where: {
        status: status.split(','),
      },
    };

    const list = await ctx.model.Game.findAndCountAll(options);
    return list;
  }
}

module.exports = GameService;
