import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/profile/sidebar";
import MobileNav from "../components/profile/mobileNav";
import Loader from "../components/loader/loader";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "https://cars-fp5h.onrender.com/api/v1/user/get-user-info",
          { headers }
        );
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 min-h-screen px-4 py-8 text-white">
      {/* Show Loader while profile is loading */}
      {!profile && (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      )}

      {/* Main Profile Layout */}
      {profile && (
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* Sidebar for Large Devices */}
          <div className="hidden lg:block lg:w-1/4 bg-gray-900 rounded-lg p-6 shadow-lg h-full">
            <Sidebar data={profile} />
          </div>

          {/* Mobile Navigation for Phones/Tablets */}
          <div className="block lg:hidden bg-gray-900 rounded-lg p-6 shadow-lg">
            <MobileNav data={profile} />
          </div>

          {/* Content Area */}
          <div className="flex-grow bg-gray-900 rounded-lg p-6 shadow-lg">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
