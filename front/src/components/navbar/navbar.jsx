import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "All Vehicles", link: "/all-cars" },
    { title: "Warranty", link: "/warranty" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  const [MbNav, setMbNav] = useState("hidden");
  const AdminLogin = () => {
    if (isLoggedIn === true) {
      navigate("/profile");
    } else {
      navigate("/logIn");
    }
  };

  return (
    <div className="z-50 fixed w-full top-0" style={{height:"4.5rem"}}>
      
      <nav className="relative flex bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-4 items-center justify-between shadow-md">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center px-6 hover:scale-110 transition-transform duration-500 ease-in-out"
        >
          <img
            src="./Logo.png"
            alt="Logo"
            className="h-14 w-auto animate-pulse"
            style={{height:"4.5rem"}}
          />
        </Link>

        {/* Links for larger screens */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-lg font-semibold text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              {item.title}
            </Link>
          ))}
          {/* Admin Button */}
          {/* <button
            className="px-4 py-1 border border-blue-500 font-semibold text-white rounded hover:bg-blue-500 hover:text-gray-900 transition-all duration-300"
            onClick={AdminLogin}
          >
            Admin
          </button> */}
        </div>

        {/* Hamburger menu for smaller screens */}
        <button
          className="block lg:hidden text-white text-3xl hover:text-gray-400"
          onClick={() => setMbNav(MbNav === "hidden" ? "block" : "hidden")}
        >
          <FaGripLines />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${MbNav} block lg:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="text-4xl font-semibold text-gray-300 mb-8 hover:text-white hover:scale-105 transition-all duration-300"
            onClick={() => setMbNav("hidden")}
          >
            {item.title}
          </Link>
        ))}
        {/* Admin Button */}
{/*         <button
          className="px-8 py-2 text-4xl font-semibold border border-blue-500 rounded hover:bg-blue-500 hover:text-gray-900 transition-all duration-300"
          onClick={() => {
            setMbNav("hidden");
            AdminLogin();
          }}
        >
          Admin
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
