module.exports = {
  entry: "./components/Main.js",
  output: {
    filename: "bundle.js",
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
};
