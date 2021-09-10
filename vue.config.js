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
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    },
  },
  publicPath:
    process.env.NODE_ENV === 'production' ? '/tasks-app-prototype/' : '/',
};
