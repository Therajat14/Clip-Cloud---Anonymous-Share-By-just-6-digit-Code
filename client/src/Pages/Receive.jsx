import { useState, useRef } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Receive() {
  const [codeArray, setCodeArray] = useState(["", "", "", "", "", ""]);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
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
    const code = codeArray.join("").trim().toLocaleUpperCase();
    if (code.length !== 6) return;

    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + `/share/${code}`,
      );
      setText(res.data.text);
      navigator.clipboard.writeText(res.data.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error(err);
      setText("Code not found or expired.");
    }
  };

  const handleManualCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-gray-950 text-white">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex flex-grow flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
        <div className="w-full max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold text-indigo-300">
            Retrieve Your Text
          </h2>
          <p className="mb-6 text-gray-300">
            Enter the 6-character code you received to access your shared text.
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
                className="h-12 w-12 rounded-lg border border-gray-700 bg-gray-800 text-center text-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            ))}
          </div>

          <button
            onClick={handleFetch}
            className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-lg font-semibold transition duration-300 hover:bg-indigo-700"
          >
            Retrieve Text
          </button>

          {text && (
            <div className="mt-10 text-left">
              <h4 className="mb-2 text-lg font-semibold text-green-400">
                Received Text:
              </h4>
              <div className="mb-4 max-h-96 overflow-y-auto rounded-lg border-4 border-slate-900 p-4 text-sm whitespace-pre-wrap text-white sm:text-base">
                {text}
              </div>

              <button
                onClick={handleManualCopy}
                className="rounded-full bg-indigo-500 px-4 py-2 text-sm text-white transition duration-300 hover:bg-indigo-600"
              >
                {copied ? "Copied!" : "Copy Text"}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
