const pxToViewport = require('postcss-px-to-viewport');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxToViewport({
            viewportWidth: 375,
          }),
        ],
      },
    },
  },
};
