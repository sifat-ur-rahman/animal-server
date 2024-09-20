import express, { NextFunction, Request, Response } from 'express';
import { AnimalController } from './animal.controller';
import { upload } from '../../../utils/sendImageToCloudinary';

const route = express.Router();

route.post(
  '/create-animal',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  AnimalController.createAnimal,
);
route.get('/', AnimalController.getAllAnimal);

export const animalRoute = route;
