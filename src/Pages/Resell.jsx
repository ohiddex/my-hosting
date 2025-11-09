import { ArrowDownRightIcon, ArrowRightStartOnRectangleIcon, BoltIcon, ChatBubbleBottomCenterIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Plane from './Plane';
import Review from '../Components/Review';
import WhyChooseHosting from './WhyChooseHosting';
import HostingFeatures from './HostingFeatures';
import LogoSlider from '../Components/LogoSlider';
import ControlPanels from './ControlPanels';

const  Resell = () => {
  return (
    <div>
        <div
      className="hero min-h-[80vh] bg-cover bg-center flex items-center justify-center"
    //   style={{ backgroundImage: "url('/ag.png')" }}
    >
      <div className="hero-content flex flex-col lg:flex-row lg:gap-36 bg-white/30 p-6 md:p-10 rounded-lg mt-20 lg:mt-0 lg:items-center">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left order-first lg:order-none mb-6 lg:mb-0">
          
       

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-5xl roboto font-bold text-black mb-6 leading-tight">
           Brand-It-Yourself Reseller Hosting
          </h1>

          {/* Features */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-6">
            {[
              'cPanel/WHM control panel',
              'Daily offsite automatic data backup',
              'Your business branding ready',
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
            <div className="flex justify-center lg:justify-start mt-6">
  <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 cursor-pointer text-white px-6 py-2.5 text-sm font-medium hover:opacity-90 transition duration-200">
    Get Started Now
    <ChevronRightIcon className="h-4 w-4" />
  </button>
</div>

          </div>

        
        </div>

        {/* Hero Image */}
        <img
          src="/resell.png"
          alt="resell"
          className="w-full max-w-xl rounded-lg order-last lg:order-none"
        />
      </div>
    </div>

      <Plane></Plane>
        <WhyChooseHosting></WhyChooseHosting>
       <ControlPanels></ControlPanels>
       <HostingFeatures></HostingFeatures>
        <LogoSlider></LogoSlider>
      <Review></Review>
    
    </div>
  );
};

export default Resell;
