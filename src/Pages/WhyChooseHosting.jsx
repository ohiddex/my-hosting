import React from "react";
import {
  LockClosedIcon,
  ServerIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  CloudIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    icon: WrenchScrewdriverIcon,
    title: "Latest Control Panel",
    desc: "We provide a popular and widely used control panel protected by advanced security guidelines. Our team monitors and protects your site in real time.",
  },
  {
    icon: GlobeAltIcon,
    title: "Softaculous App Installer",
    desc: "Install WordPress and over 280+ CMS platforms with just a few clicks. Manage, update, and reinstall apps easily for a smooth user experience.",
  },
  {
    icon: LockClosedIcon,
    title: "Let's Encrypt SSL Certs",
    desc: "Free SSL certificates ensure your website’s security and trustworthiness. Protect your users and business with built-in encryption.",
  },
  {
    icon: BoltIcon,
    title: "LiteSpeed Web Server",
    desc: "LiteSpeed technology makes your website load up to 40x faster than Apache. Improve SEO rankings with high-speed performance.",
  },
  {
    icon: CloudIcon,
    title: "CloudLinux OS",
    desc: "Our servers use CloudLinux OS for stability and security, isolating users to prevent resource spikes and safeguard files.",
  },
  {
    icon: CommandLineIcon,
    title: "Built-in SSH Terminal",
    desc: "Easily access and manage your hosting environment securely with built-in SSH — perfect for developers and advanced users.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Imunify360 Security",
    desc: "Get next-level protection with Imunify360 — including firewalls, real-time malware scanning, and proactive defense.",
  },
  {
    icon: ArrowPathIcon,
    title: "Daily Data Backup",
    desc: "We back up your data daily and offer one-click restoration. Rest easy knowing your site is protected against data loss.",
  },
  {
    icon: ServerIcon,
    title: "PHP Selector (5.6 – Latest)",
    desc: "Choose your PHP version easily via the control panel. Maintain flexibility with full compatibility for any script or CMS.",
  },
];

const WhyChooseHosting = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Why Choose Web Hosting?
        </h2>
        <p className="text-white mt-3">
          With our Web Hosting plans, you’ll receive more resources for less
          money — ensuring the reliability you can count on. Starting your own
          business with our hosting is easier than you think!
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="border border-blue-100 rounded-xl shadow-sm hover:shadow-md bg-white p-6 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-blue-100">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseHosting;
