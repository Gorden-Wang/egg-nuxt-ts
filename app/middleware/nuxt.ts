/* eslint-disable @typescript-eslint/no-unused-vars */
import { Application } from 'egg';

/*
 * @Author: Gorden
 * @Date: 2020-04-02 19:34:55
 * @LastEditors: Gorden
 * @LastEditTime: 2020-04-03 11:44:32
 */
export default function(_options, app: Application) {

  let flag = false;
  let routerArr: string[] = [];
  return async (ctx, next) => {

    if (!flag) {
      routerArr = app.router.stack.map(el => el.path);
      flag = true;
    }
    if (routerArr.some(el => el === ctx.path)) {
      return await next();
    }
    // if (app.config.nuxtConfig.dev && ctx.path.startsWith('/_nuxt/')) {
    //   return await next();
    // }


    await next;


    const { res, req } = ctx;
    if (app.config.nuxtConfig.dev) {
      if (ctx.path.startsWith('/_nuxt/')) {
        ctx.status = 200;
      }
    }
    // return await app.nuxt.render(req, res);
    await new Promise(resolve => {
      app.nuxt.render(req, res, resolve);
    });
    next();

  };
}
