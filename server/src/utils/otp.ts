import { Request, Response, NextFunction } from 'express';
import OTP from "../models/OTP.js";

export const generateOTP = (length: number) => {
  const digits = '0123456789';
  let OTP = '';

  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  return OTP;
}

export async function storeOTP(user_id, otp) {

  const otpDocument = new OTP({
    user_id: user_id,
    otp_code: otp
  });
  await otpDocument.save();
  // Send email with OTP to user
}

export async function verifyOTP(req: Request, res: Response, next: NextFunction) {
  const user_id = req.locals.id;
  console.log(req.otp);
  const otp_entered = req.params.otp || req.otp;
  const otpDocument = await OTP.findOne({ user_id: user_id });
  if (otpDocument && otpDocument.otp_code === otp_entered) {
    // OTP is valid
    // Mark user's email as verified
    // Remove OTP document
    await OTP.deleteOne({ _id: otpDocument._id });
    res.status(200).json({ message: 'email verified' });
  }
  else {
    res.json({ message: 'Incorrect OTP' });
  }
}