import React, { useState, useEffect } from "react";
import "./sponsors.scss";

const Sponsors = () => {
  // Define an array of sponsor logos
  const sponsorLogos = [
    "logo1.png",
    "logo22.jpeg",
    "logo3.jpeg",
    "logo4.jpeg",
    "logo5.jpeg",
    "logo6.jpeg", // Last logo for slideshow
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to switch to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sponsorLogos.length);
  };

  useEffect(() => {
    // Automatically switch to the next slide every 10 seconds
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sponsors-container">
      <div className="sponsors-logos">
        {sponsorLogos.map((logo, index) => (
          <img
            key={index}
            src={`/hazelfrontend/images/${logo}`}
            alt={`Sponsor ${index + 1}`}
            className={index === currentSlide ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
