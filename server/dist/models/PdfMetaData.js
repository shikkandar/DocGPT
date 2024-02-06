import mongoose from 'mongoose';
const PdfMetaDataSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model('PdfMetaData', PdfMetaDataSchema);
//# sourceMappingURL=PdfMetaData.js.map