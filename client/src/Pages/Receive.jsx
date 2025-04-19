import { useState, useRef } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Receive() {
  const [codeArray, setCodeArray] = useState(["", "", "", "", "", ""]);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^[a-zA-Z0-9]?$/.test(value)) return;
    const newCode = [...codeArray];
    newCode[index] = value;
    setCodeArray(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !codeArray[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFetch = async () => {
    const code = codeArray.join("").trim().toUpperCase();
    if (code.length !== 6) return;

    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + `/share/${code}`,
      );

      setText(res.data.text || "");
      setCopied(false);
      setFile(null);
      setDownloadUrl("");

      if (res.data.text) {
        navigator.clipboard.writeText(res.data.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }

      if (res.data.file && res.data.file.data) {
        const byteCharacters = atob(res.data.file.data);
        const byteNumbers = new Array(byteCharacters.length)
          .fill()
          .map((_, i) => byteCharacters.charCodeAt(i));
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: res.data.file.type });

        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setFile(res.data.file);
      }
    } catch (err) {
      console.error(err);
      setText("Code not found or expired.");
      setFile(null);
      setDownloadUrl("");
    }
  };

  const handleManualCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white">
      <Navbar />

      <main className="flex flex-grow flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
        <div className="w-full max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold text-indigo-300">
            Retrieve Your Text
          </h2>
          <p className="mb-6 text-gray-400">
            Enter the 6-character code to access shared content.
          </p>

          <div className="mb-6 flex justify-center gap-3">
            {codeArray.map((char, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                value={char}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                maxLength={1}
                className="h-12 w-12 rounded-md border border-gray-700 bg-gray-800 text-center font-mono text-xl text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            ))}
          </div>

          <button
            onClick={handleFetch}
            className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold transition hover:bg-indigo-700"
          >
            Retrieve Text
          </button>

          {(text || file) && (
            <div className="mt-10 text-left">
              {text && (
                <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900 p-5">
                  <h4 className="mb-3 text-lg font-semibold text-green-400">
                    Received Text:
                  </h4>
                  <div className="mb-4 max-h-80 overflow-y-auto text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
                    {text}
                  </div>
                  <button
                    onClick={handleManualCopy}
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                  >
                    {copied ? "Copied!" : "Copy Text"}
                  </button>
                </div>
              )}

              {file && downloadUrl && (
                <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
                  <h4 className="mb-3 text-lg font-semibold text-yellow-400">
                    Attached File:
                  </h4>
                  <a
                    href={downloadUrl}
                    download={file.name}
                    className="inline-block rounded-md bg-indigo-100 px-5 py-2 text-sm font-medium text-gray-900 transition hover:bg-yellow-600"
                  >
                    📁 Download {file.name}
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
