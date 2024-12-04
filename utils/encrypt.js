import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const { JWT_SECRET } = process.env;

export const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 12);
};

export const comparePassword = (hashPassword, password) => {
  return bcrypt.compareSync(password, hashPassword);
};

export const generateToken = (payload) => {
  // console.log(payload, "==payload");
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  return token;
};
