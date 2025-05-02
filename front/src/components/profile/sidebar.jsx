import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { authActions } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 flex flex-col items-center justify-between h-auto xl:h-full text-white shadow-xl">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center">
        {/* Profile Image */}
        <img
          src="./dp.jpg"
          className="rounded-full my-4 shadow-lg hover:scale-110 transition-transform duration-300"
          alt="Admin"
          style={{ height: "150px", width: "150px" }}
        />

        {/* User Details */}
        <p className="mt-3 text-2xl font-bold tracking-wide text-center">
          {data.username}
        </p>
        <p className="mt-1 text-md text-gray-400 text-center">{data.email}</p>

        {/* Divider */}
        <div className="w-full mt-4 h-[1px] bg-gray-700 hidden lg:block"></div>
      </div>

      {/* Admin Navigation Links */}
      {role === "admin" && (
        <div className="w-full flex flex-col items-center justify-center hidden lg:flex mt-4">
          <Link
            to="/profile"
            className="w-full py-3 text-center text-lg font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-gray-300 rounded-lg hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 mt-3"
          >
            All Cars
          </Link>
          <Link
            to="/profile/settings"
            className="w-full py-3 text-center text-lg font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-gray-300 rounded-lg hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 mt-3"
          >
            Settings
          </Link>
          <Link
            to="/profile/add-car"
            className="w-full py-3 text-center text-lg font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-gray-300 rounded-lg hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 mt-3"
          >
            Add Car
          </Link>
        </div>
      )}

      {/* Logout Button */}
      <button
        className="w-full py-3 mt-6 text-center font-bold flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
        onClick={() => {
          dispatch(authActions.logout());
          dispatch(authActions.changeRole("user"));
          localStorage.clear("id");
          localStorage.clear("token");
          localStorage.clear("role");
          navigate("/");
        }}
      >
        Log Out <LuLogOut className="ml-2 text-xl" />
      </button>
    </div>
  );
};

export default Sidebar;
