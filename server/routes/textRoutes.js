import express from "express";
import {
  createTextShare,
  getTextByCode,
} from "../controllers/textController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/share", upload.single("file"), createTextShare);
router.get("/share/:code", getTextByCode);

export default router;
