import {io} from 'socket.io-client';
import {BASE_URL} from '../constants';

const socket = io(`${BASE_URL}:4000`);
export default socket;
