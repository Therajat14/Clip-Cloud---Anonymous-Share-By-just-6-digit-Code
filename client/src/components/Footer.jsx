import { Link } from "react-router-dom";
import { Github, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-black/80 px-4 py-10 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">
        {/* Left: Brand + tagline */}
        <div className="max-w-sm">
          <h4 className="text-2xl font-bold text-indigo-400">ClipCloud</h4>
          <p className="mt-2 text-sm text-gray-400">
            A secure bridge for sharing notes, code, and files across your
            devices.
          </p>
          <p className="mt-3 text-xs text-gray-600">Made with ❤️ by Rajat</p>
        </div>

        {/* Right: Socials + Privacy */}
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex gap-4">
            <a
              href="https://github.com/Therajat14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-indigo-400"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/RajatCode14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-indigo-400"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:rajat.code14@gmail.com"
              className="text-gray-400 transition hover:text-indigo-400"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="space-x-3 text-xs text-gray-500">
            <Link to="/privacy&terms" className="hover:text-indigo-300">
              Privacy
            </Link>
            <Link to="/privacy&terms" className="hover:text-indigo-300">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} ClipCloud. All rights reserved.
      </div>
    </footer>
  );
};
