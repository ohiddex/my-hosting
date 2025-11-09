import React from "react";
import { NavLink } from "react-router";
import { ServerIcon } from "@heroicons/react/24/solid";

const Package = () => {
  const packages = [
    {
      img: "/webb.png",
      title: "Web Hosting",
      desc: "Everything you need to get started with your website.",
      oldPrice: "৳ 11,990",
      price: "৳ 2,910",
      tag: "20% OFF",
      label: "One click install",
      btnText: "Web Hosting",
      link: "/web-hosting",
    },
    {
      img: "/wb.png",
      title: "Cloud Hosting",
      desc: "Perfect for web masters and hosting businesses.",
      oldPrice: "৳ 11,990",
      price: "৳ 2,910",
      tag: "20% OFF",
      label: "Instant scaling",
      btnText: "Cloud Hosting",
      link: "/cloud-hosting",
    },
    {
      img: "/vs.png",
      title: "Virtual Servers",
      desc: "Get started with a VPS and enjoy full flexibility.",
      oldPrice: "৳ 11,990",
      price: "৳ 2,910",
      tag: "20% OFF",
      label: "Instant scaling",
      btnText: "VPS Hosting",
      link: "/vps-hosting",
    },
    {
      img: "/ds.png",
      title: "WordPress Hosting",
      desc: "High performance servers for demanding projects.",
      oldPrice: "৳ 11,990",
      price: "৳ 2,910",
      tag: "20% OFF",
      label: "Lowest price",
      btnText: "WordPress Hosting",
      link: "/wordPress-hosting",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Our Hosting Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="text-xs text-blue-900 font-medium bg-blue-100 px-3 py-1 rounded-full mb-4">
                {pkg.label}
              </span>

              <div className="w-16 h-16 flex items-center justify-center mb-5">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-15 h-15 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {pkg.title}
              </h3>

              <p className="text-sm text-gray-600 mb-5">{pkg.desc}</p>

              <div className="mb-6">
                <p className="text-xs text-gray-500">
                  Starting at{" "}
                  <span className="line-through">{pkg.oldPrice}</span>
                  <span className="text-blue-900 font-semibold ml-1 text-[12px]">
                    {pkg.tag}
                  </span>
                </p>
                <p className="text-4xl font-bold text-blue-900">{pkg.price}</p>
                <p className="text-sm text-gray-500">/mo for 48-month term</p>
                <p className="text-sm text-blue-900 font-medium mt-1">
                  +2 months free
                </p>
              </div>

          
              <NavLink
                to={pkg.link}
                className={`mt-auto flex items-center justify-center gap-2 font-semibold text-sm rounded-md transition text-white ${
                  i === packages.length - 1
                    ? "bg-blue-900 hover:bg-blue-800 text-base px-8 py-3"
                    : "bg-blue-900 hover:bg-blue-800 px-6 py-2"
                }`}
              >
                <ServerIcon className="w-4 h-4" />
                {pkg.btnText}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
