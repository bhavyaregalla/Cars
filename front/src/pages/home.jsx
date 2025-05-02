import React from "react";
import Hero from "../components/home/hero";
import RecentCars from "../components/home/recentCars";

const home = () => {
  return (
    <div className="text-white">
      <Hero />
      <RecentCars />
    </div>
  );
};

export default home;
