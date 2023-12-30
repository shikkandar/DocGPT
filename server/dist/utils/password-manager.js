import crypto from "crypto";
const passwordEncrypter = (password) => {
    const salt = crypto.randomBytes(16).toString("hex");
};
//# sourceMappingURL=password-manager.js.map