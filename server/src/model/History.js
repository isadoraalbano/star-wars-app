import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  search: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const History = mongoose.model('History', historySchema);
