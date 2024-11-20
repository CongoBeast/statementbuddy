"use client"

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="lg:hidden bg-primary text-light p-4 flex items-center justify-between">
      <h1 className="text-lg font-bold">RAG LLM</h1>

      {/* Hamburger Icon */}
      <div className="lg:hidden" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } absolute top-16 left-0 w-full bg-primary p-4 flex-col items-center space-y-4 lg:hidden`}
      >
        <li>
          <a href="/" className="text-light text-lg">Home</a>
        </li>
        <li>
          <a href="/about" className="text-light text-lg">About</a>
        </li>
        <li>
          <a href="/reports" className="text-light text-lg">Reports</a>
        </li>
        <li>
          <a href="/analytics" className="text-light text-lg">Analytics</a>
        </li>
        <li>
          <a href="/settings" className="text-light text-lg">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
