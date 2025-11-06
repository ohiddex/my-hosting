import React from "react";

const DatacenterMap = () => {
  const locations = [
    { name: "Los Angeles", color: "bg-orange-400", top: "59%", left: "20%" },
    { name: "Utah", color: "bg-pink-500", top: "52%", left: "26%" },
    { name: "Dallas", color: "bg-green-500", top: "56%", left: "30%" },
    { name: "New Jersy", color: "bg-cyan-500", top: "48%", left: "36%" },
    { name: "Tampa", color: "bg-blue-500", top: "60%", left: "36.5%" },
    { name: "New York", color: "bg-purple-500", top: "44%", left: "38.5%" },
    { name: "Germany", color: "bg-lime-600", top: "39%", left: "56%" },
    { name: "Bangladesh", color: "bg-orange-600", top: "54%", left: "71%" },
    { name: "Singapore", color: "bg-red-600", top: "64%", left: "77%" },
  ];

  return (
    <section className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Global Datacenters
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Host your website close to its visitors for the best possible latency
          and faster page load times.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative max-w-6xl mx-auto">
        <img
          src="/world-map.png"
          alt="Global Datacenters Map"
          className="w-full h-auto opacity-90"
        />

        {/* Pings */}
        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: loc.top, left: loc.left }}
          >
            {/* Ping Animation (smaller & subtle) */}
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${loc.color} opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${loc.color}`}
              ></span>
            </span>

            {/* Label */}
            <div className="absolute top-4 left-3 bg-white shadow-md text-gray-800 text-xs sm:text-sm font-semibold rounded-md px-2 py-1 whitespace-nowrap">
              {loc.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DatacenterMap;
