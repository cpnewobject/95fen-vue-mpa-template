// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var packageJson = require('../package.json')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../../../assets/'+ packageJson.name + '/'+ packageJson.version +'/index.html'),
    assetsRoot: path.resolve(__dirname, '../../../assets/'+ packageJson.name + '/' +packageJson.version+'/'),
    assetsSubDirectory: 'static',
    assetsPublicPath: packageJson.cdnDomain || '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8800,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        // '/api_activity_area/home/v1.0': {
        //     target: 'http://localhost:8800/',
        //     pathRewrite(path, option) {
        //       return   '/static/data.json';
        //     },
        //     changeOrigin: true,
        //     secure: false,
        // },
        // '/api_activity_area/threeC/v2.0': {
        //   target: 'http://www.95fenapp.com',
        //   changeOrigin: true,
        //   secure: false,
        // }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
