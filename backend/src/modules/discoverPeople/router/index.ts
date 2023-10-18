import { Router } from 'express';
import {
  interactionController,
  findUserToDiscoverController,
} from '../controllers';
export const DiscoverRouter = Router();

DiscoverRouter.post('/', interactionController);
DiscoverRouter.get('/', findUserToDiscoverController);
