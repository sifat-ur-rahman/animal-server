import express from 'express';
import { CategoryController } from './category.controller';

const route = express.Router();

route.post('/create-category', CategoryController.createCategory);
route.get('/', CategoryController.getAllCategory);

export const categoryRoute = route;
