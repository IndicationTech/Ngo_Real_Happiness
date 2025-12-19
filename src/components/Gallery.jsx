"use client";

import { useState } from "react";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const images = [
    {
      category: "education",
      src: "/NGO4.webp",
      alt: "Education Program",
    },
    {
      category: "health",
      src: "/NGO13.webp",
      alt: "Healthcare Initiative",
    },
    {
      category: "events",
      src: "/NGO9.webp",
      alt: "Community Event",
    },
    {
      category: "education",
      src: "/NGO2.webp",
      alt: "Teaching Session",
    },
    {
      category: "health",
      src: "/NGO15.webp",
      alt: "Health Checkup",
    },
    {
      category: "events",
      src: "/NGO8.webp",
      alt: "Tree Planting Event",
    },
    {
      category: "education",
      src: "/NGO1.webp",
      alt: "Technology Training",
    },
    {
      category: "health",
      src: "/NGO16.webp",
      alt: "Mobile Clinic",
    },
    {
      category: "events",
      src: "/NGO7.webp",
      alt: "Fundraising Event",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "education", label: "Education" },
    { id: "health", label: "Health" },
    { id: "events", label: "Events" },
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Moments that capture our journey and the impact we're making
            together
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
