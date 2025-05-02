import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    "./main2.mp4",
    "./main1.mp4",
    "./main3.mp4",
  ];

  // Automatically transition to the next video every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [videos.length]);

  return (
    <div className="bg-gray-900 -z-10">
      <div className="relative overflow-hidden w-full bg-gray-100 rounded-b-lg" style={{ zIndex: '10' }}>
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-500 h-auto w-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full flex items-center justify-center bg-black"
            >
              <video
                src={video}
                className="w-full h-full object-cover" 
                muted
                loop
                autoPlay
                preload="auto"
                playsInline
              ></video>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
