"use client";

import {
  GraduationCap,
  Heart,
  Trees,
  Users2,
  Droplet,
  Home,
} from "lucide-react";

export default function Causes({ setCurrentPage, setCauseId }) {
  const causes = [
    {
      id: "education",
      icon: GraduationCap,
      title: "Education",
      description:
        "Improving access to quality education through scholarships, school support, digital learning, and community-based academic interventions.",
      image: "/NGO19.webp",
    },
    {
      id: "healthcare",
      icon: Heart,
      title: "Healthcare",
      description:
        "Strengthening preventive healthcare through awareness programs, medical camps, nutrition support, and access to primary health services.",
      image: "/NGO34.webp",
    },
    {
      id: "environment",
      icon: Trees,
      title: "Environment",
      description:
        "Driving climate responsibility through tree plantation, waste management, water conservation, and environmental awareness initiatives.",
      image: "/NGO6.webp",
    },
    {
      id: "women",
      icon: Users2,
      title: "Women Empowerment",
      description:
        "Advancing economic and social independence via skill development, entrepreneurship support, health education, and leadership training.",
      image: "/NGO33.webp",
    },
    {
      id: "water",
      icon: Droplet,
      title: "Livelihood & Skill Development",
      description:
        "Enhancing employability and self-reliance through vocational training, workforce readiness, and income-generation programs.",
      image: "/NGO28.webp",
    },
  ];

  const handleLearnMore = (causeId) => {
    setCauseId(causeId);
    setCurrentPage("cause-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDonate = () => {
    setCurrentPage("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            THEMATIC FOCUS AREAS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Supporting communities through targeted programs that create lasting
            change
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cause.image || "/placeholder.svg"}
                  alt={cause.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <cause.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cause.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cause.description}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleLearnMore(cause.id)}
                    className="text-primary font-semibold hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        {/* FIRST ROW (3 CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.slice(0, 3).map((cause, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <cause.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cause.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cause.description}
                </p>
                <button
                  onClick={() => handleLearnMore(cause.id)}
                  className="text-primary font-semibold hover:underline"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SECOND ROW (CENTERED 2 CARDS) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {causes.slice(3).map((cause, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <cause.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cause.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cause.description}
                </p>
                <button
                  onClick={() => handleLearnMore(cause.id)}
                  className="text-primary font-semibold hover:underline"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
