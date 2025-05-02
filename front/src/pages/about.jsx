import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-8">
      {/* Hero Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Us
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Welcome to our car import and services platform. We’re committed to
          delivering exceptional vehicles and unparalleled customer service.
        </p>
      </header>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto my-12">
        <h2 className="text-3xl text-center font-bold text-indigo-500 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          At our core, we strive to make high-quality vehicles accessible to
          everyone. Our mission is to simplify the car import process while
          ensuring a seamless and satisfying customer experience. Whether you're
          looking for a luxury ride, a reliable family car, or a commercial
          vehicle, we’ve got you covered.
        </p>
      </section>

      {/* Values Section */}
      <section className="mt-12 max-w-7xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-6">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-gray-100">Integrity</h3>
            <p className="text-gray-300 mt-2">
              We uphold transparency and honesty in everything we do, ensuring our customers are always informed and confident in their decisions.
            </p>
          </div>

          <div className="text-center bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-gray-100">Quality</h3>
            <p className="text-gray-300 mt-2">
              We prioritize high standards of quality in all aspects of our business, from the vehicles we import to the customer service we provide.
            </p>
          </div>

          <div className="text-center bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-gray-100">Customer Focus</h3>
            <p className="text-gray-300 mt-2">
              Our customers are at the heart of everything we do. We listen, adapt, and go the extra mile to ensure every experience is memorable.
            </p>
          </div>

          <div className="text-center bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-gray-100">Innovation</h3>
            <p className="text-gray-300 mt-2">
              We embrace change and continually seek innovative ways to improve our services and provide better solutions for our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center my-12">
        <h2 className="text-3xl text-indigo-500 font-bold mb-6">
          Join Us Today
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-6">
          Ready to experience the best in car imports and services? Let us help you find the perfect vehicle for your needs.
        </p>
        <Link
          to="/contact"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Contact Us
        </Link>
      </section>

      
    </div>
  );
};

export default About;
