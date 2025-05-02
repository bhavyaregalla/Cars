import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../loader/loader";

const Settings = () => {
  const navigate = useNavigate();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const [uName, setuName] = useState({ username: "" });
  const [uPassword, setuPassword] = useState({ password: "" });
  const [uConfirmPassword, setuConfirmPassword] = useState({
    confirmpassword: "",
  });
  const [profile, setProfile] = useState();

  const changeuName = (e) => {
    const { name, value } = e.target;
    setuName({ ...uName, [name]: value });
  };

  const changeuPassword = (e) => {
    const { name, value } = e.target;
    setuPassword({ ...uPassword, [name]: value });
  };

  const changeuConfirmPassword = (e) => {
    const { name, value } = e.target;
    setuConfirmPassword({ ...uConfirmPassword, [name]: value });
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "http://localhost:1000/api/v1/user/get-user-info",
        { headers }
      );
      setProfile(res.data);
      setuName({ username: res.data.username });
    };
    fetch();
  }, []);

  const handleName = async () => {
    const res = await axios.put(
      "http://localhost:1000/api/v1/user/update-username",
      uName,
      { headers }
    );
    setProfile((prevProfile) => ({
      ...prevProfile,
      username: uName.username,
    }));
    alert(res.data.message);
    navigate("/");
  };

  const handleSubmit = async () => {
    if (uPassword.password !== uConfirmPassword.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }
    const res = await axios.put(
      "http://localhost:1000/api/v1/user/update-password",
      uPassword,
      { headers }
    );
    alert(res.data.message);
  };

  return (
    <>
      {!profile && (
        <div className="w-full h-[100%] flex items-center justify-center">
          <Loader />
        </div>
      )}
      {profile && (
        <div className="h-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in-down">
            Settings
          </h1>

          {/* Profile Info */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8 animate-fade-in">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2">
              <h2 className="text-lg font-semibold mb-2">Username</h2>
              <p className="text-gray-300">{profile.username}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2">
              <h2 className="text-lg font-semibold mb-2">Email</h2>
              <p className="text-gray-300">{profile.email}</p>
            </div>
          </div>

          {/* Update Username */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-8 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4">Update Username</h2>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              name="username"
              placeholder="Enter new username"
              value={uName.username}
              onChange={changeuName}
              minLength={3}
            />
            <button
              className="mt-4 w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300"
              onClick={handleName}
            >
              Update Username
            </button>
          </div>

          {/* Update Password */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4">Update Password</h2>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-3 rounded bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                name="password"
                placeholder="New Password"
                value={uPassword.password}
                onChange={changeuPassword}
                minLength={5}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full p-3 rounded bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                name="confirmpassword"
                placeholder="Confirm New Password"
                value={uConfirmPassword.confirmpassword}
                onChange={changeuConfirmPassword}
                minLength={5}
              />
            </div>
            <button
              className="mt-4 w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300"
              onClick={handleSubmit}
            >
              Update Password
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
