import { Router } from 'express';
import { SigninController, signUpController } from '../controllers';
import { multerUpload } from '../../shared';

export const AuthRouter = Router();

AuthRouter.post('/sign-up', multerUpload.single('file'), signUpController);
AuthRouter.post('/sign-in', SigninController);
