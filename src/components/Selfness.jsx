"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const VolunteerHero = ({
  setCurrentPage,
  statsText = "10,000+ Lives Impacted",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full bg-[#f7fdf2] overflow-hidden px-6 py-16 md:px-16 md:py-28 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            We are Driven by
            <span className="block text-orange-500">Purpose & Impact</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed">
            Founded in 2021, Real Happiness Of Life Foundation is a Section 8
            non-profit organization committed to sustainable social
            transformation across education, health, women empowerment,
            livelihoods, and environmental sustainability through transparent,
            volunteer-led initiatives.
          </p>

          <button
            onClick={() => {
              setCurrentPage("about");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
          >
            Know More
          </button>
        </motion.div>

        {/* RIGHT VISUALS */}
        <div
          className={`relative transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* ORANGE CIRCLE – PUSHED TO EDGE */}
          <div className="absolute top-1/2 right-[-2%] -translate-y-1/2 w-72 h-72 md:w-[420px] md:h-[420px] bg-[#e6912d] rounded-full opacity-90 animate-pulse-slow"></div>

          {/* MAIN IMAGE – SMALLER & LOWER */}
          <div className="relative z-10 mt-12 w-[60%] md:w-[68%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src="https://csspicker.dev/api/image/?q=volunteers+community+india&image_type=photo"
              alt="Volunteers"
              className="w-full h-[220px] md:h-[320px] object-cover"
            />
          </div>

          {/* SECONDARY IMAGE */}
          <div className="absolute top-0 right-0 z-20 w-[48%] md:w-[52%] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src="https://csspicker.dev/api/image/?q=children+learning+laptop&image_type=photo"
              alt="Children learning"
              className="w-full h-[170px] md:h-[230px] object-cover"
            />

            {/* STATS BADGE */}
            <div className="absolute bottom-3 right-[-12px] bg-[#7cb342] text-white px-4 py-2 text-xs md:text-sm font-bold shadow-md rounded-md">
              {statsText}
            </div>
          </div>
        </div>
      </div>

      {/* DECOR STRIP */}
      <div className="absolute bottom-0 right-0 w-28 h-7 bg-[#7cb342] opacity-80"></div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.04); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VolunteerHero;
