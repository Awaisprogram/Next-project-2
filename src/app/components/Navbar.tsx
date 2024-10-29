'use client';

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/" className="text-4xl font-bold">
        imagine.
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href={'./'}className="hover:text-[#4285f4]">
            Home
          </Link>
        </li>
        <li>
        <Link href={"/about"} className="hover:text-[#4285f4]">
            About
          </Link>
        </li>
        <li>
          <Link href={"/features"} className="hover:text-[#4285f4]">
            Features
          </Link>
        </li>
        <li>
          <Link href={"/reveiws"} className="hover:text-[#4285f4]">
            Testimonials
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="hover:text-[#4285f4]">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <button className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`z-10 fixed  top-0 right-0 h-full w-72 bg-gray-800 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-5 right-5 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
        <nav className="flex flex-col items-start p-10 space-y-10">
          <Link href={"/"} onClick={toggleMenu} className="text-xl mt-10 hover:text-[#4285f4] py-2">
            Home
          </Link>
          <Link href={"/about"} onClick={toggleMenu} className="text-xl hover:text-[#4285f4] py-2">
            About
          </Link>
          <Link href={"/features"} onClick={toggleMenu} className="text-xl hover:text-[#4285f4] py-2">
            Features
          </Link>
          <Link href={"/reveiws"} onClick={toggleMenu} className="text-xl hover:text-[#4285f4] py-2">
            Testimonials
          </Link>
          <Link href={"/contact"} onClick={toggleMenu} className="text-xl hover:text-[#4285f4] py-2">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
