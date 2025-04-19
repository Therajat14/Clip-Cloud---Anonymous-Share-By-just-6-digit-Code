import { useState } from "react";
import axios from "axios";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Share() {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/share", {
        text,
      });
      setCode(res.data.code);
      navigator.clipboard.writeText(res.data.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="flex min-h-screen flex-col overflow-x-hidden bg-gray-900 text-white"
      style={{
        backgroundImage:
          "url('/bg-texture.png'), radial-gradient(circle at top left, #1f2937, #111827)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="flex flex-grow flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
        <div className="w-full max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold text-green-300">
            Paste & Share Instantly
          </h2>
          <p className="mb-6 text-gray-300">
            Paste any text below to generate a secure short code you can use on
            another device.
          </p>
          <textarea
            className="mb-6 h-48 w-full resize-none rounded-lg border-4 border-gray-900 bg-gray-950 p-4 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-green-600 px-6 py-3 text-lg font-semibold transition duration-300 hover:bg-green-700"
          >
            Generate Code
          </button>

          {code && (
            <div className="mt-10 text-center">
              <h4 className="mb-2 text-lg font-semibold text-indigo-400">
                Your Code:
              </h4>
              <div className="mb-3 text-3xl font-bold text-white">{code}</div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 3000);
                }}
                className="rounded-full bg-indigo-500 px-4 py-2 text-sm text-white transition duration-300 hover:bg-indigo-600"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
