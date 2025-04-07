const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false // Ustawienie, które rozwiązuje problem
            }
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "widgets/main-menu")
  }
};
