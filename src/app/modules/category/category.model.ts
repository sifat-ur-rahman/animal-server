import { model, Schema } from 'mongoose';
import { TCategory } from './category.interface';

const categorySchema = new Schema<TCategory>({
  categoryName: { type: String, required: true, unique: true },
});

export const Category = model('Category', categorySchema);
