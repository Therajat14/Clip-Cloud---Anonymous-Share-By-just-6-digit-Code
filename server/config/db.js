import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connection successful");
  } catch (error) {
    console.log("DB Connection error");
    process.exit(1);
  }
};

export default connectDB;
