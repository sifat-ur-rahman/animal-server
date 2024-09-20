/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { sendImageToCloudinary } from '../../../utils/sendImageToCloudinary';
import { Category } from '../category/category.model';
import { TAnimal } from './animal.interface';
import { Animal } from './animal.model';

const createAnimal = async (file: any, payload: TAnimal) => {
  const category = await Category.findById(payload.category);
  if (!category) {
    throw new Error('Category does not exist!!');
  }
  const fileBuffer = file?.buffer;
  const imageName = file?.originalname || '';
  console.log(imageName, 'imageNme');
  console.log(payload, file);
  //send image to cloudinary
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const { secure_url } = await sendImageToCloudinary(imageName, fileBuffer);
  payload.image = secure_url;
  const result = await Animal.create(payload);
  return result;
};

const getAllAnimal = async () => {
  const result = await Animal.find().populate('category');
  return result;
};

export const AnimalService = {
  createAnimal,
  getAllAnimal,
};
