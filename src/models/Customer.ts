import mongoose from 'mongoose';
const { Schema } = mongoose;

const CustomerSchema = new Schema({
  name: String,
  email: String,
  mobile: String,
  city: String,
});

export default mongoose.model('Customer', CustomerSchema);
