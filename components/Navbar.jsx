"use client";
import React, { useState } from "react";
import { Clock1, Menu, X } from "lucide-react"; // Lucide icons
import Link from "next/link";
import { motion } from "framer-motion"; // Framer Motion for animations

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md text-lg font-semibold w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold pt-2 flex gap-2">
          <Clock1 /> <span className="text-amber-600">WorldTime</span> Convert
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden block" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-amber-500">
            Home
          </Link>
          <Link href="/countries" className="hover:text-amber-500">
            Countries
          </Link>
          <Link href="/timezone" className="hover:text-amber-500">
           World Time Zone
          </Link>
          <Link href="/convert" className="hover:text-amber-500">
            Time Zone Converter
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-slate-100"
        >
          <ul className="flex flex-col items-start space-y-2 px-4 py-3">
            <li>
              <Link
                href="/"
                className="block hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/countries"
                className="block hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                Countries
              </Link>
            </li>
            <li>
              <Link
                href="/timezone"
                className="block hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                World Time Zone
              </Link>
            </li>
            <li>
              <Link
                href="/convert"
                className="block hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                TIme Zone Converter
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
