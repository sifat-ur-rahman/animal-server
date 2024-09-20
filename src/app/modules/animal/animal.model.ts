import { model, Schema } from 'mongoose';
import { TAnimal } from './animal.interface';

const AnimalSchema = new Schema<TAnimal>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

export const Animal = model('Animal', AnimalSchema);
