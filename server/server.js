import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import textRoutes from "./routes/textRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://text-bridge-eight.vercel.app",
      "https://www.incogshare.fun",
    ],
  })
);

// Routes
app.use("/api/", textRoutes);

app.listen(4000, () => {
  console.log("Server Running on http://localhost:4000");
});
