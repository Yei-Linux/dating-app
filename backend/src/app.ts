import express from 'express';
import cors from 'cors';
import { DiscoverRouter } from './modules/discoverPeople/router';
import { APP_PORT } from './config';
import { ImboxRouter } from './modules/imbox/router';
import { ChatRouter } from './modules/chat/router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/discover', DiscoverRouter);
app.use('/imbox', ImboxRouter);
app.use('/chat', ChatRouter);

app.listen(APP_PORT, () => {
  console.log('Server started');
});
