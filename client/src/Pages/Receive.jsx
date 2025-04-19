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
        import.meta.env.VITE_API_URL + `/share/${code}`
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
    <div className="min-h-screen flex flex-col  bg-gray-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <div className="w-full max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-indigo-300">
            Retrieve Your Text
          </h2>
          <p className="text-gray-300 mb-6">
            Enter the 6-character code you received to access your shared text.
          </p>

          <div className="flex justify-center gap-3 mb-6">
            {codeArray.map((char, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                value={char}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                maxLength={1}
                className="w-12 h-12 text-center text-xl bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>

          <button
            onClick={handleFetch}
            className="w-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold text-lg transition duration-300"
          >
            Retrieve Text
          </button>

          {text && (
            <div className="mt-10 text-left">
              <h4 className="text-lg font-semibold text-green-400 mb-2">
                Received Text:
              </h4>
              <div className=" border-4 border-slate-900 rounded-lg text-white text-sm sm:text-base whitespace-pre-wrap p-4 mb-4 max-h-96 overflow-y-auto">
                {text}
              </div>

              <button
                onClick={handleManualCopy}
                className="text-sm bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-full text-white transition duration-300"
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
