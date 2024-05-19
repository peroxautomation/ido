import { ObjectId, Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";

const SubscriptionSchema = new Schema({
  _id: { type: ObjectId },
  userId: { type: ObjectId },
  current: {
    plan: {
      type: String,
      enum: ['FREE', 'PREMIUM']
    },
    duration: {
      type: String,
      enum: ['MONTHLY', 'YEARLY']
    },
    status: {
      type: String,
      enum: ['INACTIVE', 'ACTIVE']
    },
    amount: { type: Number },
    renewDate: { type: Timestamp },
    paymentMethod: { type: String},
    cardId: { type: ObjectId },
    walletId: { type: ObjectId},
  },
  //Top Up array
  history: [{
    _id: { type: ObjectId },
    plan: {
      type: String,
      enum: ['FREE', 'PREMIUM']
    },
    amount: { type: Number },
    expireDate: { type: Timestamp },
  }],
});

module.exports = mongoose.model('Wallet', SubscriptionSchema);