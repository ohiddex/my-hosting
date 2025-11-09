import React from "react";
import {
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  ServerIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const panels = [
  {
    name: "Webuzo Control Panel",
    icon: WrenchScrewdriverIcon,
    desc: "A lightweight and powerful hosting panel for managing websites, emails, databases, and security from one place. Ideal for VPS and Cloud hosting users.",
  },
  {
    name: "cPanel",
    icon: Cog6ToothIcon,
    desc: "Industry-leading control panel with advanced file, email, and domain management tools. Trusted for its simplicity and reliability by millions worldwide.",
  },
  {
    name: "Plesk",
    icon: ServerIcon,
    desc: "Perfect for developers and agencies. Manage multiple sites, applications, and customers with advanced automation and security integration.",
  },
  {
    name: "DirectAdmin",
    icon: GlobeAltIcon,
    desc: "A secure and fast alternative control panel offering efficient account management, DNS control, and resource monitoring for performance-focused users.",
  },
];

const ControlPanels = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
   
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

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {panels.map((panel, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <panel.icon className="w-8 h-8 text-blue-600" />
              </div>
            </div>
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
