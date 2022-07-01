module.exports = {
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production'
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
    }
  },
}
