import React, { useState } from "react";
import axios from "axios";

const AddCar = () => {
  const url = "https://api.cloudinary.com/v1_1/dg62kqlka/auto/upload";

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "chat-app-file");
    const res = await fetch(url, {
      method: "post",
      body: formData,
    });
    const resdata = await res.json();
    return resdata;
  };

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      alert('Video files are not allowed.');
      e.target.value = '';
      return;  // Prevent uploading a video file
    }
    const photo = await uploadFile(file);
    setData((prev) => ({
      ...prev,
      carImage: photo.url,
    }));
  };

  const [data, setData] = useState({
    name: "",
    carImage: "",
    importType: "",
    carMake: "",
    model: "",
    mileage: "",
    transmission: "",
    fuel: "",
    engine: "",
    year: "",
    price: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async () => {
    console.log(data);
    try {
      if (data.name === ""||
        data.carImage === ""||
        data.importType === ""||
        data.mileage === ""||
        data.transmission === ""||
        data.fuel === ""||
        data.engine === ""||
        data.year === ""||
        data.price === "") {
        alert("All fields are required");
        return;
      }

      const res = await axios.post(
        "http://localhost:1000/api/v1/car/add-car",
        data,
        { headers }
      );
      setData({
        name: "",
        carImage: "",
        importType: "",
        carMake: "",
        model: "",
        mileage: "",
        transmission: "",
        fuel: "",
        engine: "",
        year: "",
        price: "",
      });
      alert(res.data.message);
    } catch (e) {
      alert("Error submitting data!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Add Car
      </h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Image Upload */}
        <div className="mb-6">
          <label htmlFor="carImage" className="block text-gray-400 font-semibold mb-2">
            Upload Car Image
          </label>
          <input
            className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            type="file"
            id="carImage"
            name="carImage"
            required
            onChange={handleUploadPhoto}
          />
        </div>

        {/* Title and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Car Title</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Title of the Car"
              name="name"
              required
              value={data.name}
              onChange={change}
            />
          </div>
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Price in $</label>
            <input
              type="number"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Price"
              name="price"
              required
              value={data.price}
              onChange={change}
            />
          </div>
        </div>

        {/* Import Type and Car Make */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Import Type</label>
            <select
              name="importType"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              value={data.importType}
              onChange={change}
            >
              <option value="" disabled>
                Select Import Type
              </option>
              <option value="Japan Import">Japan Import</option>
              <option value="Local">Local</option>
              <option value="UK Import">UK Import</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Car Make</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Car Make"
              name="carMake"
              required
              value={data.carMake}
              onChange={change}
            />
          </div>
        </div>

        {/* Transmission and Fuel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Transmission</label>
            <select
              name="transmission"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              value={data.transmission}
              onChange={change}
            >
              <option value="" disabled>
                Select Transmission
              </option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Fuel</label>
            <select
              name="fuel"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              value={data.fuel}
              onChange={change}
            >
              <option value="" disabled>
                Select Fuel Type
              </option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        {/* Engine and Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Engine Type</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Engine Type"
              name="engine"
              required
              value={data.engine}
              onChange={change}
            />
          </div>
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Year</label>
            <input
              type="number"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Year"
              name="year"
              required
              value={data.year}
              onChange={change}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Model</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Model"
              name="model"
              required
              value={data.model}
              onChange={change}
            />
          </div>
          <div>
            <label className="block text-gray-400 font-semibold mb-2">Mileage</label>
            <input
              type="number"
              className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Mileage"
              name="mileage"
              required
              value={data.mileage}
              onChange={change}
            />
          </div>
        </div>

        <button
          className="mt-8 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={submit}
        >
          Add Car
        </button>
      </div>
    </div>
  );
};

export default AddCar;
