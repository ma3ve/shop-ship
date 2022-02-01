import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import joi from 'joi';

const { Schema } = mongoose;

export const purchaseJoi = joi.object({
  name: joi.string().required(),
  quantity: joi.number().required(),
  price: joi.number().required(),
  mrp: joi.number().required(),
  customer: joi.string().required(),
});

const PurchaseSchema = new Schema({
  name: String,
  quantity: Number,
  price: Number,
  mrp: Number,
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
});

PurchaseSchema.plugin(mongoosePaginate);

export default mongoose.model('Purchase', PurchaseSchema);
