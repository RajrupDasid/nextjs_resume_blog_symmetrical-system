"use client";
import React from "react";
import "@/public/assets/css/master.scss";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

export default function NavBar() {
  return (
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
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <a href="#" className="menu">
            <HiMenu />
          </a>
        </div>
      </nav>
    </header>
  );
}
