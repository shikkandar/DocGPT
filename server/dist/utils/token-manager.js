import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";
export const createToken = (id, name) => {
    const payload = { id, name };
    return jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {
        algorithm: "HS256",
    });
};
export const verifyToken = (req, res, next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    console.log(token);
    if (!token || token.trim() === "") {
        // no auth token
        return res.status(401).send({ message: "Token not recieved" });
    }
    return new Promise((resolve, reject) => {
        return jwt.
            verify(token, process.env.JWT_PUBLIC_KEY, (err, success) => {
            if (!success) {
                console.log(err.message);
                return res.status(401).json({ message: 'Token Expired' });
            }
            else {
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        });
    });
};
//# sourceMappingURL=token-manager.js.map