const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/keys");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(422).json({
        errors: [
          { title: "Data missing!", detail: "Provide email or password" }
        ]
      });

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("No user found");

    const isAuth = user.isSamePassword(password);

    if (!isAuth) return res.status(400).json("Password did not match");

    const payload = {
      id: user.id,
      username: user.username,
      isAdmin: user.isAdmin
    };

    jwt.sign(payload, secretKey, (err, token) => {
      res.json({
        success: true,
        token: token
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("Something happened...");
  }
};

exports.registerUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
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
    
    await newuser.save();

    res.status(201).json({
      email: newuser.email,
      username: newuser.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (token) {
      const user = parseToken(token);

      const founduser = await User.findById(user.id);

      if (founduser) {
        res.locals.user = user;
        next();
      } else res.status(401).json("Not authorized");
    } else {
      res.status(401).json("Not authorized");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

function parseToken(token) {
  return jwt.verify(token.split(" ")[1], secretKey);
}
