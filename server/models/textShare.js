import mongoose from "mongoose";

const textShareSchema = new mongoose.Schema({
  code: { type: String, required: true },
  text: { type: String, required: true },
  createdAT: { type: Date, default: Date.now, expires: 600 }, // expires in 10 minutes
});

const TextShare = mongoose.model("TextShare", textShareSchema);

export default TextShare;
