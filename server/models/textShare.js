import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    size: Number,
    data: Buffer,
  },
  { _id: false }
); // Don't create a separate _id for this subdoc

const textShareSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  file: fileSchema, // ✅ Accepts an object with name, type, size, data
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // auto-delete after 10 minutes
  },
});

export default mongoose.model("TextShare", textShareSchema);
