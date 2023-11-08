import { Router } from 'express';
import {
  findByUserIdController,
  updateByUserIdController,
} from '../controllers';

export const ProfileRouter = Router();

ProfileRouter.get('/', findByUserIdController);
ProfileRouter.put('/', updateByUserIdController);
