import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import textRoutes from "./routes/textRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Routes
app.use("/api/", textRoutes);

app.listen(4000, () => {
  console.log("Server Running on http://localhost:4000");
});
