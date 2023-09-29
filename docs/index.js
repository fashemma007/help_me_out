/* eslint-disable no-multi-str */
const YAML = require('yamljs');

const swaggerDocument = {
  // openapi: '3.1.0',
  swagger: '2.0',
  info: {
    title: 'Express',
    description: 'Express API Docs',
    version: 1.0,
    contact: { email: 'fasogbaemmanuel@gmail.com' },
    liscence: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/liscences/LIS',
    },
  },
  basePath: '/',
  schemes: ['http', 'https'],
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description:
        'JWT Authorization header using the Bearer\
                tokens.\n\nExample:\n"Authorization: Bearer {token}"',
    },
  },
};

// Load individual path files and merge them into the main document
const register = YAML.load('./docs/auth/register.yml');
const login = YAML.load('./docs/auth/login.yml');
const forgotPassword = YAML.load('./docs/auth/reset-token.yml');
const updatePassword = YAML.load('./docs/auth/reset-password.yml');
const user = YAML.load('./docs/profile/users.yaml');
const update = YAML.load('./docs/profile/update_profile.yaml');

swaggerDocument.paths = {
  ...swaggerDocument.paths,
  ...register,
  ...login,
  ...forgotPassword,
  ...updatePassword,
  ...user,
  ...update,
};

module.exports = swaggerDocument;
