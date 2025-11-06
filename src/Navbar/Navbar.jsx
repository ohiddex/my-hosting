import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import {
  CloudIcon,
  ServerIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hover delay fix (desktop)
  const handleMouseEnter = (menu) => {
    if (timer) clearTimeout(timer);
    setOpenMenu(menu);
  };
  const handleMouseLeave = () => {
    const newTimer = setTimeout(() => setOpenMenu(null), 180);
    setTimer(newTimer);
  };

  // Mobile dropdown toggle
  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const linkClass =
    "px-3 py-2 text-[#0e404a] hover:text-[#0e404a] cursor-pointer transition font-medium flex items-center gap-1";
  const dropdownItemClass =
    "flex items-start gap-3 p-3 rounded-lg hover:bg-[#0e404a]/10 transition";

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/hosting.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold tracking-tight text-[#0e404a]">
            HostKido
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-sm items-center relative">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          {/* HOSTING */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("hosting")}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/hosting" className={linkClass}>
              Hosting
              <ChevronDownIcon className="h-4 w-4" />
            </NavLink>

            {openMenu === "hosting" && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white rounded-xl shadow-xl p-6 w-[90vw] md:w-[850px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 z-50 border border-gray-100">
                {/* Hosting */}
                <div>
                  <h3 className="font-semibold mb-3 text-[#0e404a]">Hosting</h3>
                  <ul className="space-y-2">
                    <li>
                      <NavLink to="/web-hosting" className={dropdownItemClass}>
                        <ServerIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            Web Hosting
                          </p>
                          <p className="text-sm text-gray-500">
                            Fast & secure shared hosting
                          </p>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/cloud-hosting" className={dropdownItemClass}>
                        <CloudIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            Cloud Hosting
                          </p>
                          <p className="text-sm text-gray-500">
                            Scalable cloud performance
                          </p>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/reseller-hosting"
                        className={dropdownItemClass}
                      >
                        <GlobeAltIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            Reseller Hosting
                          </p>
                          <p className="text-sm text-gray-500">
                            Start your own hosting business
                          </p>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* WordPress */}
                <div>
                  <h3 className="font-semibold mb-3 text-[#0e404a]">
                    WordPress
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <NavLink
                        to="/wordpress-hosting"
                        className={dropdownItemClass}
                      >
                        <CloudIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            WP Hosting
                          </p>
                          <p className="text-sm text-gray-500">
                            Optimized for WordPress
                          </p>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/woocommerce-hosting"
                        className={dropdownItemClass}
                      >
                        <GlobeAltIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            WooCommerce Hosting
                          </p>
                          <p className="text-sm text-gray-500">
                            Built for online stores
                          </p>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* VPS */}
                <div>
                  <h3 className="font-semibold mb-3 text-[#0e404a]">
                    VPS Server
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <NavLink to="/vps-cloud" className={dropdownItemClass}>
                        <CloudIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            Cloud VPS
                          </p>
                          <p className="text-sm text-gray-500">
                            Scalable VPS power
                          </p>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/cpanel-vps" className={dropdownItemClass}>
                        <ServerIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            cPanel VPS
                          </p>
                          <p className="text-sm text-gray-500">
                            Full control with cPanel
                          </p>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/business-email" className={dropdownItemClass}>
                        <EnvelopeIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            Business Email
                          </p>
                          <p className="text-sm text-gray-500">
                            Professional email hosting
                          </p>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* BDIX */}
                <div>
                  <h3 className="font-semibold mb-3 text-[#0e404a]">
                    BDIX Connected
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <NavLink to="/bdix-hosting" className={dropdownItemClass}>
                        <GlobeAltIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            BDIX Hosting
                          </p>
                          <p className="text-sm text-gray-500">
                            Ultra-fast local servers
                          </p>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/bdix-reseller"
                        className={dropdownItemClass}
                      >
                        <ServerIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            BDIX Reseller
                          </p>
                          <p className="text-sm text-gray-500">
                            Resell with BDIX speed
                          </p>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/bdix-vps" className={dropdownItemClass}>
                        <CloudIcon className="h-6 w-6 text-[#0e404a]" />
                        <div>
                          <p className="font-semibold text-[#0e404a]">
                            BDIX VPS
                          </p>
                          <p className="text-sm text-gray-500">
                            Local high-speed VPS
                          </p>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* DOMAIN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("domain")}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/domain" className={linkClass}>
              Domain
              <ChevronDownIcon className="h-4 w-4" />
            </NavLink>

            {openMenu === "domain" && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white rounded-xl shadow-xl p-3 w-48 border border-gray-100 z-50">
                <li>
                  <NavLink
                    to="/register-domain"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-[#0e404a]/10 rounded-md transition text-[#0e404a]"
                  >
                    <GlobeAltIcon className="h-5 w-5" /> Register Domain
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/transfer-domain"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-[#0e404a]/10 rounded-md transition text-[#0e404a]"
                  >
                    <ServerIcon className="h-5 w-5" /> Transfer Domain
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink to="/affiliate" className={linkClass}>
            Affiliate
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* Client Area Button */}
        <div className="hidden lg:flex">
          <a
            href="/client"
            className="btn bg-[#0e404a] border-none rounded-md hover:bg-[#0e404a]/90 text-lg shadow-none text-white font-medium py-2 px-6"
          >
            Client Area
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="btn btn-ghost text-[#0e404a]"
          >
            {mobileOpen ? "✖" : "☰"}
          </button>

          {mobileOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col p-3 z-50">
              {/* Top-level */}
              <NavLink to="/" className="py-2 px-2 text-[#0e404a]">
                Home
              </NavLink>

              {/* HOSTING MOBILE */}
              <button
                onClick={() => toggleMobileDropdown("hosting")}
                className="flex justify-between items-center py-2 px-2 text-[#0e404a] font-medium"
              >
                Hosting
                <ChevronDownIcon
                  className={`h-5 w-5 transition ${
                    mobileDropdown === "hosting" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "hosting" && (
                <div className="pl-4 border-l ml-2 space-y-1">
                  <NavLink to="/web-hosting" className="block py-1 text-sm">
                    Web Hosting
                  </NavLink>
                  <NavLink to="/cloud-hosting" className="block py-1 text-sm">
                    Cloud Hosting
                  </NavLink>
                  <NavLink to="/reseller-hosting" className="block py-1 text-sm">
                    Reseller Hosting
                  </NavLink>
                  <NavLink to="/vps-cloud" className="block py-1 text-sm">
                    Cloud VPS
                  </NavLink>
                </div>
              )}

              {/* DOMAIN MOBILE */}
              <button
                onClick={() => toggleMobileDropdown("domain")}
                className="flex justify-between items-center py-2 px-2 text-[#0e404a] font-medium"
              >
                Domain
                <ChevronDownIcon
                  className={`h-5 w-5 transition ${
                    mobileDropdown === "domain" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "domain" && (
                <div className="pl-4 border-l ml-2 space-y-1">
                  <NavLink to="/register-domain" className="block py-1 text-sm">
                    Register Domain
                  </NavLink>
                  <NavLink to="/transfer-domain" className="block py-1 text-sm">
                    Transfer Domain
                  </NavLink>
                </div>
              )}

              <NavLink to="/affiliate" className="py-2 px-2 text-[#0e404a]">
                Affiliate
              </NavLink>
              <NavLink to="/contact" className="py-2 px-2 text-[#0e404a]">
                Contact
              </NavLink>
              <a
                href="/client"
                className="btn bg-[#0e404a] text-white mt-2 w-full"
              >
                Client Area
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
