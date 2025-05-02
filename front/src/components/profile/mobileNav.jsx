import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { authActions } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
const MobileNav = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role);
  return (
    <>
      {role === "admin" && (
        <div>
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
          <div className="w-full flex lg:hidden flex-col gap-4 mt-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-4 rounded-lg shadow-lg text-white">
            {/* All Cars Link */}
            <Link
              to="/profile"
              className="text-lg font-semibold text-center bg-gray-700 py-2 rounded-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
            >
              All Cars
            </Link>

            {/* Settings Link */}
            <Link
              to="/profile/settings"
              className="text-lg font-semibold text-center bg-gray-700 py-2 rounded-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
            >
              Settings
            </Link>

            {/* Add Car Link */}
            <Link
              to="/profile/add-car"
              className="text-lg font-semibold text-center bg-gray-700 py-2 rounded-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
            >
              Add Car
            </Link>
          </div>
        </div>
        
      )}
    </>
  );
};

export default MobileNav;
