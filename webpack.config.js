const MODE = 'development'
const enableSourceMap = (MODE === 'development')

module.exports = {
  mode: MODE,
  entry: './src/main.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}],
                'react'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enableSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enableSourceMap,
            }

          }

        ]
      }
    ]
  },

  devServer: {
    contentBase: "dist",
    open: true
  }
};