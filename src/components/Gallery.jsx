"use client"

import { useState } from "react"

export default function Gallery() {
  const [filter, setFilter] = useState("all")

  const images = [
    {
      category: "education",
      src: "/classroom-learning.png",
      alt: "Education Program",
    },
    {
      category: "health",
      src: "/medical-staff-providing-healthcare.jpg",
      alt: "Healthcare Initiative",
    },
    {
      category: "events",
      src: "/community-gathering-event.jpg",
      alt: "Community Event",
    },
    {
      category: "education",
      src: "/volunteers-teaching-children.jpg",
      alt: "Teaching Session",
    },
    {
      category: "health",
      src: "/health-checkup-clinic.jpg",
      alt: "Health Checkup",
    },
    {
      category: "events",
      src: "/tree-planting-event-volunteers.jpg",
      alt: "Tree Planting Event",
    },
    {
      category: "education",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Technology Training",
    },
    {
      category: "health",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mobile Clinic",
    },
    {
      category: "events",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Fundraising Event",
    },
  ]

  const categories = [
    { id: "all", label: "All" },
    { id: "education", label: "Education" },
    { id: "health", label: "Health" },
    { id: "events", label: "Events" },
  ]

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter)

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Moments that capture our journey and the impact we're making together
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
  )
}
