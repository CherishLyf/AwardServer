'use strict';

const errorCode = require('../common/error_code');

// 处理成功响应
exports.success = ({ ctx, res = null, msg = 'success' }) => {
  ctx.body = {
    code: 0,
    data: res,
    msg,
  };
  ctx.status = 200;
};

// 处理失败响应
exports.fail = ({ ctx, code, msg, status = 200 }) => {
  ctx.body = {
    code,
    msg: msg ? msg : errorCode[code],
  };
  ctx.status = status;
};

// 获取 token
exports.getAccessToken = ctx => {
  const bearerToken = ctx.request.header.authorization;
  return bearerToken && bearerToken.replace('Bearer ', '');
};

// 校验 token
exports.verifyToken = async (ctx, id) => {
  const token = this.getAccessToken(ctx);
  const verifyResult = await ctx.service.user.verifyToken(token);
  if (!verifyResult.verify) {
    ctx.helper.fail({
      ctx,
      code: 401,
      msg: verifyResult.message,
      status: 401,
    });
    return false;
  }
  if (id !== verifyResult.message.id) {
    ctx.helper.fail({ ctx, code: 401, msg: '用户名 与 Token 不一致', status: 401 });
    return false;
  }
  return true;
};
