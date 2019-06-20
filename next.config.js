// next.config.js
const nextConfig = {
  target: "serverless",
  buildWatcherStyle: "minimalist",
  exportPathMap: async function(defaultPathMap, { dev }) {
    if (dev) {
      return defaultPathMap;
    }
    return defaultPathMap;
  }
};

module.exports = nextConfig;
