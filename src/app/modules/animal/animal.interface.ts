import { Types } from 'mongoose';

export type TAnimal = {
  name: string;
  image: string;
  category: Types.ObjectId;
};
