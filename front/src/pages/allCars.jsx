import React, { useEffect, useState } from "react";
import axios from "axios";
import { Range } from "react-range";
import Loader from "../components/loader/loader";
import CarCard from "../components/carCard/carCard";

const AllCars = () => {
  const [data, setData] = useState();
  const [priceRange, setPriceRange] = useState([0, 10000000]); // Price range state
  const [mileageRange, setMileageRange] = useState([0, 200000]); // Mileage range state
  const [filter, setFilter] = useState({ fuel: "", importType: "", transmission: "" }); // Dropdown filter state
  const MIN_PRICE = 0; // Minimum price
  const MAX_PRICE = 10000000; // Maximum price
  const MIN_MILEAGE = 0; // Minimum mileage
  const MAX_MILEAGE = 200000; // Maximum mileage 

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:1000/api/v1/car/get-all-cars");
      setData(res.data.data);
    };
    fetch();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <>
      {/* Header Image */}
      <div className="relative w-full h-80 md:h-96 lg:h-[102vh] overflow-hidden">
        <img
          src="./Allcars.jpg"
          alt="All Cars"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Explore All Cars</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen px-6 md:px-12 py-8 text-gray-100">
        {/* Filters Section */}
        <div className="flex flex-col items-center justify-center bg-gray-700 bg-opacity-50 rounded-lg my-4 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl font-semibold mb-6 text-gray-200">Filter Cars</h1>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {/* Fuel Type Filter */}
            <select
              id="fuel"
              name="fuel"
              className="px-4 py-2 rounded bg-gray-800 text-gray-200 border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-300"
              onChange={handleFilterChange}
              value={filter.fuel}
            >
              <option value="">Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            {/* Import Type Filter */}
            <select
              id="importType"
              name="importType"
              className="px-4 py-2 rounded bg-gray-800 text-gray-200 border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-300"
              onChange={handleFilterChange}
              value={filter.importType}
            >
              <option value="">Import Type</option>
              <option value="UK Import">UK Import</option>
              <option value="Japan Import">Japan Import</option>
              <option value="Local">Local</option>
            </select>
            {/* Transmission Filter */}
            <select
              id="transmission"
              name="transmission"
              className="px-4 py-2 rounded bg-gray-800 text-gray-200 border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-300"
              onChange={handleFilterChange}
              value={filter.transmission}
            >
              <option value="">Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            
            </select>
          </div>
          {/* Price and Mileage Sliders */}
          <div className="flex flex-col md:flex-row items-center w-full mt-6 gap-8">
            {/* Price Range Slider */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <label
                htmlFor="priceRange"
                className="text-gray-300 mb-2 font-medium"
              >
                Price Range
              </label>
              <Range
                step={500}
                min={MIN_PRICE}
                max={MAX_PRICE}
                values={priceRange}
                onChange={(values) => setPriceRange(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="w-full h-2 rounded"
                    style={{
                      background: `linear-gradient(to right, #4A5568 ${((priceRange[0] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%, #63B3ED ${((priceRange[0] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%, #63B3ED ${((priceRange[1] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%, #4A5568 ${((priceRange[1] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%)`,
                      height: "8px",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-4 h-4 bg-blue-500 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                )}
              />
              <div className="text-sm mt-2 text-gray-300">
                {priceRange[0]}$ - {priceRange[1]}$
              </div>
            </div>
            {/* Mileage Range Slider */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <label
                htmlFor="mileageRange"
                className="text-gray-300 mb-2 font-medium"
              >
                Mileage Range
              </label>
              <Range
                step={1}
                min={MIN_MILEAGE}
                max={MAX_MILEAGE}
                values={mileageRange}
                onChange={(values) => setMileageRange(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="w-full h-2 rounded"
                    style={{
                      background: `linear-gradient(to right, #4A5568 ${((mileageRange[0] - MIN_MILEAGE) / (MAX_MILEAGE - MIN_MILEAGE)) * 100}%, #48BB78 ${((mileageRange[0] - MIN_MILEAGE) / (MAX_MILEAGE - MIN_MILEAGE)) * 100}%, #48BB78 ${((mileageRange[1] - MIN_MILEAGE) / (MAX_MILEAGE - MIN_MILEAGE)) * 100}%, #4A5568 ${((mileageRange[1] - MIN_MILEAGE) / (MAX_MILEAGE - MIN_MILEAGE)) * 100}%)`,
                      height: "8px",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-4 h-4 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                )}
              />
              <div className="text-sm mt-2 text-gray-300">
                {mileageRange[0]}km - {mileageRange[1]}km
              </div>
            </div>
          </div>
        </div>

        {/* Car Grid Section */}
        {!data && (
          <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
        )}
        <div>
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data &&
              data
                .filter((items) => {
                  // Apply dropdown filters and range filters
                  const matchesFuel =
                    !filter.fuel || items.fuel.toLowerCase() === filter.fuel.toLowerCase();
                  const matchesImportType =
                    !filter.importType ||
                    items.importType.toLowerCase() === filter.importType.toLowerCase();
                  const matchesTransmission =
                    !filter.transmission ||
                    items.transmission.toLowerCase() ===
                      filter.transmission.toLowerCase();
                  const matchesPrice =
                    items.price >= priceRange[0] && items.price <= priceRange[1];
                  const matchesMileage =
                    items.mileage >= mileageRange[0] && items.mileage <= mileageRange[1];

                  return (
                    matchesFuel &&
                    matchesImportType &&
                    matchesTransmission &&
                    matchesPrice &&
                    matchesMileage
                  );
                })
                .map((items) => (
                  <div
                    key={items.id}
                    className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800 text-gray-100"
                  >
                    <CarCard data={items} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCars;
