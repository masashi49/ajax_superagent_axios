const webpack = require('webpack');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js', //起点となるjs
  output: {
    path: __dirname + "/dist", //__dirname 絶対パスが入っている
    filename: 'bundle.js' //生成されるファイル
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js", ".yml"]//拡張子を省略するファイル軍
  },
  // ここを追記
  devServer: {
    contentBase: 'dist',//index.htmlを見る箇所
    port: 3000,//サーバー名
    inline: true //ブラウザのオートリロード
  },
  module: {
    loaders: [
      {
        //正規表現。複数マッチはさる。ファイルごとに記述したほうが見やすいし事故がない。
        test: /\.yml$/,
        //ローダーの設定 ymlファイルはyaml-loaderを通ってからjson-loaderを通る
        //loader: 'json-loader!yaml-loader'
        loaders: ['json-loader', 'yaml-loader']
      }
    ]
  },
  //buildされたjsを圧縮するプラグインデバック時には外す
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),//webpackのプラグインだからnpm不要
    // new HtmlWebpackPlugin({
    //   title: 'Sample Page'
    // }
  ],
  devtool: 'source-map'

};