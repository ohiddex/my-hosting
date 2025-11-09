import React from "react";
import { NavLink } from "react-router";
import { Facebook, Instagram, Linkedin, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6 text-sm">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8 mb-12 px-4">
     
         <div className="flex flex-wrap justify-center gap-3 border-b border-gray-800 pb-2 ">
             <h1 className="pt-1">Pay with</h1>
          <div className="bg-white p-1 rounded">
            <img src="/visa.png" alt="Visa" className="h-6" />
          </div>
          <div className="bg-white p-1 rounded">
            <img src="/bkash.png" alt="Bkash" className="h-6" />
          </div>
          <div className="bg-white p-1 rounded">
            <img src="/nagad.png" alt="Nagad" className="h-6" />
          </div>
          <div className="bg-white p-1 rounded">
            <img src="/stripe.png" alt="Stripe" className="h-6" />
          </div>
          <div className="bg-white p-1 rounded">
            <img src="/amex.png" alt="Amex" className="h-6" />
          </div>
          <div className="bg-white p-1 rounded">
            <img src="/ssl.png" alt="Stripe" className="h-6" />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6 text-center md:text-left">
     
          <div className="flex justify-center md:justify-start">
            <img
              src="/foott.png"
              alt="Hostkito Logo"
              className="h-10 object-contain"
            />
          
          </div>

          
         

        
          <div className="flex justify-center md:justify-end">
            <NavLink
              to="/about"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-transform duration-200 hover:scale-105"
            >
              Find more about us
            </NavLink>
          </div>
        </div>

      
       
      </div>

   
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-800 pt-10 pb-8 px-4 text-left">
    
        <div>
          <h4 className="text-white font-semibold text-base mb-4">Hosting</h4>
          <ul className="space-y-2">
            <li><NavLink to="/web-hosting" className="hover:text-white">Web Hosting</NavLink></li>
            <li><NavLink to="/cloud-hosting" className="hover:text-white">Cloud Hosting</NavLink></li>
            <li><NavLink to="/reseller-hosting" className="hover:text-white">Reseller Hosting</NavLink></li>
            <li><NavLink to="/wordpress-hosting" className="hover:text-white">Hosting for WordPress</NavLink></li>
            <li><NavLink to="/woocommerce-hosting" className="hover:text-white">Hosting for WooCommerce</NavLink></li>
            <li><NavLink to="/bdix-hosting" className="hover:text-white">BDIX Hosting</NavLink></li>
            <li><NavLink to="/bdix-reseller" className="hover:text-white">BDIX Reseller Hosting</NavLink></li>
          </ul>
        </div>

     
        <div>
          <h4 className="text-white font-semibold text-base mb-4">VPS & Others</h4>
          <ul className="space-y-2">
            <li><NavLink to="/cloud-vps" className="hover:text-white">Cloud VPS</NavLink></li>
            <li><NavLink to="/cpanel-vps" className="hover:text-white">cPanel VPS</NavLink></li>
            <li><NavLink to="/bdix-vps" className="hover:text-white">BDIX VPS</NavLink></li>
            <li><NavLink to="/business-email" className="hover:text-white">Business Email</NavLink></li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-white font-semibold text-base mb-4">About</h4>
          <ul className="space-y-2">
            <li><NavLink to="/company" className="hover:text-white">Company</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
            <li><NavLink to="/blog" className="hover:text-white">Blog</NavLink></li>
            <li><NavLink to="/affiliate" className="hover:text-white">Affiliate</NavLink></li>
          </ul>
        </div>

    
        <div>
          <h4 className="text-white font-semibold text-base mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><NavLink to="/privacy-policy" className="hover:text-white">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-white">Terms and Conditions</NavLink></li>
            <li><NavLink to="/refund-policy" className="hover:text-white">Refund Policy</NavLink></li>
            <li><NavLink to="/sla-policy" className="hover:text-white">SLA Policy</NavLink></li>
          </ul>
        </div>
      </div>

  
      <div className="max-w-6xl mx-auto border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs px-4 space-y-4 sm:space-y-0">
        <p className="text-center sm:text-left">
          Copyright © 2025 <span className="text-white font-semibold">Hostkloud</span>. All Rights Reserved.
        </p>

     
        <div className="flex space-x-5 justify-center">
          <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors text-gray-600 sm:text-gray-700"
      >
        <Linkedin size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>

      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors text-gray-600 sm:text-gray-700"
      >
        <Youtube size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>

      
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors text-gray-600 sm:text-gray-700"
      >
        <Instagram size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>

     
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors text-gray-600 sm:text-gray-700"
      >
        <Facebook size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
