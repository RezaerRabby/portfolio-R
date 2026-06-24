

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-cyan-400 text-2xl font-bold">
              Rezaer Rabby
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Full Stack Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://facebook.com/"
              target="_blank"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href="https://github.com/"
              target="_blank"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://instagram.com/"
              target="_blank"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-gray-400 text-1xl">
          © 2026 Rezaer Rabby. All rights reserved.
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}