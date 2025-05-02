import React from "react";
import { Link } from "react-router-dom";

const Warranty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-8">
      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Warranty Coverage
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Enjoy peace of mind with our comprehensive warranty options designed
          to keep your car running smoothly.
        </p>
      </header>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section - Overview */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">
            Comprehensive Coverage
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our warranty plans provide protection for both new and pre-owned
            vehicles, ensuring you’re covered for any unexpected repairs or
            issues. From engine components to electrical systems, we’ve got you
            covered.
          </p>
          <ul className="mt-4 text-gray-300 list-disc pl-6">
            <li>Engine and transmission coverage</li>
            <li>Electrical systems and components</li>
            <li>Suspension and brake systems</li>
            <li>Fuel delivery systems</li>
          </ul>
        </section>

        {/* Right Section - Warranty Plans */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">
            Flexible Plans
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Choose from a range of plans that fit your budget and vehicle
            requirements. Our flexible options ensure you can get the coverage
            you need without any hassle.
          </p>
          <ul className="mt-4 text-gray-300 list-disc pl-6">
            <li>Basic Warranty: Covers major components</li>
            <li>Extended Warranty: Includes additional systems</li>
            <li>Premium Warranty: Comprehensive protection</li>
          </ul>
        </section>
      </main>

      {/* Warranty Benefits Section */}
      <section className="mt-12 max-w-7xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-center text-indigo-500 mb-4">
          Why Choose Our Warranty?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Nationwide Coverage
            </h3>
            <p className="text-gray-300">
              Our warranty is accepted at certified repair shops across the
              country, ensuring you’re never stranded.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Hassle-Free Claims
            </h3>
            <p className="text-gray-300">
              Simplified claims process ensures you get the support you need
              without unnecessary delays.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Affordable Options
            </h3>
            <p className="text-gray-300">
              Flexible payment plans and options to suit every budget.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-300">
              Our dedicated support team is available around the clock to assist
              you with any warranty-related queries.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-16 flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-bold text-gray-100 mb-4">
          Ready to Protect Your Car?
        </h3>
        <p className="text-gray-300 max-w-2xl">
          Contact us today to learn more about our warranty plans and get the
          peace of mind you deserve.
        </p>
        <Link
          to="/contact"
          className="mt-8 bg-indigo-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:shadow-indigo-500 transition-all duration-300"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
};

export default Warranty;
