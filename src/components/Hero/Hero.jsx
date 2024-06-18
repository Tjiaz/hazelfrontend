import React, { useEffect, useState } from "react";
import "./hero.scss";

const Hero = () => {
  const images = {
    image_1: "4.jpg",
    image_2: "5.jpeg",
    image_3: "6.jpeg",
  };
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervals = setInterval(() => {
      setImageIndex(
        (prevIndex) => (prevIndex + 1) % Object.keys(images).length
      );
    }, 10000);

    return () => clearInterval(intervals);
  }, [images]);

  return (
    <div>
      <img
        src={`/hazelfrontend/${images[Object.keys(images)[imageIndex]]}`}
        alt="images"
        className="hero-image"
      />
    </div>
  );
};

export default Hero;
