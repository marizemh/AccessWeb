const { writeFile } = require('fs');

// Your environment.custom.ts file. Will be ignored by git.

const targetPath = './src/environments/environment.ts';

// Load dotenv to work with process.env

require('dotenv').config();

// environment.ts file structure
const envConfigFile = `
export const environment = {
    environment: '${process.env.ENVIRONMENT}',
    production: ${process.env.IS_PRODUCTION},
    hmr: ${process.env.HMR},
    frontendUrl: '${process.env.FRONTEND_URL}',
    backendApiUrl: '${process.env.BACKEND_URL}',
    auth0Domain: '${process.env.AUTH0_DOMAIN}',
    auth0ClientId: '${process.env.AUTH0_CLIENT_ID}',
};
`;

writeFile(targetPath, envConfigFile, function (err) {
	if (err) {
		console.error(err);
		throw err;
	} else {
		console.log('Generated environment.ts from .env');
	}
});
