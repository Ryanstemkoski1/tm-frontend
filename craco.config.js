const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
      '@app': path.resolve(__dirname, 'src'),
    },
  },
};
