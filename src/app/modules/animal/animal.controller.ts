import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { AnimalService } from './animal.service';

const createAnimal = catchAsync(async (req: Request, res: Response) => {
  const result = await AnimalService.createAnimal(req.file, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Animal created successfully',
    data: result,
  });
});

const getAllAnimal = catchAsync(async (req: Request, res: Response) => {
  const result = await AnimalService.getAllAnimal();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Animal retrive successfully',
    data: result,
  });
});

export const AnimalController = {
  createAnimal,
  getAllAnimal,
};
