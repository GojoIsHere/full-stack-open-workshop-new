const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRoute = require("express").Router();
const User = require("../models/userSchema");

userRoute.get("/", (request, response) => {
  User.find({}).then((result) => {
    response.json(result);
  });
});

userRoute.post("/signup", async (request, response, next) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const newUser = new User({
    email: body.email,
    passwordHash,
  });
  try {
    const savedUser = await newUser.save();
    response.status(201).json(savedUser);
  } catch (e) {
    next(e);
  }
});
userRoute.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);
  if (!(passwordCorrect && user)) {
    return response.status(401).json({
      error: "invalid email or password ",
    });
  }
  const userForToken = {
    email: user.email,
    id: user._id,
  };
  const token = jwt.sign(userForToken, process.env.SECRET);
  response.status(200).send({ status:"success",token, email: user.email });
});
module.exports = userRoute;
