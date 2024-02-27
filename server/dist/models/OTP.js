import mongoose from 'mongoose';
const otpSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    otp_code: String,
    createdAt: { type: Date, expires: 600, default: Date.now }
});
export default mongoose.model('OTP', otpSchema);
//# sourceMappingURL=OTP.js.map