import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MyApp
        </Link>
        <div className="flex gap-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'underline text-yellow-300' : 'hover:text-yellow-200'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'underline text-yellow-300' : 'hover:text-yellow-200'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'underline text-yellow-300' : 'hover:text-yellow-200'
            }
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
