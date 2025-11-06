import React from "react";
import CountUp from "react-countup";
import { FaHeadset, FaServer, FaUsers, FaCloudUploadAlt } from "react-icons/fa";

const Weekly = () => {
  const stats = [
    {
      icon: <FaHeadset className="text-white text-5xl mb-3" />,
      title: "24/7 Support",
      count: 1200,
      suffix: "+",
      description: "Active Support Tickets",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: <FaCloudUploadAlt className="text-white text-5xl mb-3" />,
      title: "99.9% Uptime",
      count: 99.9,
      suffix: "%",
      description: "Server Uptime Guarantee",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaServer className="text-white text-5xl mb-3" />,
      title: "Global Servers",
      count: 350,
      suffix: "+",
      description: "High-Performance Datacenters",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaUsers className="text-white text-5xl mb-3" />,
      title: "Happy Clients",
      count: 5000,
      suffix: "+",
      description: "Trusted by Customers Worldwide",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          We Provide Reliable Hosting Services
        </h2>
        <p className="text-gray-600 mb-12 text-sm sm:text-base max-w-2xl mx-auto">
          Our global infrastructure ensures unbeatable uptime, world-class
          support, and lightning-fast servers — empowering your online presence
          24/7.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center rounded-2xl p-6 shadow-lg text-white bg-gradient-to-r ${item.gradient} transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-3xl sm:text-4xl font-bold mt-1">
                  <CountUp
                    end={item.count}
                    duration={3}
                    decimals={item.count % 1 !== 0 ? 1 : 0}
                  />
                  {item.suffix}
                </h3>
                <p className="text-sm sm:text-base font-semibold mt-2">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm opacity-90 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Weekly;
