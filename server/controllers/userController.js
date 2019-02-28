const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.loginUser = (req, res) => {
  res.json("Login User");
};

exports.registerUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({
          errors: [
            { title: "Data missing", detail: "Provide email and password" }
          ]
        });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json("Email already exists");
    }

    if (password !== confirmPassword) {
      return res.status(400).json("Password did not match");
    }

    let newuser = new User({
      username,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    newuser.password = await bcrypt.hash(newuser.password, salt);
    await newuser.save();

    res.status(201).json({
      email: newuser.email,
      username: newuser.username
    });
  }catch(err) {
    res.status(500).json(err);
  }
};
