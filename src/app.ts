import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { categoryRoute } from './app/modules/category/category.route';
import globalErrorHandler from './utils/errorHandler';
import { animalRoute } from './app/modules/animal/animal.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

//route
app.use('/api/v1/categories', categoryRoute);
app.use('/api/v1/animals', animalRoute);

app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Animal Server is running!');
});

export default app;
