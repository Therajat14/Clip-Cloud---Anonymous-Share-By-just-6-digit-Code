import { useState } from "react";
import axios from "axios";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { X } from "lucide-react";

export default function Share() {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) return;

    const formData = new FormData();
    formData.append("text", text);
    if (file) {
      formData.append("file", file);
    }

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/share",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setCode(res.data.code);
      navigator.clipboard.writeText(res.data.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Try again.");
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
      <Navbar />

      <div className="flex flex-grow flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
        <div className="w-full max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold text-green-300">
            Paste & Share Instantly
          </h2>
          <p className="mb-6 text-gray-300">
            Paste any text below and optionally upload a file. A unique code
            will be generated that you can access from any device.
          </p>

          <textarea
            className="mb-6 h-48 w-full resize-none rounded-lg border border-gray-800 bg-gray-950 p-4 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {!showFileInput && (
            <button
              onClick={() => setShowFileInput(true)}
              className="mb-4 rounded-lg bg-gray-800 px-4 py-2 text-sm text-indigo-300 transition hover:bg-gray-700 hover:text-indigo-200"
            >
              + Add File (optional)
            </button>
          )}

          {showFileInput && (
            <div className="relative mb-6 rounded-lg border border-gray-700 bg-gray-800 p-4 text-left">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">
                  Upload a file
                </span>
                <button
                  onClick={() => {
                    setShowFileInput(false);
                    setFile(null);
                  }}
                  className="text-gray-400 hover:text-red-400"
                >
                  <X size={18} />
                </button>
              </div>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="block w-full text-sm text-gray-200 file:mr-4 file:rounded-md file:border-0 file:bg-green-600 file:px-4 file:py-2 file:text-white hover:file:bg-green-700"
              />
              {file && (
                <div className="mt-2 text-sm text-gray-300">
                  Selected file: <strong>{file.name}</strong>
                </div>
              )}
              <p className="mt-1 text-xs text-gray-400">Max file size: 5MB</p>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-green-600 px-6 py-3 text-lg font-semibold transition duration-300 hover:bg-green-700"
          >
            Generate Code
          </button>

          {errorMsg && <p className="mt-4 text-sm text-red-500">{errorMsg}</p>}

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
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white transition duration-300 hover:bg-indigo-700"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
