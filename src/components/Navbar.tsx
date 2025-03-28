import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" shadow-lg fixed top-0 left-0 w-full z-[1000] mb-7"> {/* Increased z-index */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-yellow-400 font-bold text-2xl">
              POWER GYM
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Classes", "Pricing"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Fix Home route
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-yellow-400 text-3xl focus:outline-none z-[1100]" // Increased z-index
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown Below Button) */}
      <div
        className={`md:hidden fixed top-16 left-3/4 w-1/4 rounded-xl bg-yellow-400 shadow-md z-[1000] transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          {["Home", "About", "Classes", "Pricing"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Fix Home route
              onClick={closeMenu} // Close menu on click
              className="text-xl font-semibold text-black hover:text-gray-200 transition duration-200"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
