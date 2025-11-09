import React, { useState } from "react";
import {
  CheckIcon,
  InformationCircleIcon,
  FireIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  CloudArrowUpIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

const  Plane = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Choose Your Perfect Plan
        </h2>
        <p className="text-gray-500 mt-2">
          Save up to{" "}
          <span className="text-blue-700 font-semibold">39%</span> with yearly
          plans
        </p>

        {/* Toggle Switch */}
        <div className="mt-6 flex justify-center items-center gap-3">
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-blue-700" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 bg-blue-200 rounded-full transition"
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-blue-600 rounded-full transition-transform duration-300 ${
                isYearly ? "translate-x-7" : ""
              }`}
            ></span>
          </button>
          <span
            className={`text-sm font-medium ${
              isYearly ? "text-blue-700" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter */}
        <div className="border border-blue-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-500 text-sm mb-4">
              Perfect for individuals and personal blogs to get online fast.
            </p>

            <p className="text-gray-400 line-through text-sm">
              {isYearly ? "৳3,508" : "৳350/mo"}
            </p>
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
              {isYearly ? "72% OFF" : "15% OFF"}
            </span>

            <p className="text-4xl font-bold text-gray-900 mt-3">
              {isYearly ? "৳999" : "৳299"}
              <span className="text-base font-normal text-gray-600">
                {isYearly ? " /year" : " /month"}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Renews at {isYearly ? "৳2950/year" : "৳399/mo"}
            </p>
          </div>

          <button className="mt-6 w-full border border-blue-600 text-blue-600 font-medium rounded-full py-2.5 hover:bg-blue-600 hover:text-white transition">
            Choose Plan
          </button>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <CloudArrowUpIcon className="w-5 h-5 text-blue-600" /> 10 GB NVMe
              Storage
            </li>
            <li className="flex items-center gap-2">
              <GlobeAltIcon className="w-5 h-5 text-blue-600" /> 1 Website
              Hosted <InformationCircleIcon className="w-4 h-4 text-gray-400" />
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-blue-600" /> 1 Email Account
            </li>
            <li className="flex items-center gap-2">
              <ArrowPathIcon className="w-5 h-5 text-blue-600" /> Daily Backup
              Retention
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-blue-600" /> Basic
              Security Protection
            </li>
          </ul>
        </div>

        {/* Pro (Most Popular) */}
        <div className="relative border-2 border-blue-600 rounded-2xl p-8 shadow-lg bg-blue-50 flex flex-col justify-between">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
            <FireIcon className="w-4 h-4" /> MOST POPULAR
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
            <p className="text-gray-500 text-sm mb-4">
              Designed for growing websites and small businesses needing more
              power.
            </p>

            <p className="text-gray-400 line-through text-sm">
              {isYearly ? "৳5,388" : "৳599/mo"}
            </p>
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
              {isYearly ? "45% OFF" : "20% OFF"}
            </span>

            <p className="text-4xl font-bold text-gray-900 mt-3">
              {isYearly ? "৳2,985" : "৳499"}
              <span className="text-base font-normal text-gray-600">
                {isYearly ? " /year" : " /month"}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Renews at {isYearly ? "৳4950/year" : "৳650/mo"}
            </p>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white font-medium rounded-full py-2.5 hover:bg-blue-500 transition">
            Choose Plan
          </button>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <CloudArrowUpIcon className="w-5 h-5 text-blue-600" /> 20 GB NVMe
              Storage
            </li>
            <li className="flex items-center gap-2">
              <GlobeAltIcon className="w-5 h-5 text-blue-600" /> 5 Websites
              Hosted
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-blue-600" /> Unlimited Email
              Accounts
            </li>
            <li className="flex items-center gap-2">
              <ArrowPathIcon className="w-5 h-5 text-blue-600" /> 7 Days Backup
              Retention
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-blue-600" /> Full
              Antivirus & Security Protection
            </li>
          </ul>
        </div>

        {/* Business */}
        <div className="border border-blue-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Business
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Enterprise hosting for large-scale and mission-critical websites.
            </p>

            <p className="text-gray-400 line-through text-sm">
              {isYearly ? "৳8,388" : "৳999/mo"}
            </p>
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
              {isYearly ? "41% OFF" : "25% OFF"}
            </span>

            <p className="text-4xl font-bold text-gray-900 mt-3">
              {isYearly ? "৳4,985" : "৳749"}
              <span className="text-base font-normal text-gray-600">
                {isYearly ? " /year" : " /month"}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Renews at {isYearly ? "৳7950/year" : "৳999/mo"}
            </p>
          </div>

          <button className="mt-6 w-full border border-blue-600 text-blue-600 font-medium rounded-full py-2.5 hover:bg-blue-600 hover:text-white transition">
            Choose Plan
          </button>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <CloudArrowUpIcon className="w-5 h-5 text-blue-600" /> 30 GB NVMe
              Storage
            </li>
            <li className="flex items-center gap-2">
              <GlobeAltIcon className="w-5 h-5 text-blue-600" /> 20 Websites
              Hosted
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-blue-600" /> Unlimited Email
              Accounts
            </li>
            <li className="flex items-center gap-2">
              <ArrowPathIcon className="w-5 h-5 text-blue-600" /> 7 Days Backup
              Retention
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-blue-600" /> Full
              Antivirus & Security Protection
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Plane;
