/* eslint-disable */

const nextConfig = {
  target: 'serverless',
  env: {
    AIRTABLE_API_KEY: process.env['AIRTABLE_API_KEY'],
    SAWERIA_ALERTS:
      'https://api.saweria.co/stream?channel=donation.20470209-b19d-49c6-ad56-bd091596465d'
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: fileName => (fileName.includes('node_modules') ? 'global' : 'scoped')
          }
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig
