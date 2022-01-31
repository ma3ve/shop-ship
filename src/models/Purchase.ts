import mongoose from 'mongoose';
const { Schema } = mongoose;

const PurchaseSchema = new Schema({
  name: String,
  quantity: Number,
  pricing: Number,
  mrp: Number,
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
});

export default mongoose.model('Purchase', PurchaseSchema);
