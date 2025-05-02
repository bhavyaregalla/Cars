import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/loader";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const viewCarDetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { id } = useParams();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `https://cars-fp5h.onrender.com/api/v1/car/get-car-by-id/${id}`
      );
      setData(res.data.data);
    };
    fetch();
  }, []);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    carid: id,
  };

  const deleteCar = async () => {
    const res = await axios.delete(`https://cars-fp5h.onrender.com/api/v1/car/delete-car/`, {
      headers,
    });
    alert(res.data.message);
    navigate("/all-cars");
  };

  return (
    <>
      {data && (
        <div className="px-4 md:px-12 py-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white min-h-screen flex flex-col lg:flex-row gap-8">
          {/* Left Section - Image and Actions */}
          <div className="relative w-full lg:w-3/6">
            <div className="bg-gray-800 flex flex-col lg:flex-row p-6 justify-around rounded-lg shadow-md group relative">
              {/* Car Image */}
              <img
                src={data.carImage}
                alt={data.name}
                className="h-auto w-full rounded-lg transform transition duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500"
              />
              {/* Admin Actions */}
              {isLoggedIn === true && role === "admin" && (
                <div className="absolute top-4 right-4 flex flex-col gap-4 z-10">
                  <Link
                    to={`/update-car/${id}`}
                    className="bg-indigo-600 text-white rounded-full text-3xl p-4 shadow-md hover:shadow-lg hover:shadow-indigo-400 transition-transform duration-300 hover:scale-110"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="bg-red-600 text-white rounded-full text-3xl p-4 shadow-md hover:shadow-lg hover:shadow-red-400 transition-transform duration-300 hover:scale-110"
                    onClick={deleteCar}
                  >
                    <MdDelete />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Details */}
          <div className="p-4 w-full lg:w-3/6 flex flex-col gap-4">
            <h1 className="text-4xl text-white font-bold tracking-wide animate-fade-in">
              {data.name}
            </h1>

            {/* Details as Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Car Make", value: data.carMake },
                { label: "Model", value: data.model },
                { label: "Mileage", value: `${data.mileage} km` },
                { label: "Import Type", value: data.importType },
                { label: "Transmission", value: data.transmission },
                { label: "Fuel", value: data.fuel },
                { label: "Engine", value: data.engine },
                { label: "Year", value: data.year },
                { label: "Price", value: `$${data.price}` },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-700 rounded-lg bg-gray-800 shadow-md hover:shadow-lg hover:shadow-indigo-500 transition-all duration-300"
                >
                  <p className="text-xl font-semibold text-gray-100">
                    {item.label}:
                  </p>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Loader */}
      {!data && (
        <div className="h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default viewCarDetails;
