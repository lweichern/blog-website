"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`flex relative z-2 justify-between items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-8 px-6 shadow-md w-full transition duration-300 z-10 ${
        visible ? " translate-y-0 opacity-1" : " -translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center text-white font-bold text-3xl"
        >
          Blogs<span className="text-cyan-500 mx-1">.</span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/" className="text-gray-400 hover:text-white mx-4 text-xl">
          Home
        </Link>
        <Link
          href="/blogs"
          className="text-gray-400 hover:text-white mx-4 text-xl"
        >
          Blogs
        </Link>
        <Link
          href="/contacts"
          className="text-gray-400 hover:text-white mx-4 text-xl"
        >
          Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
