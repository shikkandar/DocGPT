import {Request, Response, NextFunction} from 'express';
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const createToken = (id: String, name: String) => {
  const payload = { id, name };
  return jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {
    algorithm: "HS256",
  });
};

export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  const token = req.signedCookies[`${COOKIE_NAME}`];
  console.log(token);
  if(!token || token.trim() === ""){
    // no auth token
    return res.status(401).send({message: "Token not recieved"});
  }
  return new Promise<void>((resolve, reject) => {
     return jwt.
     verify(token as string, process.env.JWT_PUBLIC_KEY, (err, success) => {
      if (!success) {
        console.log(err.message);
        return res.status(401).json({message:'Token Expired'});
      }
      else{
        resolve();
        res.locals.jwtData = success;
        return next();
      }
     })

  });
};
