import { NavLink } from "react-router-dom";
import { FaCar } from "react-icons/fa"; // Importing a car icon from Font Awesome

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Flex container for the car icon and "Home" link */}
            <div className="flex items-center">
              {/* Car icon */}
              <FaCar className="text-gray-300 h-6 w-6 mr-2" />
              {/* "Home" link */}
              <NavLink
                to="/"
                exact
                activeClassName="text-blue-300"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
            </div>
            <div className="hidden sm:flex sm:space-x-8 ml-6">
              <NavLink
                to="/allVehicle"
                activeClassName="text-blue-300"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                List Vehicle
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="text-blue-300"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </NavLink>
              <NavLink
                to="/subscribe"
                activeClassName="text-blue-300"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Subscribe
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="text-blue-300"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <NavLink
              to="/login"
              activeClassName="text-blue-300"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </NavLink>
            <div className="ml-2">
              <svg
                className="w-6 h-6 text-gray-300 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zM19 13c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-4 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-4-2a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
