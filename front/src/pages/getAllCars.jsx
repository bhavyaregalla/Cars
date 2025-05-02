import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader/loader";
import CarCard from "../components/carCard/carCard";

const GetAllCars = () => {
  const [search, setSearch] = useState(""); // Search state
  const [cars, setCars] = useState(); // Cars data state

  // Authorization headers
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // Fetch all cars from the API
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1000/api/v1/car/get-all-cars",
          { headers }
        );
        setCars(res.data.data); // Set cars data
      } catch (error) {
        console.error("Error fetching cars data", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-8 py-12">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-10 text-center">
        Explore Our Cars
      </h1>

      {/* Loader if cars data is not yet fetched */}
      {!cars && (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <form className="relative max-w-lg w-full group">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-400 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div
              className="absolute inset-y-0 left-0 flex items-center pl-3 transition-transform duration-500 group-focus-within:translate-x-1"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-100 border border-gray-600 rounded-lg bg-gray-800 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition-all group-hover:scale-105 focus:outline-none focus:shadow-blue-500/50 focus:ring-2"
              placeholder="Search by name, fuel, or import type..."
              required
            />
          </div>
        </form>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars &&
          cars
            .filter((item) => {
              // Filter cars based on search input
              return (
                search === "" ||
                item.name.toLowerCase().includes(search) ||
                item.fuel.toLowerCase().includes(search) ||
                item.importType.toLowerCase().includes(search)
              );
            })
            .map((item) => (
              <div key={item.id}>
                <CarCard data={item} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default GetAllCars;
