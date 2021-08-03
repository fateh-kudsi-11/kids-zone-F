// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://kids-zone2.herokuapp.com/:path*'
      }
    ];
  }
};
