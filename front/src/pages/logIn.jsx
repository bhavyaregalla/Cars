import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const [Values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async () => {
    try {
      if (Values.email === "" || Values.password === "") {
        alert("All fields are required");
      } else {
        const res = await axios.post(
          "https://cars-fp5h.onrender.com/api/v1/user/sign-in",
          Values
        );
        if(res.status == 400){
          alert("Invalid Credentials");
        }
        else{
          dispatch(authActions.login());
          dispatch(authActions.changeRole(res.data.role));
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.role);
          navigate("/profile");
        }

      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center px-4">
      {/* Login Card */}
      <div className="bg-gray-800 rounded-lg px-8 py-6 w-full md:w-3/6 lg:w-2/6 transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
        <p className="text-gray-100 text-4xl font-bold flex justify-center mb-6 animate-fade-in">
          Log In
        </p>
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="text-gray-400 text-lg">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full mt-2 bg-gray-700 text-gray-100 text-lg p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/50"
            placeholder="Enter your email"
            name="email"
            value={Values.email}
            onChange={change}
          />
        </div>
        {/* Password Input */}
        <div className="mt-4">
          <label htmlFor="password" className="text-gray-400 text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-2 bg-gray-700 text-gray-100 text-lg p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/50"
            placeholder="Enter your password"
            name="password"
            value={Values.password}
            onChange={change}
          />
        </div>
        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            className="w-48 bg-blue-500 text-white text-lg font-semibold py-2 rounded-lg hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all"
            onClick={submit}
          >
            Log In
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default LogIn;
