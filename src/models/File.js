import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  category: { type: String },
  url: { type: String },
  datetime: { type: Date },
});

export default mongoose.model('files', FileSchema);
