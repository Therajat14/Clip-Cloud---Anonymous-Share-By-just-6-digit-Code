import express from "express";
import {
  createTextShare,
  getTextByCode,
} from "../controllers/textController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/share", upload.single("file"), createTextShare);
router.get("/share/:code", getTextByCode);

// route to test or first server hit health check
router.get("/health", (req, res) => {
  res.status(200).send("Server is active");
});
export default router;
