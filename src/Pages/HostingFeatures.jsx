import React from "react";
import {
  ServerIcon,
  ArrowPathIcon,
  LockClosedIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    icon: ServerIcon,
    title: "Fastest NVMe SSD Server",
    desc: "We use enterprise-grade servers located across multiple locations around the globe. Tune your website with us and take it to the next level.",
  },
  {
    icon: ArrowPathIcon,
    title: "Daily Multistep Backup",
    desc: "We use a 3-layer backup system to keep your data secure. With hundreds of snapshots each month, no element is ever missed.",
  },
  {
    icon: BoltIcon,
    title: "LiteSpeed Web Server",
    desc: "Website performance is enhanced with the LiteSpeed web server and latest PHP version, making your site faster and more efficient.",
  },
  {
    icon: LockClosedIcon,
    title: "Lifetime FREE SSL",
    desc: "Your website will be secure with our easy-to-install, auto-renewing Let’s Encrypt SSL certificates to keep your site protected.",
  },
];

const HostingFeatures = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-16 px-6 lg:px-20">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Why Choose Our Hosting
        </h2>
        <p className="text-white mt-3 max-w-2xl mx-auto">
          Experience unmatched performance, security, and reliability — built for businesses, creators, and professionals who want the best hosting environment.
        </p>
      </div>

    
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
      
        <div className="w-full lg:w-2/4">
          <img
            src="men.png" 
            alt="Web Hosting Features"
            className="w-full max-w-lg mx-auto rounded-xl drop-shadow-lg"
          />
        </div>

        {/* Right Side - Feature Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-blue-100 shadow-sm hover:shadow-md rounded-xl p-6 transition"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-blue-50">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingFeatures;
