import TextShare from "../models/textShare.js";
import { customAlphabet } from "nanoid";

// POST /api/share
export const createTextShare = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ msg: "Text is required" });

  const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);
  const code = nanoid();

  let fileData = null;

  if (req.file) {
    fileData = {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
      data: req.file.buffer, // now storing raw Buffer
    };
  }

  try {
    const newShare = new TextShare({ text, code, file: fileData });
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

    let file = null;
    if (data.file?.data) {
      file = {
        name: data.file.name,
        type: data.file.type,
        size: data.file.size,
        data: data.file.data.toString("base64"),
      };
    }

    res.status(200).json({
      text: data.text,
      file,
    });

    await TextShare.deleteOne({ code });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
