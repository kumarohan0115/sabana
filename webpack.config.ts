import path from "path";
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from 'copy-webpack-plugin';
import {ASSETS_URL } from './src/constants/url.constant'
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const fontsExtension = /\.(eot|otf|ttf|woff|woff2)$/;
const imageExtensions = /\.(bmp|gif|jpg|jpeg|png)$/;

const config: Configuration = {
  mode: "development",
  output: {
    publicPath: `/`,
  },
  resolve: {
    alias: {
      '@components': path.resolve('./src/components'),
      '@utils': path.resolve('./src/utils'),
      '@common-types': path.resolve('./src/common-types'),
      '@constants': path.resolve('./src/constants'),
    },
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        test: fontsExtension,
        type: 'asset',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: imageExtensions,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CopyPlugin({
      patterns: [
        { from: `./public/${ASSETS_URL}/assets-test`, to: `${ASSETS_URL}/assets-test`},
        { from: `./public/${ASSETS_URL}/favicon`, to: `${ASSETS_URL}/favicon`},
        { from: `./public/${ASSETS_URL}/fonts`, to: `${ASSETS_URL}/fonts`},
      ],
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 8086,
    hot: true,
    liveReload: true
  },
};

export default config;
