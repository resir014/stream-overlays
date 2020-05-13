/* eslint-disable dot-notation */

const nextConfig = {
  env: {
    AIRTABLE_API_KEY: process.env['AIRTABLE_API_KEY'],
    SAWERIA_STREAM_KEY: process.env['SAWERIA_STREAM_KEY']
  }
}

module.exports = nextConfig
