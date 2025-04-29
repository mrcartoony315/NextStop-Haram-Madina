import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional: you can use icons of your choice

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-yellow-500 underline" : "hover:text-yellow-400";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50 py-2">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-600">
          🕋 Next Stop: Haramain
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/makkah" className={navLinkClass}>Makkah</NavLink>
          <NavLink to="/madina" className={navLinkClass}>Madina</NavLink>
          <NavLink to="/hajj" className={navLinkClass}>Hajj</NavLink>
          <NavLink to="/umrah" className={navLinkClass}>Umrah</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/makkah" className={navLinkClass} onClick={toggleMenu}>Makkah</NavLink>
            <NavLink to="/madina" className={navLinkClass} onClick={toggleMenu}>Madina</NavLink>
            <NavLink to="/hajj" className={navLinkClass} onClick={toggleMenu}>Hajj</NavLink>
            <NavLink to="/umrah" className={navLinkClass} onClick={toggleMenu}>Umrah</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>About</NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
