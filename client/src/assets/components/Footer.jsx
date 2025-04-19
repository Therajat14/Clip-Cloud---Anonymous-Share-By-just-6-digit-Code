import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" bg-black bg-opacity-70  text-white py-6 px-4 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-indigo-400 mb-1">TextBridge</h4>
          <p className="text-gray-500 text-sm max-w-xs">
            Secure, seamless text sharing across devices. Just copy and paste.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h5 className="text-sm font-semibold text-gray-300 mb-2">
            Quick Links
          </h5>
          <ul className="text-xs text-gray-400 space-y-1">
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
          <h5 className="text-sm font-semibold text-gray-300 mb-2">Connect</h5>
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
      <p className="text-center text-xs text-gray-600 mt-6">
        © 2025 TextBridge. All rights reserved.
      </p>
    </footer>
  );
};
