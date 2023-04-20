import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-200 p-2 mx-auto container">
      <div>
        {/* large device */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl tracking-widest font-semibold">
              Gadget-Fair
            </h1>
          </div>
          <div className="flex gap-2 font-semibold ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gray-500"
              }
            >
              Home
            </NavLink>
                      <NavLink
                          to="/store"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gray-500"
              }
            >
              Store
            </NavLink>
                      <NavLink
                          to="/cart"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gray-500"
              }
            >
              Cart
            </NavLink>
                      <NavLink
                          to="/login"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gray-500"
              }
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
