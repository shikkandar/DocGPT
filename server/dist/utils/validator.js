import { body, validationResult } from "express-validator";
const signupValidator = [
    body("username").trim().notEmpty().withMessage("Invalid Name"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Invalid Password"),
];
const loginValidator = [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Invalid Password"),
];
const validator = (validator) => {
    return async (req, res, next) => {
        for (let validations of validator) {
            const result = await validations.run(req);
            if (result.errors.length)
                break;
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            console.log('I am returning from validator');
            return next();
        }
        console.log('i am tresspassing');
        res.status(400).json({ errors: errors.array() });
    };
};
export { loginValidator, signupValidator, validator };
//# sourceMappingURL=validator.js.map