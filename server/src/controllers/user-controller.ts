import User from "../models/User.js";
class userController {
   static loginUser = async (req, res, next) => {
      const {email, password} = req.body;
      const user = User.findOne({ email: email });

   }
   static signupUser = async (req, res, next) => {
       const { name, email, password } = req.body;
       const user = new User({ name, email, password });
       await user.save();  

       const savedUser = await User.findOne({ name });

       return res.status(200).json({ message:"OK", userCreated: savedUser});
   }
}
export default userController