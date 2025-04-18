import express from "express";
import {
  createTextShare,
  getTextByCode,
} from "../controllers/textController.js";

const router = express.Router();

router.post("/share", createTextShare);
router.get("/share/:code", getTextByCode);

export default router;
