import { ObjectId, Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";

const WalletSchema = new Schema({
    _id: { type: ObjectId },
  userId: { type: ObjectId },
  balance: {type: Number},
  //Top Up array
  topup: [{
    _id: { type: ObjectId },
    summary:  { type: String },
    time: { type: Timestamp },
    cardId: { type: ObjectId },
    amount: { type: Number },
  }],
  //Withdraw array
  withdraw: [{
    _id: { type: ObjectId },
    summary:{ type: String },
    time: { type: Timestamp },
    cardId: { type: ObjectId },
    amount: { type: Number },
  }],
  donate: [{
    _id: { type: ObjectId },
    summary:{ type: String },
    time: { type: Timestamp },
    amount: { type: Number },
    paymentMethod: { type: String },
    paymentId: { type: Number },
    cardId: { type: Number },
  }]
});

module.exports = mongoose.model('Wallet', WalletSchema);