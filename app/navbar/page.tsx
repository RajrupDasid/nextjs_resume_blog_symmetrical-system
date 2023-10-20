"use client";
import React, { useEffect, useState } from "react";
import "@/public/assets/css/master.scss";
import { HiMenu } from "react-icons/hi";
import { SlClose } from "react-icons/sl";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <nav>
          <div className="left">Webstackpros.net</div>
          <div className="right">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <a
              href="#"
              className={`menu ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}>
              <HiMenu />
            </a>
          </div>
        </nav>
      </header>

      <ul className={`nav-mobile ${isMenuOpen ? "active" : ""}`}>
        <SlClose />
        <li>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
