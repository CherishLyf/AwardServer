'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, service, app } = this;
    const paramsRule = {
      username: {
        type: 'string',
        required: true,
      },
      password: {
        type: 'string',
        required: true,
      },
    };
    // 检验参数
    ctx.validate(paramsRule);
    const user = await await service.user.getUserInfo(ctx.request.body);

    if (!user) {
      ctx.helper.fail({
        ctx,
        code: 401001,
      });
    }

    const isVerifyPass = user.password === ctx.request.body.password;

    if (isVerifyPass) {
      // 设置 session
      ctx.session.userId = user.id;
      const token = await service.user.createToken(user.id);
      await app.redis.set(user.id, token);
      ctx.helper.success({
        ctx,
        res: {
          token,
        },
        msg: 'login success',
      });
    } else {
      ctx.helper.fail({
        ctx,
        code: 401001,
      });
    }
  }

  async getInfo() {
    const { ctx, app } = this;
    const user = await app.model.WebUser.findOne({
      where: {
        id: ctx.session.userId,
      },
    });
    ctx.helper.success({
      ctx,
      res: {
        user,
      },
      msg: '',
    });
  }
}

module.exports = UserController;
