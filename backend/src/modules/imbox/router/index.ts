import { Router } from 'express';
import { findImboxByUser } from '../controllers';

export const ImboxRouter = Router();

ImboxRouter.get('/', findImboxByUser);
