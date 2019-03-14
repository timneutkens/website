// next.config.js
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
const withOffline = require('next-offline')

const nextConfig = {
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /.jpg$/,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /.svg$/,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir }) {
    if (dev) {
      return defaultPathMap
    }
    // This will copy robots.txt from your project root into the out directory
    await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'))
    await copyFile(join(dir, 'sitemap.xml'), join(outDir, 'sitemap.xml'))
    return defaultPathMap
  }
}

module.exports = withOffline(nextConfig)
