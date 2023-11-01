import express from 'express';
import cors from 'cors';
import http from 'http';
import { DiscoverRouter } from './modules/discoverPeople/router';
import { APP_PORT } from './config';
import { ImboxRouter } from './modules/imbox/router';
import { ChatRouter } from './modules/chat/router';

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});
const sockets: any = {};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/discover', DiscoverRouter);
app.use('/imbox', ImboxRouter);
app.use('/chat', ChatRouter);

io.on('connection', (socket: any) => {
  console.log('Client Connected: ', socket?.id);
  socket.on('connectInit', (sessionId: string) => {
    console.log('New User Connected: ', sessionId);
    sockets[sessionId] = socket.id;
    app.set('sockets', sockets);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected ');
  });
});

app.set('io', io);
server.listen(APP_PORT, () => {
  console.log('Application running up on ', APP_PORT);
});
