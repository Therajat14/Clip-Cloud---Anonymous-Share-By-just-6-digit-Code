import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('/bg-texture.png'), radial-gradient(circle at top left, #1f2937, #111827)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="text-7xl font-bold text-indigo-500 mb-6">404</h1>
      <p className="text-xl text-gray-300 mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="flex flex-wrap gap-4 mt-6">
        <Link
          to="/"
          className="border border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors duration-200 px-5 py-2 rounded-md text-sm md:text-base"
        >
          Home
        </Link>
        <Link
          to="/share"
          className="border border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition-colors duration-200 px-5 py-2 rounded-md text-sm md:text-base"
        >
          Share Text
        </Link>
        <Link
          to="/receive"
          className="border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white transition-colors duration-200 px-5 py-2 rounded-md text-sm md:text-base"
        >
          Retrieve Text
        </Link>
      </div>
    </div>
  );
}
