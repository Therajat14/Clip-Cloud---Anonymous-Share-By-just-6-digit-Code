import { Link } from "react-router-dom";
import { Home, Upload, Download } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-6 text-white"
      style={{
        backgroundImage:
          "url('/bg-texture.png'), radial-gradient(circle at top left, #1f2937, #111827)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="mb-3 text-6xl font-bold text-indigo-400">404</h1>
      <p className="mb-2 text-lg text-gray-300">Page not found</p>
      <p className="mb-6 max-w-md text-center text-sm text-gray-400">
        The page you're looking for doesn't exist or has been moved. Try one of
        the options below.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>

        <Link
          to="/share"
          className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-700"
        >
          <Upload className="h-4 w-4" />
          Share
        </Link>

        <Link
          to="/receive"
          className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-2 text-sm font-medium text-black transition hover:bg-yellow-500"
        >
          <Download className="h-4 w-4" />
          Retrieve
        </Link>
      </div>
    </div>
  );
}
