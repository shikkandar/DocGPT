import crypto from "crypto";

const passwordEncrypter = (password: String) => {
    
    const salt = crypto.randomBytes(16).toString("hex");
    
};
