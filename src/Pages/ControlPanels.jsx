import React from "react";

const panels = [
  {
    name: "Webuzo Control Panel",
    image: "webuzo.png", // replace with your actual image path
    desc: "A lightweight and powerful hosting panel for managing websites, emails, databases, and security from one place. Ideal for VPS and Cloud hosting users.",
  },
  {
    name: "cPanel",
    image: "/Cpanell.png",
    desc: "Industry-leading control panel with advanced file, email, and domain management tools. Trusted for its simplicity and reliability by millions worldwide.",
  },
  {
    name: "Custom Panel",
    image: "custom.png",
    desc: "Designed for developers and agencies, this platform lets you manage multiple websites, applications, and clients with advanced automation and integrated security.",
  },
  {
    name: "DirectAdmin",
    image: "/directadmin.png",
    desc: "A secure and fast alternative control panel offering efficient account management, DNS control, and resource monitoring for performance-focused users.",
  },
];

const ControlPanels = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Control Panels
        </h2>
        <p className="text-gray-600 mt-3">
          Manage your hosting easily with our range of industry-leading control
          panels. Whether you’re a beginner or an expert, we have the perfect
          panel for you.
        </p>
      </div>

      {/* Grid of Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {panels.map((panel, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition hover:scale-[1.02]"
          >
            {/* Image Section */}
            <div className="flex justify-center mb-5">
              <img
                src={panel.image}
                alt={panel.name}
                className="w-24 h-24 object-contain"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {panel.name}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {panel.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ControlPanels;
