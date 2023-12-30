import User from "../models/User.js";
import { setCookie } from "../utils/cookie-manager.js";
class userController {
  static loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ error: "Unauthorized", message: "Invalid email or password." });
        }

        if (user.password == password) {
            return res.status(200).json({ success: "Success", message: "Login successful." });
        } else {
            return res.status(403).json({ error: "Forbidden", message: "Incorrect password." });
        }
    } catch (error) {
        // Handle any unexpected errors
        console.error("Error in loginUser:", error);
        return res.status(500).json({ error: "Internal Server Error", message: "Something went wrong." });
    }
};

  //TODO: Implement validator
  static signupUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check if the email already exists
        const emailExists = await User.findOne({ email });

        if (emailExists) {
            return res.status(400).json({ error: "Bad Request", message: "Email already exists." });
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();

        // Set cookie
        setCookie(req, res, savedUser.email);

        return res
            .status(201)
            .json({ success: "Created", message: "User created successfully", user: savedUser });
    } catch (error) {
        // Handle any unexpected errors
        console.error("Error during user registration:", error);

        // Check for specific error types (e.g., validation errors)
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: "Bad Request", message: error.message });
        }

        return res.status(500).json({ error: "Internal Server Error", message: "Something went wrong." });
    }
};

}
export default userController;
