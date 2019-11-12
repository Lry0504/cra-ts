const { override, fixBabelImports, addLessLoader, addWebpackAlias, useBabelRc, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');

//关闭 sourcemap
process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  //按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),

  //antd自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),

  // 配置别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),

  // 允许使用.babelrc文件进行Babel配置
  useBabelRc(),

  // 装饰器 依赖 @babel/plugin-proposal-decorators
  // addDecoratorsLegacy(),
);