const milieu = require('milieu');

const config = milieu('port4-api-test', {
  environment: 'production',
  server: {
    port: (process.env.PORT || 5000)
  },
  mongo: {
    url: ''
  }
});


module.exports = config;
