import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? "underline text-yellow-500" : "hover:text-gray-400";

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="w-full px-6 py-8 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-600">Next Stop: Haram</h1>
        <ul className="flex gap-6 text-white font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/makkah" className={navLinkClass}>Makkah</NavLink>
          <NavLink to="/madina" className={navLinkClass}>Madina</NavLink>
          {/* <NavLink to="#" className="hover:text-gray-400">Guide</NavLink> */}
          <NavLink to="/" className="hover:text-gray-400">About</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
