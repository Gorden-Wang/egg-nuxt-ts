import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.development = {
    ignoreDirs: [ '../app/nuxt/' ],
  };
  return config;
};
