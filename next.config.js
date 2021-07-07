module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.sql$/,
        use: 'raw-loader'
      }
    )

    return config
  },
}
