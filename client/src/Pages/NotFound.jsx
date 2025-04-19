import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 text-white"
      style={{
        backgroundImage:
          "url('/bg-texture.png'), radial-gradient(circle at top left, #1f2937, #111827)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="mb-6 text-7xl font-bold text-indigo-500">404</h1>
      <p className="mb-4 text-xl text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          to="/"
          className="rounded-md border border-indigo-400 px-5 py-2 text-sm text-indigo-400 transition-colors duration-200 hover:bg-indigo-500 hover:text-white md:text-base"
        >
          Home
        </Link>
        <Link
          to="/share"
          className="rounded-md border border-green-400 px-5 py-2 text-sm text-green-400 transition-colors duration-200 hover:bg-green-500 hover:text-white md:text-base"
        >
          Share Text
        </Link>
        <Link
          to="/receive"
          className="rounded-md border border-yellow-400 px-5 py-2 text-sm text-yellow-400 transition-colors duration-200 hover:bg-yellow-500 hover:text-white md:text-base"
        >
          Retrieve Text
        </Link>
      </div>
    </div>
  );
}
