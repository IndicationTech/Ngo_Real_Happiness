"use client";

import React from "react";
import {
  Briefcase,
  Users,
  HeartHandshake,
  Droplets,
  Globe,
} from "lucide-react";

export default function Roadmap() {
  const milestones = [
    {
      year: "2021",
      title: "Foundation Established",
      subtitle: "Mission to serve underserved communities",
      icon: <Briefcase size={18} />,
      left: "15%",
      top: "65%",
      align: "top",
    },
    {
      year: "2022",
      title: "First School Opened",
      subtitle: "200 children enrolled",
      icon: <Users size={18} />,
      left: "28%",
      top: "38%",
      align: "bottom",
    },
    {
      year: "2023",
      title: "10,000 Lives Impacted",
      subtitle: "Education & health initiatives",
      icon: <HeartHandshake size={18} />,
      left: "45%",
      top: "58%",
      align: "top",
    },
    {
      year: "2024",
      title: "Clean Water Initiative",
      subtitle: "50 villages covered",
      icon: <Droplets size={18} />,
      left: "63%",
      top: "35%",
      align: "bottom",
    },
    {
      year: "2025",
      title: "Global Expansion",
      subtitle: "15 countries, 100+ programs",
      icon: <Globe size={18} />,
      left: "80%",
      top: "52%",
      align: "top",
    },
  ];

  return (
    <section className="w-full bg-[#f7fafc] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Journey So Far
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            A timeline of growth, impact, and meaningful change across
            communities.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative w-full h-[460px]">
          {/* ROAD */}
          <svg
            viewBox="0 0 1200 400"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Base */}
            <path
              d="
                M 0 300
                C 200 300 200 150 400 180
                C 600 210 600 350 800 300
                C 1000 250 1000 180 1200 200
              "
              fill="none"
              stroke="#2f2f2f"
              strokeWidth="36"
              strokeLinecap="round"
            />

            {/* Inner */}
            <path
              d="
                M 0 300
                C 200 300 200 150 400 180
                C 600 210 600 350 800 300
                C 1000 250 1000 180 1200 200
              "
              fill="none"
              stroke="#4b5563"
              strokeWidth="26"
              strokeLinecap="round"
            />

            {/* Dashed center */}
            <path
              d="
                M 0 300
                C 200 300 200 150 400 180
                C 600 210 600 350 800 300
                C 1000 250 1000 180 1200 200
              "
              fill="none"
              stroke="#f9fafb"
              strokeWidth="2"
              strokeDasharray="10 12"
            />
          </svg>

          {/* Milestones */}
          {milestones.map((m, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2"
              style={{ left: m.left, top: m.top }}
            >
              <div
                className={`flex flex-col items-center text-center ${
                  m.align === "top" ? "-translate-y-28" : "translate-y-10"
                }`}
              >
                {/* Pin */}
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0066a4] mb-3">
                  {m.icon}
                </div>

                {/* Card */}
                <div className="bg-white px-4 py-3 rounded-xl shadow-sm w-52">
                  <div className="text-sm font-semibold text-gray-900">
                    {m.year}
                  </div>
                  <div className="text-sm font-medium text-gray-800 mt-1">
                    {m.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{m.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
