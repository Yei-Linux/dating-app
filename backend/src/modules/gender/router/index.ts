import { Router } from 'express';
import { findAllGendersController } from '../controller';

export const GenderRouter = Router();

GenderRouter.get('/', findAllGendersController);
