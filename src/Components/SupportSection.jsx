import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { ChatBubbleLeftRightIcon, TicketIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";

const SupportSection = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const circles = gsap.utils.toArray(".floating-circle");

      circles.forEach((circle, i) => {
        // Floating movement
        gsap.to(circle, {
          x: gsap.utils.random(-120, 120),
          y: gsap.utils.random(-100, 100),
          rotation: gsap.utils.random(-25, 25),
          scale: gsap.utils.random(0.9, 1.1),
          duration: gsap.utils.random(8, 14),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 1.5,
        });

        // Glow fade effect
        gsap.to(circle, {
          opacity: gsap.utils.random(0.08, 0.18),
          duration: gsap.utils.random(5, 9),
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.8,
        });
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bgRef}
      className="relative bg-gray-900 text-white py-20 overflow-hidden"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-circle absolute top-10 left-10 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="floating-circle absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
        <div className="floating-circle absolute top-1/3 right-1/3 w-48 h-48 bg-cyan-400/20 blur-3xl rounded-full"></div>
        <div className="floating-circle absolute bottom-1/4 left-1/2 w-52 h-52 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Real People. Real Support.
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base leading-relaxed">
          Hosting can be complex, but getting help should be simple. Our expert
          team is available <span className="text-blue-400 font-semibold">24/7</span>{" "}
          to resolve issues quickly and keep your site running smoothly.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 mb-16 flex-wrap">
          {/* Open Ticket */}
          <NavLink
            to="/support/ticket"
            className="flex items-center gap-2 bg-white text-[#0e404a] font-semibold px-6 sm:px-8 py-3 rounded-md hover:bg-gray-100 transition text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            <TicketIcon className="w-5 h-5 text-[#0e404a]" />
            Open a Ticket
          </NavLink>

          {/* Start Chat */}
          <NavLink
            to="/support/chat"
            className="flex items-center gap-2 bg-transparent border border-white font-semibold px-6 sm:px-8 py-3 rounded-md hover:bg-white hover:text-[#0e404a] transition text-sm sm:text-base"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
            Start a Chat
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
