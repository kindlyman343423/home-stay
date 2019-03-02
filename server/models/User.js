const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

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

  rentals: [{ type: Schema.Types.ObjectId, ref: "Rental" }],

  isAdmin: {
    type: Boolean,
    default: false
  }
});

UserSchema.pre("save", function(next) {
  const user = this;
  const salt = bcrypt.genSaltSync(10);
  const hashedPsw = bcrypt.hashSync(user.password, salt);
  user.password = hashedPsw;

  next();
});

UserSchema.methods.isSamePassword = function(requestedPassword) {
  return bcrypt.compareSync(requestedPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
