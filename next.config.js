// next.config.js
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

module.exports = {
  target: "serverless",
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
    if (dev) {
      return defaultPathMap;
    }
    // This will copy robots.txt from your project root into the out directory
    await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
    await copyFile(join(dir, 'sitemap.xml'), join(outDir, 'sitemap.xml'));
    return defaultPathMap;
  }
};
