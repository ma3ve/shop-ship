import joi from 'joi';
import mongoose from 'mongoose';
const { Schema } = mongoose;

export const CustomerJoi = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email({ tlds: false }),
  mobile: joi.string().required(),
  city: joi.string().required(),
});

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
});

export default mongoose.model('Customer', CustomerSchema);
