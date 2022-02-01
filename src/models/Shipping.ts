import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import joi from 'joi';
const { Schema } = mongoose;

export const shippingJoi = joi.object({
  address: joi.string().required(),
  city: joi.string().required(),
  pinCode: joi.string().required(),
  purchase: joi.string().required(),
  customer: joi.string().required(),
});

const ShippingSchema = new Schema({
  address: String,
  city: String,
  pinCode: String,
  purchase: {
    type: Schema.Types.ObjectId,
    ref: 'Purchase',
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
});

ShippingSchema.plugin(mongoosePaginate);

export default mongoose.model('Shipping', ShippingSchema);
