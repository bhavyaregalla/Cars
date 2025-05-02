import React from "react";
import { Link } from "react-router-dom";

const carCard = ({ data }) => {
  return (
    <div className="container">
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl p-4 flex flex-col transition-transform duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 relative">
        <Link to={`/view-car-details/${data._id}`}>
          <div className="front">
            {/* Car Image */}
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-md flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src={data.carImage}
                alt={data.name}
                className="h-[25vh] w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Car Details */}
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold tracking-wide">
                <b>Car Name:</b> {data.name}
              </h2>
              <p className="mt-2 text-lg text-gray-300">
                <b>Price:</b> {data.price} $
              </p>
              <p className="mt-2 text-lg text-gray-300">
                <b>Fuel:</b> {data.fuel}
              </p>
              <p className="mt-2 text-lg text-gray-300">
                <b>Import Type:</b> {data.importType}
              </p>
              <p className="mt-2 text-lg text-gray-300">
                <b>Year:</b> {data.year}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default carCard;
