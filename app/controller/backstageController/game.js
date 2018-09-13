'use strict';

const Controller = require('egg').Controller;

class GameController extends Controller {
  async add() {
    const { ctx, service } = this;
    const paramsRule = {
      name: {
        type: 'string',
        required: true,
      },
    };
    // 检验参数
    ctx.validate(paramsRule);
    const game = await service.game.add(ctx.request.body);
    try {
      ctx.helper.success({
        ctx,
        res: game,
        msg: 'add game success',
      });
    } catch (err) {
      ctx.helper.fail({
        ctx,
        code: 100001,
      });
    }
  }

  async getList() {
    const { ctx, service } = this;
    const list = await service.game.getList(ctx.request.body);
    ctx.helper.success({
      ctx,
      res: list,
      msg: 'add game success',
    });
  }
}

module.exports = GameController;
