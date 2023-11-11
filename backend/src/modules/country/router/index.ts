import { Router } from 'express';
import { findAllCountriesController } from '../controller';

export const CountryRouter = Router();

CountryRouter.get('/', findAllCountriesController);
