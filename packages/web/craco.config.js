const webpack = require("webpack");
const { getWebpackTools } = require("react-native-monorepo-tools");
const path = require('path');

const monorepoWebpackTools = getWebpackTools();

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Allow importing from external workspaces.
      monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
      // Ensure nohoisted libraries are resolved from this workspace.
      monorepoWebpackTools.addNohoistAliases(webpackConfig);

      // add the top level package as a app source path so our nohoisted
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
          ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
      );

      const [ clientSrc ] = webpackConfig.resolve.plugins[scopePluginIndex].appSrcs;
      const psvServices = path.resolve(clientSrc,'../..');

      webpackConfig.resolve.plugins[scopePluginIndex].appSrcs.push(psvServices);

      return webpackConfig;
    },
    plugins: [
      // Inject the "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== "production",
      })
    ],
  },
  babel:{
    presets:['@babel/preset-react'],
    plugins: [
      [
        '@babel/plugin-proposal-class-properties',
        {
          allowTopLevelThis: true,
          loose: true,
          noInterop: true,
          strict: true,
          exclude: [
            !path.resolve(__dirname, 'node_modules/@rneui/base'),
            !path.resolve(__dirname, 'node_modules/@rneui/themed'),
            !path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
            !path.resolve(__dirname, 'node_modules/react-native-ratings'),
            !path.resolve(__dirname, 'src'),
          ],
        },
      ]
    ],
  }
      
};
