// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-gray-900 text-white"
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
      <div className="z-10 mx-auto w-full max-w-4xl px-4 pt-32 pb-20 text-center">
        <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
          Welcome to <span className="text-indigo-400">TextBridge</span>
        </h1>
        <p className="mb-10 text-xl text-gray-300 md:text-2xl">
          Seamlessly share text between your devices using simple, secure codes.
          No logins. No sync. Just copy and retrieve.
        </p>
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          <Link to="/share">
            <button className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700">
              Generate Code
            </button>
          </Link>
          <Link to="/receive">
            <button className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-green-700">
              Enter Code to Receive
            </button>
          </Link>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="mx-auto max-w-6xl px-8 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          What TextBridge Does
        </h2>
        <p className="mb-10 text-gray-300">
          TextBridge allows you to quickly and securely share plain text or code
          snippets across devices using short codes. No setup, no account, just
          instant transfer.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-indigo-300">
              Simple & Secure
            </h3>
            <p className="text-gray-400">
              No need to sign in. Just paste your text and share the short code
              to access it on another device.
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-green-300">
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
      <section className="mx-auto max-w-6xl px-8 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-pink-300">
              Paste Text
            </h3>
            <p className="text-gray-400">
              Paste your message or code snippet into the Share page.
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-yellow-300">
              Generate Short Code
            </h3>
            <p className="text-gray-400">
              Click 'Generate' and you'll get a secure code to share.
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-blue-300">
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
