import React from "react";

const Package = () => {
  const packages = [
    {
      img: "/web.png",
      title: "Web Hosting",
      desc: "Everything you need to get started with your website.",
      oldPrice: "৳ 11,990",
      price: "৳ 2,910",
      tag: "20% OFF",
      label: "One click install",
      btnText: "Explore Web Hosting",
    },
    {
      img: "/web.png",
      title: "Reseller Hosting",
      desc: "Perfect for web masters and hosting businesses.",
      oldPrice: "৳ 11,990",
      price: "৳ 2,910",
      tag: "20% OFF",
      label: "Instant scaling",
      btnText: "Explore Reseller Hosting",
    },
    {
      img: "/web.png",
      title: "Virtual Servers",
      desc: "Get started with a VPS and enjoy full flexibility.",
      oldPrice: "৳ 11,990",
      price: "৳ 2,910",
      tag: "20% OFF",
      label: "Instant scaling",
      btnText: "Explore VPS Hosting",
    },
    {
      img: "/web.png",
      title: "Dedicated Servers",
      desc: "High performance servers for demanding projects.",
      oldPrice: "৳ 11,990",
      price: "৳ 2,910",
      tag: "20% OFF",
      label: "Lowest price",
      btnText: "Explore Dedicated Hosting",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Hosting Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Top Label */}
              <span className="text-xs text-[#0e404a] font-medium bg-[#0e404a]/10 px-3 py-1 rounded-full mb-4">
                {pkg.label}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-5">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {pkg.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-5">{pkg.desc}</p>

              {/* Price Section */}
              <div className="mb-6">
                <p className="text-xs text-gray-500">
                  Starting at{" "}
                  <span className="line-through">{pkg.oldPrice}</span>
                  <span className="text-[#0e404a] font-semibold ml-1 text-[12px]">
                    {pkg.tag}
                  </span>
                </p>
                <p className="text-4xl font-bold text-[#0e404a]">
                  {pkg.price}
                </p>
                <p className="text-sm text-gray-500">/mo for 48-month term</p>
                <p className="text-sm text-[#0e404a] font-medium mt-1">
                  +2 months free
                </p>
              </div>

              {/* Button */}
              <button className="mt-auto bg-[#0e404a] text-white font-semibold text-sm px-6 py-2 rounded-md hover:bg-[#0c353e] transition">
                {pkg.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
