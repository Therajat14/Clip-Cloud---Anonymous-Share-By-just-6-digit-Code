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
      className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden"
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
      <div className="flex-grow pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <div className="w-full max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-green-300">
            Paste & Share Instantly
          </h2>
          <p className="text-gray-300 mb-6">
            Paste any text below to generate a secure short code you can use on
            another device.
          </p>
          <textarea
            className="w-full h-48 border-4 border-gray-900 p-4 bg-gray-950 rounded-lg resize-none mb-6 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold text-lg transition duration-300"
          >
            Generate Code
          </button>

          {code && (
            <div className="mt-10 text-center">
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                Your Code:
              </h4>
              <div className="text-3xl font-bold text-white mb-3">{code}</div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 3000);
                }}
                className="text-sm bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-full text-white transition duration-300"
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
