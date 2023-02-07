import { defineConfig } from 'dumi';
const navConfig = require('./config/navConfig');
const menuConfig = require('./config/menuConfig.ts');
export default defineConfig({
  themeConfig: {
    name: 'website design',
    nav: navConfig,
    sidebar: menuConfig,
  },
});
