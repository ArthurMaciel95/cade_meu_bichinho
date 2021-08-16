import { model, Mongoose, Schema } from 'mongoose';
import mongoose from 'mongoose';
export interface User extends Document {
  name: string;
  password: string;
  avatar: string;
  photo_url: string;
  phone: string;
  city: string;
  admin: boolean;
  gender: string;
}

export interface UserDocument extends User, mongoose.Document {
  fullName: string;
  createAt: Date;
  updatedAt: Date;
}

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo_url: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: false,
  },
  gender: {
    type: String,
    required: true,
  },
});

export default model('users', UsersSchema);
