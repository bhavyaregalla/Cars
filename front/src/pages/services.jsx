import React from "react";
import {Link} from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-8">
      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Exceptional services tailored to meet all your car import and
          maintenance needs.
        </p>
      </header>

      {/* Services Section */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Service 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">
            Car Imports
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We specialize in importing high-quality vehicles from the UK, Japan,
            and other global markets. Experience seamless delivery and
            exceptional customer service.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">
            Pre-Purchase Inspections
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Ensure you’re making the right choice with our detailed vehicle
            inspections, performed by certified professionals.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">
            Financing Assistance
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Flexible financing solutions tailored to fit your budget and ensure
            you can afford your dream car.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">
            Documentation Handling
          </h2>
          <p className="text-gray-300 leading-relaxed">
            From customs clearance to registration, we manage all the
            paperwork, so you can focus on enjoying your new car.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">
            Vehicle Maintenance
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Keep your car in top condition with our expert maintenance and
            repair services, including engine diagnostics and regular servicing.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">
            After-Sales Support
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Enjoy dedicated support even after the purchase. Our team is always
            available to assist you with any questions or concerns.
          </p>
        </div>
      </main>

      {/* Why Choose Us Section */}
      <section className="mt-12 max-w-7xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Experience and Expertise
            </h3>
            <p className="text-gray-300">
              With years of experience in the car import industry, we ensure
              that you receive the best service possible.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-300">
              Our services are designed with you in mind, offering convenience,
              flexibility, and reliability at every step.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Competitive Pricing
            </h3>
            <p className="text-gray-300">
              We offer affordable rates without compromising on the quality of
              service or vehicles.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Trusted Network
            </h3>
            <p className="text-gray-300">
              Our extensive network of suppliers and partners ensures access to
              the best vehicles and services.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-16 flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-bold text-gray-100 mb-4">
          Ready to Experience the Best?
        </h3>
        <p className="text-gray-300 max-w-2xl">
          Contact us today to learn more about our services and discover how we
          can help you with all your car-related needs.
        </p>
        <Link
          to="/contact"
          className="mt-8 bg-indigo-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:shadow-indigo-500 transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Services;
