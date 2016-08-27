var cmd = {
  command: 'version',
  desc:    'show version info',
  builder: {
    verbose: {
      alias:    'v',
      type:     'boolean',
      describe: 'More verbose info'
    }
  }
};

cmd.handler = function(argv) {
  var version = require('../../package.json').version;

  if (!argv.verbose) {
    return console.log(version);
  }

  console.log('careercup-cli', version);

  var h = require('../helper');
  console.log();
  console.log('Cache:   ', h.getCacheDir());
  console.log('Config:  ', h.getConfigFile());
  console.log('Database:', h.getDBFile('questions'));

  var config = require('../config');
  console.log();
  Object.getOwnPropertyNames(config).forEach(function(k) {
    console.log(k, '=', config[k]);
  });
};

module.exports = cmd;
