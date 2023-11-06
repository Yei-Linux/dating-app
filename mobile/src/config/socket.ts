import {Socket, io} from 'socket.io-client';
import {BASE_URL} from '../constants';
import {TMessage, TSocketMessage} from '../types';

let socket: Socket<any, any>;
export const initiateSocket = (chatId: number) => {
  socket = io(`${BASE_URL}:3001`);
  if (!socket || !chatId) {
    return;
  }
  console.log('Connecting socket...');
  socket.emit('join', chatId);
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (!socket) {
    return;
  }
  socket.disconnect();
};

export const subscribeToChat = (
  cb: (param1: any, msgPayload: TMessage) => void,
  userId: number,
) => {
  if (!socket) {
    return;
  }
  socket.on('chat', (msgPayload: TSocketMessage) => {
    console.log('Websocket event received!');
    return cb(null, {
      ...msgPayload,
      owner: userId === msgPayload.senderId ? 'mine' : 'yours',
    });
  });
};
