import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-2xl">POWER GYM</span>
            </NavLink>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200
                  ${isActive 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-300 hover:text-primary hover:border-b-2 hover:border-primary'
                  }`
                }
              >
                Home
              </NavLink>
              
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200
                  ${isActive 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-300 hover:text-primary hover:border-b-2 hover:border-primary'
                  }`
                }
              >
                About
              </NavLink>
              
              <NavLink
                to="/classes"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200
                  ${isActive 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-300 hover:text-primary hover:border-b-2 hover:border-primary'
                  }`
                }
              >
                Classes
              </NavLink>
              
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200
                  ${isActive 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-300 hover:text-primary hover:border-b-2 hover:border-primary'
                  }`
                }
              >
                Pricing
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;