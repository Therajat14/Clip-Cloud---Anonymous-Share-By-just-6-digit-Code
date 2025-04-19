// src/pages/Share.jsx
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

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
      className="min-h-screen bg-gray-900 text-white px-4 overflow-x-hidden"
      style={{
        backgroundImage:
          "url('/bg-texture.png'), radial-gradient(circle at top left, #1f2937, #111827)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Navbar */}
      <nav className="w-full py-4 flex justify-between items-center px-4 md:px-10 bg-black bg-opacity-70 fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <Link to="/" className="text-xl font-bold text-indigo-400">
          TextBridge
        </Link>
        <div className="space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:text-indigo-400">
            Home
          </Link>
          <Link to="/share" className="hover:text-green-400">
            Share
          </Link>
          <Link to="/receive" className="hover:text-yellow-400">
            Receive
          </Link>
          <Link to="/about" className="hover:text-pink-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      {/* Main Section */}
      <div className="pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-3xl px-4">
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
      <footer className="bg-black bg-opacity-70 py-10 px-4 mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold text-indigo-400 mb-2">
              TextBridge
            </h4>
            <p className="text-gray-400 text-sm">
              Secure and seamless text sharing across devices. No accounts. Just
              copy and paste.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
            <ul className="text-sm space-y-1 text-gray-400">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/share">Share</Link>
              </li>
              <li>
                <Link to="/receive">Receive</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Connect</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white hover:text-indigo-400 text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white hover:text-indigo-400 text-xl" />
              </a>
              <a href="mailto:contact@textbridge.app">
                <FaEnvelope className="text-white hover:text-indigo-400 text-xl" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-6">
          © 2025 TextBridge. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
