import React, { useState, useEffect } from 'react';
import banner1 from '../assets/Images/banner1.jpg';
import banner2 from '../assets/Images/banner2.jpg';
import banner3 from '../assets/Images/banner3.jpg';
import banner4 from '../assets/Images/banner6.jpg';
import banner5 from '../assets/Images/banner5.jpg';

// Array of images and their corresponding text
const images = [banner1, banner2, banner3, banner4, banner5];
const textOverlay = [
  "Discover the World of Adventure",
  "Your Dream Destination Awaits",
  "Capture the Moments That Matter",
  "Experience Nature Like Never Before",
  "Find Your Perfect Escape",
];
const smallTextOverlay = [
  "Explore breathtaking destinations across the globe.",
  "Find your next travel inspiration.",
  "Preserve life's most unforgettable experiences.",
  "Reconnect with the wild like never before.",
  "Plan your ultimate getaway today.",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Move to the next image in the carousel
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous image in the carousel
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically slide images every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Carousel Wrapper */}
      <div
        className="relative flex w-full h-full transition-transform duration-500 ease-in-out top-16"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-4/5">
            {/* Image */}
            <img
              src={image}
              alt={`banner ${index + 1}`} style={{ filter: 'brightness(0.5)' }}
              className={`object-cover w-full h-full transition-transform duration-300 ${index === currentImageIndex ? 'animate-zoom' : ''
                }`}
            />
            {/* Text Overlay */}
            {index === currentImageIndex && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
                <h2 className="text-3xl font-bold text-white md:text-5xl animate-zoom-text">
                  {textOverlay[index]}
                </h2>
                <p className="mt-2 text-sm text-gray-300 md:text-lg">
                  {smallTextOverlay[index]}
                </p>
                <button className="px-6 py-2 mt-4 text-white bg-red-500 rounded-full hover:bg-red-600">
                  Learn More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* Previous */}
      <button
        onClick={prevImage}
        className="absolute px-4 py-2 text-white transform -translate-y-1/2 rounded-full cursor-pointer left-4 top-1/2 bg-opacity-70 hover:bg-red-600"
      >
        &#10094; {/* Left Arrow */}
      </button>

      {/* Next */}
      <button
        onClick={nextImage}
        className="absolute px-4 py-2 text-white transform -translate-y-1/2 rounded-full cursor-pointer bg right-4 top-1/2 bg-opacity-70 hover:bg-red-600"
      >
        &#10095; {/* Right Arrow */}
      </button>

      {/* Dots Indicator */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-6 left-1/2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-red-500' : 'bg-gray-400'
              }`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
