import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [MbNav, setMbNav] = useState("hidden");

  const AdminLogin = () => {
    if (isLoggedIn === true) {
      navigate("/profile");
    } else {
      navigate("/logIn");
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Main Footer Section */}
      <div className="flex flex-col md:flex-row justify-around items-center py-8">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0 flex flex-col items-center">
          <img src="./Logo.png" alt="Highline Cars" className="mb-4" />
          {/* Admin Button Below Logo */}
          <button
            className="px-4 py-1 border border-blue-500 font-semibold text-white rounded hover:bg-blue-500 hover:text-gray-900 transition-all duration-300"
            onClick={AdminLogin}
          >
            Admin
          </button>
        </div>

        {/* Sitemap Section */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg mb-4">Sitemap</h2>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Our Cars", path: "/all-cars" },
              { name: "Services", path: "/services" },
              { name: "Warranty", path: "/warranty" },
              { name: "About", path: "/about" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="font-bold text-lg mb-4">Connect With Us</h2>
          <div className="flex justify-center space-x-4">
            {/* LinkedIn */}
            <div className="group relative flex items-center">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-600 text-white rounded-full h-12 w-12 overflow-hidden transition-all duration-500 ease-in-out group-hover:w-40"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full group-hover:bg-blue-500 transition-all duration-500">
                  <i className="fab fa-linkedin text-2xl"></i>
                </div>
                <span className="ml-4 hidden group-hover:inline-block text-sm transition-opacity duration-300">
                  LinkedIn
                </span>
              </a>
            </div>

            {/* Facebook */}
            <div className="group relative flex items-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-600 text-white rounded-full h-12 w-12 overflow-hidden transition-all duration-500 ease-in-out group-hover:w-40"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full group-hover:bg-blue-600 transition-all duration-500">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </div>
                <span className="ml-4 hidden group-hover:inline-block text-sm transition-opacity duration-300">
                  Facebook
                </span>
              </a>
            </div>

            {/* Instagram */}
            <div className="group relative flex items-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-600 text-white rounded-full h-12 w-12 overflow-hidden transition-all duration-500 ease-in-out group-hover:w-40"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full group-hover:bg-pink-500 transition-all duration-500">
                  <i className="fab fa-instagram text-2xl"></i>
                </div>
                <span className="ml-4 hidden group-hover:inline-block text-sm transition-opacity duration-300">
                  Instagram
                </span>
              </a>
            </div>

            {/* Twitter */}
            <div className="group relative flex items-center">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-600 text-white rounded-full h-12 w-12 overflow-hidden transition-all duration-500 ease-in-out group-hover:w-40"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full group-hover:bg-blue-600 transition-all duration-500">
                  <i className="fab fa-twitter text-2xl"></i>
                </div>
                <span className="ml-4 hidden group-hover:inline-block text-sm transition-opacity duration-300">
                  Twitter
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm border-t border-gray-700 pt-4 pb-6 bg-gray-800">
        <p>
          ©2025 Highline Cars Ltd. All Rights Reserved 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
