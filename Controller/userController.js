const userModel = require("../Model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Creating user function
const userSignup = async (req, res) => {
  const { password, ...others } = req.body;

  //salting password
  const salt = await bcrypt.genSaltSync(10);

  //hashing password
  const hashPassword = await bcrypt.hash(password, salt);
  console.log(hashPassword);

  //checking if user email already exist
  const checkUserEmail = await userModel.findOne({ email: others.email });
  if (checkUserEmail) {
    return res.status(409).json("User Already Exist");
  }

  //Saving user's information
  try {
    const newUser = new userModel({ password: hashPassword, ...others });
    await newUser.save();
    return res.status(201).json("User account created successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json("Unable to create account");
  }
};

//function for user Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //check if email and password matches
  if (!email || !password) {
    return res.status(400).json("Provide valid credentials");
  }

  //checking if user has an account
  const checkUser = await userModel.findOne({ email });
  if (!checkUser) {
    return res.status(400).json("User does not exist: Create an account");
  }
  //check if password is correct
  const checkPassword = bcrypt.compareSync(password, checkUser.password);
  if (!checkPassword) {
    return res.status(400).json("Invalid Password");
  }

  //Generating a jwt token
  const token = jwt.sign({ id: checkUser.id }, process.env.JWT_SECRET);
  console.log(token);

  //logging in the user
  return res
    .cookie("token", token, { httpOnly: true })
    .status(200)
    .json(checkUser);
};

module.exports = { userSignup, loginUser };
