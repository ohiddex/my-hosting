import React from "react";
import {
  BuildingOfficeIcon,
  ShoppingBagIcon,
  CodeBracketIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const ForUse = () => {
  const solutions = [
    {
      id: 1,
      title: "For Businesses",
      desc: "Perfect for small business owners and personal brands who want a fast, reliable, and conversion-focused website to reach more clients.",
      btn: "Get Online",
      icon: <BuildingOfficeIcon className="h-7 w-7 text-[#0e404a]" />,
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: 2,
      title: "For eCommerce",
      desc: "Built for growth-focused eCommerce owners who need rock-solid stability and speed during heavy traffic and sale seasons.",
      btn: "Launch Store",
      icon: <ShoppingBagIcon className="h-7 w-7 text-[#0e404a]" />,
      img: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: 3,
      title: "For Developers",
      desc: "Ideal for developers and tech teams who want full control, fast deployments, and a seamless hosting experience for every project.",
      btn: "Deploy Now",
      icon: <CodeBracketIcon className="h-7 w-7 text-[#0e404a]" />,
      img: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: 4,
      title: "For Resellers",
      desc: "Start your own hosting brand, manage your clients with confidence, and scale effortlessly with guaranteed uptime and support.",
      btn: "Start Earning",
      icon: <UsersIcon className="h-7 w-7 text-[#0e404a]" />,
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: 5,
      title: "For Developers",
      desc: "Ideal for developers and tech teams who want full control, fast deployments, and a seamless hosting experience for every project.",
      btn: "Deploy Now",
      icon: <CodeBracketIcon className="h-7 w-7 text-[#0e404a]" />,
      img: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: 6,
      title: "For Resellers",
      desc: "Start your own hosting brand, manage your clients with confidence, and scale effortlessly with guaranteed uptime and support.",
      btn: "Start Earning",
      icon: <UsersIcon className="h-7 w-7 text-[#0e404a]" />,
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1170",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f9fafb] to-[#ecf1f3] py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0e404a] tracking-tight">
            Tailored Hosting for Every Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
            Whether you're running a business, a store, or coding your next big project — our hosting adapts to your goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="relative group bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-sm rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={sol.img}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-2xl shadow-md backdrop-blur-md">
                  {sol.icon}
                </div>
              </div>

              {/* Text Section */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0e404a] mb-3 group-hover:text-[#125361] transition-colors duration-300">
                    {sol.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {sol.desc}
                  </p>
                </div>

                <button className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0e404a] rounded-full overflow-hidden group/btn transition-all duration-300 hover:bg-[#125361]">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#0e404a] to-[#1b707f] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">{sol.btn}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForUse;
