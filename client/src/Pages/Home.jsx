// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white  overflow-x-hidden relative"
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

      {/* Hero Section */}
      <div className="pt-32 pb-20 text-center w-full max-w-4xl mx-auto z-10 px-4">
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
      <section className="max-w-6xl mx-auto px-8 py-20 text-center ">
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
      <section className="max-w-6xl mx-auto px-8 py-20 text-center">
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
      <Footer />

      {/* Decorative SVG */}
    </div>
  );
}
