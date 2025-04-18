// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white px-4 overflow-x-hidden relative"
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

      {/* Hero Section */}
      <div className="pt-32 pb-20 text-center w-full max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-indigo-400">TextBridge</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300">
          Seamlessly share text between your devices using simple, secure codes.
          No logins. No sync. Just copy and retrieve.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/share">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-lg">
              Generate Code
            </button>
          </Link>
          <Link to="/receive">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-lg">
              Enter Code to Receive
            </button>
          </Link>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What TextBridge Does
        </h2>
        <p className="text-gray-300 mb-10">
          TextBridge allows you to quickly and securely share plain text or code
          snippets across devices using short codes. No setup, no account, just
          instant transfer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">
              Simple & Secure
            </h3>
            <p className="text-gray-400">
              No need to sign in. Just paste your text and share the short code
              to access it on another device.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-green-300">
              Instant Text Transfer
            </h3>
            <p className="text-gray-400">
              Designed to be fast, lightweight, and user-friendly for
              transferring messages and snippets across devices.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-pink-300 mb-2">
              Paste Text
            </h3>
            <p className="text-gray-400">
              Paste your message or code snippet into the Share page.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Generate Short Code
            </h3>
            <p className="text-gray-400">
              Click 'Generate' and you'll get a secure code to share.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              Retrieve on Any Device
            </h3>
            <p className="text-gray-400">
              Use the code on another device to instantly retrieve your text.
            </p>
          </div>
        </div>
      </section>

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

      {/* Decorative SVG */}
    </div>
  );
}
