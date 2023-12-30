import jwt from "jsonwebtoken";

export const createToken = (id: String, name: String) => {
  const payload = { id, name };
  return jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {
    algorithm: "HS256",
  });
};
