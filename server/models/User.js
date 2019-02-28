const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    min: [4, "Too short ,minimum characters required is 4"],
    max: [32, "Too long ,maximum characters required is 32"]
  },

  email: {
    type: String,
    min: [4, "Too short ,minimum characters required is 4"],
    max: [32, "Too long ,maximum characters required is 32"],
    required: "Email is required",
    lowercase: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },

  password: {
    type: String,
    min: [4, "Too short ,minimum characters required is 4"],
    max: [32, "Too long ,maximum characters required is 32"]
  },

  rentals: [{ type: Schema.Types.ObjectId, ref: "Rental" }]
});

module.exports = mongoose.model("User", UserSchema);
