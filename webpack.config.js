const webpack = require('webpack')
const path = require('path')

function createConfig(env) {
  const webpackConfig = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.ts'),
    experiments: {
      outputModule: true,
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'build'),
      library: {
        type: 'module',
      },
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          use: ['ts-loader'],
          exclude: ['/node_modules/', /.test.*/gm],
        },
      ],
    },
  }

  return webpackConfig
}

module.exports = createConfig
