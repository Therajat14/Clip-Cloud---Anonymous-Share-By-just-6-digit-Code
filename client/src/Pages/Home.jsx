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
          Seamlessly share{" "}
          <span className="font-semibold text-white">text</span> and{" "}
          <span className="font-semibold text-white">files</span> across devices
          using simple, secure codes. No logins. No sync. Just copy, drop, and
          retrieve.
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
          What ClipCloud Does
        </h2>
        <p className="mb-10 text-gray-300">
          ClipCloud lets you instantly share <strong>text messages</strong>,{" "}
          <strong>code snippets</strong>, and even{" "}
          <strong>files up to 5MB</strong> using short codes. It's the easiest
          way to transfer content between your phone, laptop, or any device —
          securely and without logging in.
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
              Paste or Upload
            </h3>
            <p className="text-gray-400">
              Enter your message or attach a file on the Share page.
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-yellow-300">
              Generate Code
            </h3>
            <p className="text-gray-400">
              ClipCloud will give you a unique short code to access your
              content.
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-blue-300">
              Retrieve Anywhere
            </h3>
            <p className="text-gray-400">
              Use the code on any device to retrieve the text or download the
              file instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
