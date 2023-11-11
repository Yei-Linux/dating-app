const APP_PORT = Number(process.env['APP_PORT'] ?? '3001');
const SOCKET_EVENTS = {
  SEND_PRIVATE_MESSAGE: 'newMessage',
};
const JWT_VARIABLES = {
  SALT: Number(process.env['JWT_SALT']),
  SECRET: process.env['JWT_SECRET'] ?? '',
  AUDIENCE: process.env['JWT_AUDIENCE'] ?? '',
  ISSUER: process.env['JWT_ISSUER'] ?? '',
  TOKEN_EXPIRATION: Number(process.env['JWT_TOKEN_EXPIRATION']),
};
const IMGBB_API_KEY = process.env['IMGBB_API_KEY'];

export { APP_PORT, SOCKET_EVENTS, JWT_VARIABLES, IMGBB_API_KEY };
