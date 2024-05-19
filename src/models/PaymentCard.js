import { ObjectId, Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";

const User = new Schema({
  paymentCards: [{
    _id: { type: ObjectId },
    holderName:{ type: String },
    number: { type: Timestamp },
    expireDate: { type: Number },
    cvv: { type: Number },
  }]
});

module.exports = mongoose.model('Wallet', User);