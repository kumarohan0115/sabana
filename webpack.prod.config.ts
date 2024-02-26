import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin from 'copy-webpack-plugin';
import { BASE_PAGE_URL, ASSETS_URL } from './src/constants/url.constant'

const fontsExtension = /\.(eot|otf|ttf|woff|woff2)$/;
const imageExtensions = /\.(bmp|gif|jpg|jpeg|png)$/;

const config: Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: `${BASE_PAGE_URL}`,
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
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: `./public/${ASSETS_URL}/assets-test`, to: `${ASSETS_URL}/assets-test`},
        { from: `./public/${ASSETS_URL}/favicon`, to: `${ASSETS_URL}/favicon`},
        { from: `./public/${ASSETS_URL}/fonts`, to: `${ASSETS_URL}/fonts`}
      ],
    }),
  ],
  optimization: {
    runtimeChunk: "single", // creates a runtime file to be shared for all generated chunks.
    splitChunks: {
      chunks: "all", // This indicates which chunks will be selected for optimization.
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendor: {
          // to convert long vendor generated large name into vendor.js
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // minify the css
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // It will drop all the  statements from the final production build
          },
          compress: {
            drop_console: true, // It will stop showing any  statement in dev tools. Make it false if you want to see consoles in production mode.
          },
        },
        extractComments: false,
        exclude: [], // If you want to exclude any files so that it doesn't get minified.
      }),
    ],
  },
};

export default config;
