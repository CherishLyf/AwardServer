'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  const webAuth = app.middleware.webAuth();

  // backstage
  router.post('/web/user/login', controller.backstageController.user.login);
  router.get('/web/user/info', webAuth, controller.backstageController.user.getInfo);
  router.post('/web/game/add', webAuth, controller.backstageController.game.add);
  router.post('/web/game/getList', webAuth, controller.backstageController.game.getList);
};
