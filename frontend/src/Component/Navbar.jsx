import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/dashboard" className="hover:text-blue-300">
            CryptoDash
          </Link>
        </div>
        <div className="space-x-6">
          <Link to="/dashboard" className="hover:text-blue-300">
            Dashboard
          </Link>
          <Link to="/profile" className="hover:text-blue-300">
            Profile
          </Link>
          <Link to="/settings" className="hover:text-blue-300">
            Settings
          </Link>
          <Link to="/logout" className="hover:text-blue-300">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};
