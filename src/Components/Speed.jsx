import React, { useEffect, useRef } from "react";
import { CheckBadgeIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router";
import gsap from "gsap";

const Speed = () => {
  const imgRef = useRef(null);

  useEffect(() => {
   
    gsap.to(imgRef.current, {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-black py-16 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            ref={imgRef}
            src="../assets/uss.png"
            alt="Website Migration"
            className="w-72 sm:w-96 md:w-[500px] lg:w-[580px] xl:w-[620px] h-auto rounded-2xl object-cover "
          />
        </div> 
    
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
           Always Online Always Reliable.
          </h1>

          <p className="text-blue-100 text-base sm:text-lg mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
           When your business lives online, downtime isn’t just an inconvenience—it’s a deal-breaker. That’s why we deliver 99.9% guaranteed uptime, powered by real-time monitoring and a resilient cloud infrastructure. Whether you run a personal blog or a high-traffic eCommerce store, your site stays fast, stable, and accessible—24/7.
          </p>

        
          <div className="flex flex-col gap-3 sm:gap-4 mb-8">
            {[
              "Guaranteed 99.9% uptime for consistent, worry-free performance",
              "Redundant cloud systems eliminate single points of failure",
              "Real-time monitoring identifies and fixes issues instantly",
              "Intelligent infrastructure keeps your website online—always",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:justify-start space-x-2"
              >
                <CheckBadgeIcon className="h-6 w-6 text-blue-400" />
                <span className="text-white text-base sm:text-lg">{text}</span>
              </div>
            ))}
          </div>

       
          <div className="flex justify-center lg:justify-start">
            <NavLink
            to="/"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Get Started
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </NavLink>
          </div>
        </div>

    
       
      </div>
    </section>
  );
};

export default Speed;
