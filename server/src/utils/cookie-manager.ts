import User from "../models/User.js";
import { COOKIE_NAME } from "./constants.js";
import { createToken } from "./token-manager.js";

export const setCookie = async (req, res, email) => {
  // Find the newly created user
  const savedUser = await User.findOne({ email });

  // Generate a token for the user
  const token = createToken(savedUser._id.toString(), savedUser.name);

  // Set the token as a cookie
  res.cookie("auth-token", token, {
    httpOnly: true,
    path: "/",
    signed: true,
  });
};

export const clearCookie = (req, res) => {
  res.clearCookie(COOKIE_NAME);
};
