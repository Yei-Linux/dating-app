import express from 'express';
import cors from 'cors';
import http from 'http';
import { DiscoverRouter } from './modules/discoverPeople/router';
import { APP_PORT } from './config';
import { ImboxRouter } from './modules/imbox/router';
import { ChatRouter } from './modules/chat/router';
import { ProfileRouter } from './modules/profile/router';
import { AuthRouter } from './modules/auth/router';
import { authMiddleware } from './modules/shared/middlewares';

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(authMiddleware);

app.use('/discover', DiscoverRouter);
app.use('/imbox', ImboxRouter);
app.use('/chat', ChatRouter);
app.use('/profile', ProfileRouter);
app.use('/auth', AuthRouter);

io.on('connection', (socket: any) => {
  console.log(`Connected: ${socket.id}`);
  socket.on('disconnect', () => console.log(`Disconnected: ${socket.id}`));
  socket.on('join', (chatId: number) => {
    console.log(`Socket ${socket.id} joining ${chatId}`);
    socket.join(chatId);
  });
});
app.set('io', io);

server.listen(APP_PORT, () => {
  console.log('Application running up on ', APP_PORT);
});
