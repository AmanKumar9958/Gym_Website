import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  // GSAP Animations
  useGSAP(() => {
    gsap.from(".logo", {
      duration: 1,
      opacity: 0,
      y: -150,
      ease: "power2.out",
    });
  });
  useGSAP(() => {
    gsap.from(".links", {
      duration: 1,
      opacity: 0,
      y: -150,
      stagger: 0.2,
      ease: "power2.out",
    });
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="shadow-lg fixed top-0 left-0 w-full z-[1000] bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="text-yellow-400 font-bold text-2xl logo">
            RepMax
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Classes", "Pricing"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 links ${
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
            className="md:hidden text-yellow-400 text-3xl focus:outline-none z-[1100]"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Dropdown - Fixed Layout */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full z-[999] bg-yellow-400 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          {["Home", "About", "Classes", "Pricing"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={closeMenu}
              className="text-xl font-semibold text-black hover:text-white transition duration-200"
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
