const milieu = require('milieu');

const config = milieu('port4-api-test', {
  environment: 'production',
  server: {
    port: (process.env.PORT || 5000)
  },
  mongo: {
    url: 'mongodb://localhost/'
  }
});


module.exports = config;
