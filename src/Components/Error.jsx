import React from "react";
import { NavLink } from "react-router";
import { HomeIcon } from "@heroicons/react/24/outline";

const Error = () => {
  return (
    <div className="bg-white">
      <div className="hero bg-gray-950 min-h-screen flex items-center justify-center text-white px-4">
        <div className="text-center max-w-2xl">
      
          <img
            src="/error.gif"
            alt="Error 404"
            className="mx-auto w-60 sm:w-80 md:w-[380px] lg:w-[420px] mb-6"
          />

     
          <p className="text-gray-300 mb-8 text-base sm:text-lg font-normal">
            Sorry, we can’t seem to find the page you’re looking for.
          </p>

          
          <NavLink
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300"
          >
            <HomeIcon className="w-5 h-5 text-white" />
            Go To Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
