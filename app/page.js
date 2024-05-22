"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const home = () => {
  const images = [
    "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg",
    "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg",
    "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative mx-auto w-full h-screen top-0 right-0 bottom-0 left-0">
      <div className="flex items-center justify-between py-2">
        <div className="group mx-auto relative w-full">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            className={`w-full rounded-lg shadow-lg transition-all duration-500 ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Link
              href="/tiles"
              className="bg-primary text-white font-bold py-2 px-4 rounded-md scale-95  hover:scale-100 transition-all duration-300">
              Tiles
            </Link>
            <Link
              href="/partition"
              className="bg-green-600 text-white font-bold py-2 px-4 rounded-md scale-95  hover:scale-100 transition-all duration-300">
              Partition
            </Link>
          </div>
          <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                } cursor-pointer transition-colors duration-300`}
                onClick={() => handleDotClick(index)}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
