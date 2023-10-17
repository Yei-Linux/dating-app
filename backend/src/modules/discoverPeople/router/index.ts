import { Router } from 'express';
import { interactionController, findController } from '../controllers';
export const DiscoverRouter = Router();

DiscoverRouter.post('/', interactionController);
DiscoverRouter.get('/', findController);
