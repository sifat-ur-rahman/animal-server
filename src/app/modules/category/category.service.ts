import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategory = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getAllCategory = async () => {
  const result = await Category.find();
  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategory,
};
