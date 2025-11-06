import React from 'react';
import { CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/ag.png')" }}
    >
      <div className="hero-content flex flex-col lg:flex-row lg:gap-36 bg-white/30 p-6 md:p-10 rounded-lg mt-20 lg:mt-0 lg:items-center">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left order-first lg:order-none mb-6 lg:mb-0">
          
          {/* ✅ Modernized Status Badge (Fixed + Centered) */}
          <div className="flex justify-center lg:justify-start mb-5 mt-2 sm:mt-0">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-50 text-green-800 font-medium rounded-full px-3 sm:px-4 py-1 shadow-sm border border-green-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                Always Online • Always Fast • Always Yours
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl roboto font-bold text-black mb-6 leading-tight">
            Turn idea into a website
          </h1>

          {/* Features */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-6">
            {[
              'AI Site Builder for instant creation',
              'NVMe LiteSpeed hosting for blazing speed',
              '24/7 human support that truly helps',
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:justify-start space-x-2"
              >
                <CheckIcon className="h-5 sm:h-6 w-5 sm:w-6 text-green-500" />
                <span className="text-black text-sm sm:text-base">{text}</span>
              </div>
            ))}
          </div>

          {/* Domain Search */}
          <div className="flex w-full sm:w-auto border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Find your domain"
              className="px-4 py-2 w-full focus:outline-none text-gray-700 placeholder-gray-400"
            />

            {/* Desktop Button */}
            <button className="hidden sm:flex bg-[#0e404a] cursor-pointer text-white font-semibold px-6 sm:px-8 py-2 hover:bg-[#05191d] transition rounded-md">
              Find Domain
            </button>

            {/* Mobile Icon Button */}
            <button className="sm:hidden flex items-center justify-center bg-[#0e404a] text-white px-4 py-2 hover:bg-[#032127] transition rounded-md">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <img
          src="/Host.png"
          alt="Hosting"
          className="w-full max-w-xl rounded-lg order-last lg:order-none"
        />
      </div>
    </div>
  );
};

export default Hero;
