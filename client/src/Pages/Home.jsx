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
          Welcome to <span className="text-indigo-400">ClipCloud</span>
        </h1>
        <p className="mb-10 text-xl text-gray-300 md:text-2xl">
          Quickly send <span className="font-semibold text-white">text</span> or{" "}
          <span className="font-semibold text-white">files</span> between
          devices using a secure 6-character code. Each code is valid for one
          use and expires after 10 minutes.
        </p>
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          <Link to="/share">
            <button className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700">
              Share Text or File
            </button>
          </Link>
          <Link to="/receive">
            <button className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-green-700">
              Enter Code to Receive
            </button>
          </Link>
        </div>
      </div>

      {/* What Is ClipCloud Section */}
      <section className="mx-auto max-w-6xl px-8 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          What Is ClipCloud?
        </h2>
        <p className="mb-10 text-lg text-gray-300">
          ClipCloud lets you send a text/code snippet or small file to yourself
          (or someone else) using a 6-digit access code. It’s perfect for moving
          content between your laptop, phone, or tablet — fast, simple, and
          private.
          <br />
          <br />
          All codes are one-time use and valid for 10 minutes to keep your
          content secure and temporary.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-indigo-300">
              Text & File Transfer
            </h3>
            <p className="text-gray-400">
              Share plain text, code, or small files in seconds. Just upload and
              get a code to access it anywhere.
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-green-300">
              No Login Required
            </h3>
            <p className="text-gray-400">
              Completely anonymous. No accounts, no passwords. Just a short code
              to send and receive your data.
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
              Step 1: Paste or Upload
            </h3>
            <p className="text-gray-400">
              Go to the Share page. Enter your message or attach a file up to
              5MB.
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-yellow-300">
              Step 2: Get a One-Time Code
            </h3>
            <p className="text-gray-400">
              We’ll generate a 6-character code that works once and expires
              after 10 minutes.
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-blue-300">
              Step 3: Access Before It Expires
            </h3>
            <p className="text-gray-400">
              Enter the code on any device within 10 minutes to retrieve your
              text or download the file.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
