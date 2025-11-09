import React from "react";
import { NavLink } from "react-router";
import {
  BuildingOfficeIcon,
  ShoppingBagIcon,
  CodeBracketIcon,
  UsersIcon,
  GlobeAltIcon,
  ServerIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const ForUse = () => {
  const solutions = [
    {
      id: 1,
      title: "For Businesses",
      desc: "Build and scale your business online with fast, secure, and reliable hosting solutions.",
      icon: <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />,
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1170",
      link: "/business",
    },
    {
      id: 2,
      title: "For eCommerce",
      desc: "Power your online store with high uptime and speed during heavy traffic periods.",
      icon: <ShoppingBagIcon className="h-8 w-8 text-blue-600" />,
      img: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?auto=format&fit=crop&q=80&w=1170",
      link: "/store",
    },
    {
      id: 3,
      title: "For Developers",
      desc: "Get full control with flexible tools, quick deployment, and modern development features.",
      icon: <CodeBracketIcon className="h-8 w-8 text-blue-600" />,
      img: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&q=80&w=1170",
      link: "/developers",
    },
    {
      id: 4,
      title: "For Resellers",
      desc: "Launch your own hosting business with white-label options and automated tools.",
      icon: <UsersIcon className="h-8 w-8 text-blue-600" />,
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1170",
      link: "/resellers",
    },
    {
      id: 5,
      title: "For Global Brands",
      desc: "Expand globally with optimized infrastructure and edge servers for better reach.",
      icon: <GlobeAltIcon className="h-8 w-8 text-blue-600" />,
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1170",
      link: "/global",
    },
    {
      id: 6,
      title: "For Enterprises",
      desc: "Ensure enterprise-grade security, performance, and scalability for large organizations.",
      icon: <ServerIcon className="h-8 w-8 text-blue-600" />,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1170",
      link: "/enterprise",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Tailored Hosting for Every Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Whether you’re a business, developer, or global brand — our hosting adapts to your goals with reliability, speed, and control.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={sol.img}
                  alt={sol.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white p-2 rounded-lg shadow-sm">
                  {sol.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5">{sol.desc}</p>
                </div>

                {/* Button */}
                <NavLink
                  to={sol.link}
                  className="flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-md w-fit transition"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForUse;
