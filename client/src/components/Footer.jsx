import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-opacity-70 w-full bg-black px-4 py-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row md:items-start md:gap-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h4 className="mb-1 text-xl font-bold text-indigo-400">TextBridge</h4>
          <p className="max-w-xs text-sm text-gray-500">
            Secure, seamless text sharing across devices. Just copy and paste.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h5 className="mb-2 text-sm font-semibold text-gray-300">
            Quick Links
          </h5>
          <ul className="space-y-1 text-xs text-gray-400">
            <li>
              <Link to="/" className="hover:text-indigo-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/share" className="hover:text-indigo-300">
                Share
              </Link>
            </li>
            <li>
              <Link to="/receive" className="hover:text-indigo-300">
                Receive
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-left">
          <h5 className="mb-2 text-sm font-semibold text-gray-300">Connect</h5>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/Therajat14"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/RajatCode14"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:rajat.code14@gmail.com"
              className="hover:text-indigo-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <p className="mt-6 text-center text-xs text-gray-600">
        © 2025 TextBridge. All rights reserved.
      </p>
    </footer>
  );
};
