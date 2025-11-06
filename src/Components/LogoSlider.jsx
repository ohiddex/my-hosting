import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LogoSlider = () => {
  const trackRef = useRef(null);

  const logos = [
    "/cpanel.png",
    "/cloudlinux.png",
    "/litespeed.png",
    "/imunify360.png",
    "/aapanel.png",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const startAnimation = () => {
      const totalWidth = track.scrollWidth / 2;
      gsap.to(track, {
        x: -totalWidth,
        duration: 40,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % -totalWidth}px`,
        },
      });
    };

    const imagesLoaded = Array.from(track.querySelectorAll("img"));
    let loadedCount = 0;
    imagesLoaded.forEach((img) => {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesLoaded.length) startAnimation();
      };
    });
  }, []);

  return (
    <section className="w-full py-10 sm:py-16 bg-gray-50 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center whitespace-nowrap gap-10 sm:gap-16"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-shrink-0"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-10 sm:h-14 md:h-20 lg:h-22 w-auto object-contain opacity-90 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
