import { BoltIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Plane from './Plane';
import Review from '../Components/Review';
import WhyChooseHosting from './WhyChooseHosting';
import HostingFeatures from './HostingFeatures';
import LogoSlider from '../Components/LogoSlider';
import ControlPanels from './ControlPanels';

const Vps = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] bg-amber-50 py-12 lg:py-20">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-8 px-4 sm:px-6 lg:px-12">
          
     
          <img
            src="vps.png"
            alt="Hosting Server"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-lg"
          />

          
          <div className="text-center lg:text-left flex flex-col justify-center gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Get Ultra-Fast Hosting With 24/7 Expert Support
            </h1>
            <p className="text-base sm:text-lg text-black max-w-md mx-auto lg:mx-0">
              Perfect for local businesses, stores, and pros who need speed, uptime, and real human help.
            </p>

           
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-4 mt-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <ChatBubbleBottomCenterIcon className="w-5 h-5 text-white" />
                <p className="text-black text-sm sm:text-base">
                  24/7 Chat & Call · 30 Day Refund
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-white" />
                <p className="text-black text-sm sm:text-base">
                  One Click WordPress · No Hassle, No Stress
                </p>
              </div>
            </div>

          
            <div className="flex justify-center lg:justify-start mt-6">
              <button className="rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-2.5 text-sm font-medium hover:opacity-90 transition duration-200">
                Get Started — Risk Free
              </button>
            </div>
          </div>

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

export default Vps;
