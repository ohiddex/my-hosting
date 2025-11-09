import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import {
  ChatBubbleLeftRightIcon,
  HomeIcon,
  PaperAirplaneIcon,
  TicketIcon,
  MinusIcon,
  UserIcon,
  EnvelopeIcon,
  BuildingOffice2Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [departments, setDepartments] = useState([]);

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelect = (value) => {
    setFormData({ ...formData, department: value });
    setIsDropdownOpen(false);
  };

  // 🕗 Time logic: Support & Billing are offline from 8 PM – 8 AM
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    const isOffline = hour >= 20 || hour < 8; // 8 PM – 8 AM

    const updatedDepartments = [
      { name: "Sales Department", status: "online" },
      {
        name: "Support Department",
        status: isOffline ? "offline" : "online",
      },
      {
        name: "Billing Department",
        status: isOffline ? "offline" : "online",
      },
      { name: "Technical Department", status: "online" },
    ];

    setDepartments(updatedDepartments);
  }, []); // runs once on mount

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-gradient-to-b from-blue-700 to-blue-500 rounded-2xl shadow-2xl z-50 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center px-5 pt-5 pb-3 text-white">
            <h2 className="text-2xl font-bold">Talk with Experts</h2>
            <button onClick={toggleChat}>
              <MinusIcon className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Contact Form */}
          <div className="bg-white mx-4 rounded-xl p-4 shadow-sm">
            <p className="text-gray-700 font-medium mb-3">
              Please fill in your details to connect with our team:
            </p>

            {/* Name Field */}
            <div className="flex items-center gap-2 mb-3 border border-gray-200 rounded-md px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
              <UserIcon className="w-5 h-5 text-blue-600" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full outline-none text-sm text-gray-800"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center gap-2 mb-3 border border-gray-200 rounded-md px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
              <EnvelopeIcon className="w-5 h-5 text-blue-600" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full outline-none text-sm text-gray-800"
              />
            </div>

            {/* Department Dropdown */}
            <div
              className={`relative border ${
                isDropdownOpen
                  ? "border-blue-500 ring-1 ring-blue-500"
                  : "border-gray-200"
              } rounded-md px-3 py-2 cursor-pointer select-none transition`}
              onClick={toggleDropdown}
            >
              <div className="flex items-center justify-between text-sm text-gray-800">
                <div className="flex items-center gap-2">
                  <BuildingOffice2Icon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">
                    {formData.department || "* Select Department"}
                  </span>
                </div>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transform transition ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown List */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="px-3 py-2 border-b text-gray-700 font-medium flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Online
                  </div>

                  {departments.map((dept, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelect(dept.name)}
                      className="px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-gray-800">{dept.name}</span>
                      {dept.status === "online" ? (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                      ) : (
                        <span className="relative flex h-2 w-2">
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Start Chat Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 mt-4">
              <PaperAirplaneIcon className="w-4 h-4 text-white rotate-45" />
              Start Chat
            </button>
          </div>

          {/* Support Ticket */}
          <div className="mx-4 mt-4 mb-5">
            <NavLink
              to="/support"
              className="bg-white block rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Support Ticket
                </p>
                <p className="text-xs text-gray-500">
                  For complex or technical issues
                </p>
              </div>
              <TicketIcon className="w-5 h-5 text-blue-600" />
            </NavLink>
          </div>

          {/* Bottom Bar */}
          <div className="bg-white flex justify-around items-center py-3 border-t rounded-b-2xl">
            <NavLink
              to="/"
              className="flex flex-col items-center text-blue-600 text-sm font-medium hover:text-blue-700"
            >
              <HomeIcon className="w-5 h-5 mb-1" /> Home
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
