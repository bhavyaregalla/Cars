import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../carCard/carCard";
import Loader from "../loader/loader";
import { Link } from "react-router-dom";

const RecentCars = () => {
  const [data, setData] = useState(); // Holds all car data
  const [filteredData, setFilteredData] = useState(); // Holds filtered car data
  const [filters, setFilters] = useState({
    fuel: "",
    importType: "",
    transmission: "",
  }); // State for filter values
  const [appliedFilters, setAppliedFilters] = useState(false); // Tracks whether filters are applied

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("https://cars-fp5h.onrender.com/api/v1/car/get-recent-cars");
      setData(res.data.data);
      setFilteredData(res.data.data); // Initialize filtered data with all cars
    };
    fetch();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value }); // Update filter values
  };

  const applyFilters = () => {
    const filtered = data.filter((car) => {
      const matchesFuel =
        !filters.fuel || car.fuel.toLowerCase() === filters.fuel.toLowerCase();
      const matchesImportType =
        !filters.importType ||
        car.importType.toLowerCase() === filters.importType.toLowerCase();
      const matchesTransmission =
        !filters.transmission ||
        car.transmission.toLowerCase() === filters.transmission.toLowerCase();
      return matchesFuel && matchesImportType && matchesTransmission;
    });
    setFilteredData(filtered);
    setAppliedFilters(true); // Indicate filters have been applied
  };

  return (
    <div className="py-8 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Title Section */}
      <h4 className="text-4xl text-white font-semibold text-center animate-fade-in mb-8">
        🆕 Recently Added Cars
      </h4>

      {/* Loader */}
      {!data && (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* Car Cards Section */}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up">
        {filteredData &&
          filteredData.map((items, i) => (
            <div key={i}>
              <CarCard data={items} />
            </div>
          ))}
        {appliedFilters && filteredData.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            No cars match the selected filters. Please adjust your filters.
          </p>
        )}
      </div>

      {/* Dive In Button */}
      <div className="mt-8 flex items-center justify-center animate-bounce">
        <Link
          to="/all-cars"
          className="text-white text-xl lg:text-2xl font-semibold border border-indigo-500 px-10 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-indigo-500"
        >
          Dive In
        </Link>
      </div>

      {/* Search Section */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg my-12 py-8 animate-slide-in">
        <h1 className="mb-6 text-3xl text-white font-bold">Search Your Range</h1>

        {/* Search Filters */}
        <div className="py-5 flex flex-wrap justify-center gap-4">
          {/* Fuel Type */}
          <select
            id="fuel"
            name="fuel"
            className="bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 hover:bg-gray-800 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            value={filters.fuel}
            onChange={handleFilterChange}
          >
            <option value="">Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* Import Type */}
          <select
            id="importType"
            name="importType"
            className="bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 hover:bg-gray-800 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            value={filters.importType}
            onChange={handleFilterChange}
          >
            <option value="">Import Type</option>
            <option value="UK Import">UK Import</option>
            <option value="Japan Import">Japan Import</option>
            <option value="Local">Local</option>
          </select>

          {/* Transmission */}
          <select
            id="transmission"
            name="transmission"
            className="bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 hover:bg-gray-800 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            value={filters.transmission}
            onChange={handleFilterChange}
          >
            <option value="">Transmission</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        {/* Find Car Button */}
        <button
          type="button"
          onClick={applyFilters}
          className="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white font-bold px-12 py-3 rounded-full hover:opacity-90 shadow-lg hover:shadow-indigo-400 transition-all duration-300"
        >
          FIND CAR
        </button>
      </div>
    </div>
  );
};

export default RecentCars;
