import {
  encryptPassword,
  generateToken,
  comparePassword,
} from "../utils/encrypt.js";
import userModel from "../models/userModel.js";

export const register = async (req, res) => {
  const { email, password, fullname } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exist!" });
    }

    const hashPassword = encryptPassword(password);
    const newUser = new userModel({
      email,
      password: hashPassword,
      fullName: fullname,
    });
    const saveUser = await newUser.save();
    const token = generateToken({
      _id: saveUser._id,
      email: saveUser.email,
      fullName: saveUser.fullName,
      role: saveUser.role,
    });
    return res
      .status(201)
      .json({ message: "Register Success", token, saveUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(" Server Error");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist!" });
    }
    const isMatch = comparePassword(user.password, password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password" });
    }
    const token = generateToken({
      _id: user._id,
      role: user.role,
    });
    return res.status(200).json({ message: "Login Success", token, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(" Server Error");
  }
};
