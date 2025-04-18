import TextShare from "../models/textShare.js";
import { customAlphabet } from "nanoid";

// POST /api/share
export const createTextShare = async (req, res) => {
  const { text } = req.body;

  if (!text) return res.status(400).json({ msg: "Text is required" });

  const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);
  const code = nanoid(); // e.g. "4KF9ZL"

  try {
    const newShare = new TextShare({ text, code });
    await newShare.save();
    res.status(201).json({ code });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// GET /api/share/:code
export const getTextByCode = async (req, res) => {
  const { code } = req.params;

  try {
    const data = await TextShare.findOne({ code });
    if (!data) return res.status(404).json({ msg: "Code not found" });

    res.status(200).json({ text: data.text });

    await TextShare.deleteOne({ code });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
