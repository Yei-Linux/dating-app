const APP_PORT = Number(process.env['APP_PORT'] ?? '3001');
const SOCKET_EVENTS = {
  SEND_PRIVATE_MESSAGE: 'newMessage',
};

export { APP_PORT, SOCKET_EVENTS };
