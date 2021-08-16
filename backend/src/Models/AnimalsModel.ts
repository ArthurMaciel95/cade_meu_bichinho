import { model, Schema, Types } from 'mongoose';

interface Animal {
  name: string;
  gender: string;
  breed: string;
  photo_url: string;
  city: string;
  district: string;
}

const AnimalSchema = new Schema<Animal>({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  photo_url: {
    type: String,
    required: false,
  },
  descrition: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: false,
  },
});

export default model('animal', AnimalSchema);
