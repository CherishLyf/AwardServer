'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const userId = ctx.session.userId;
    const isVerify = await ctx.helper.verifyToken(ctx, userId);
    if (isVerify) {
      await next();
    } else {
      return false;
    }

  };
};
