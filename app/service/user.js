'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // async find(uid) {
  //   const user = await this.ctx.db.query('select * from user where uid = ?', uid);
  //   return user;
  // }

  async createToken(id) {
    const { app } = this;
    const token = await app.jwt.sign({ id }, app.config.jwt.secret, {
      expiresIn: '1h',
    });

    return token;
  }

  async verifyToken(token) {
    const { app } = this;
    return app.jwt.verify(token, app.config.jwt.secret, function(err, decoded) {
      if (err) {
        return {
          verify: false,
          message: err.message,
        };
      }
      return {
        verify: true,
        message: decoded,
      };
    });
  }

  async getUserInfo(req) {
    const { ctx } = this;
    const user = await ctx.model.WebUser.findOne({
      where: {
        username: req.username,
      },
    });
    return user;
  }
}

module.exports = UserService;
