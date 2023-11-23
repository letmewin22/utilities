const webpack = require('webpack')
const path = require('path')

function createConfig(env) {
  const webpackConfig = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      clean: true,
      library: '@emotion-agency/utils',
      globalObject: 'this',
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          use: ['ts-loader'],
          exclude: path.resolve(__dirname, 'node_modules'),
        },
      ],
    },
  }

  return webpackConfig
}

module.exports = createConfig
