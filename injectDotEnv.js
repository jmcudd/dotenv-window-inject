require('dotenv').config();

exports.injectDotEnv = function(
  whitelist = [],
  prefix = 'APP_',
  target = 'env',
) {
  const publicEnvKeys = Object.keys(process.env).filter(env => {
    return env.startsWith(prefix) || whitelist.includes(env);
  });

  var output = '';

  output += `window.${target}={`;
  publicEnvKeys.forEach(key => {
    output += `${key}:'${process.env[key].replace(/(^")|("$)/g, '')}', `;
  });
  output += '};';

  output = `<script>${output}</script>`;
  return output;
};
