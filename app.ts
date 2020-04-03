import { Application, IBoot } from 'egg';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Nuxt, Builder } = require('nuxt');
/*
 * @Author: Gorden
 * @Date: 2020-04-02 18:14:54
 * @LastEditors: Gorden
 * @LastEditTime: 2020-04-03 12:02:02
 */
class AppBootHook implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }


  async configWillLoad() {
    // 所有的配置已经加载完毕
    // 可以用来加载应用自定义的文件，启动自定义的服务

    // 例如：创建自定义应用的示例
    this.app.nuxt = new Nuxt(this.app.config.nuxtConfig);
    await this.app.nuxt.ready();
    if (this.app.config.nuxtConfig.dev) {
      const builder = new Builder(this.app.nuxt);
      await builder.build();
    }
  }

}

module.exports = AppBootHook;
