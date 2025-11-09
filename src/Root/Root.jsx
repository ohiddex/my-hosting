import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatWidget from "../Components/ChatWidget";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
  
    const routeTitles = {
      "/": "idea into a website",
      "/web-hosting": "Web Hosting",
      "/cloud-hosting": "Cloud Hosting",
      "/vps-hosting": "VPS Hosting",
      "/wordPress-hosting": "WordPress Hosting",
    };


    const currentTitle = routeTitles[location.pathname] || "Page";

 
    document.title = `Hostkloud | ${currentTitle}`;
  }, [location]);

  return (
    <div className="bg-white">
      <Navbar />
      <ChatWidget></ChatWidget>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
