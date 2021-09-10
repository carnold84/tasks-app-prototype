module.exports = {
  outputDir: 'docs',
  pwa: {
    name: 'Tasks',
    themeColor: '#262a2c',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
  publicPath:
    process.env.NODE_ENV === 'production' ? '/tasks-app-prototype/' : '/',
};
