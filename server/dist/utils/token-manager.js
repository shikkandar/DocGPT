import jwt from 'jsonwebtoken';
export const createToken = (id, name) => {
    const payload = { id, name };
    return jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {
        algorithm: 'HS256',
    });
};
//# sourceMappingURL=token-manager.js.map