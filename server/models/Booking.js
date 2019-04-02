const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Booking = new Schema({
 startAt:{
  type: Date,
  required: 'Starting date is required'  
 },

 endAt:{
  type: Date,
  required: 'Ending date is required'
 },

 totalPrice:{
  type: String,
 },

 days:{
  type: Number,
 },

 guests:{
  type: Number,
 },

 createdAt:{
  type: Date,
  default: Date.now
 },

 user: { type: Schema.Types.ObjectId, ref: "User" },

 rental: { type: Schema.Types.ObjectId, ref: "Rental" },
 
});

module.exports = mongoose.model("Booking", Booking);
