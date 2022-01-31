import mongoose from 'mongoose';
const { Schema } = mongoose;

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

export default mongoose.model('Shipping', ShippingSchema);
