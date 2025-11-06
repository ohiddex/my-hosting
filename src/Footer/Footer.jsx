import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Music,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-gray-200 pt-12 pb-6 text-sm">
      {/* Top section: Logo + Badges + Button + Socials */}
      <div className="flex flex-col items-center space-y-5 mb-10">
       
      
        

       
      </div>

      {/* Middle section: Links */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-blue-800 pt-10 pb-8 px-4 text-left">
        {/* Hosting */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4">Hosting</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Web Hosting</a></li>
            <li><a href="#" className="hover:text-white">Cloud Hosting</a></li>
            <li><a href="#" className="hover:text-white">Reseller Hosting</a></li>
            <li><a href="#" className="hover:text-white">Hosting for WordPress</a></li>
            <li><a href="#" className="hover:text-white">Hosting for WooCommerce</a></li>
            <li><a href="#" className="hover:text-white">BDIX Hosting</a></li>
            <li><a href="#" className="hover:text-white">BDIX Reseller Hosting</a></li>
          </ul>
        </div>

        {/* VPS & Others */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4">VPS & Others</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Cloud VPS</a></li>
            <li><a href="#" className="hover:text-white">cPanel VPS</a></li>
            <li><a href="#" className="hover:text-white">BDIX VPS</a></li>
            <li><a href="#" className="hover:text-white">Business Email</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4">About</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Company</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Affiliate</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white">SLA Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section: Payments + Copyright */}
      <div className="max-w-6xl mx-auto border-t border-blue-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs px-4">
        <p className="mb-4 sm:mb-0 text-center sm:text-left">
          Copyright © 2025 <span className="text-white font-semibold">HostKito</span>. All Rights Reserved.
        </p>

       
      </div>
    </footer>
  );
};

export default Footer;
