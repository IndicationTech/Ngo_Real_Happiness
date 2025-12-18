import { Target, Eye, Award, Clock } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Integrity & Transparency",
      description:
        "Uncompromising ethical standards, clear governance, and auditable reporting.",
    },
    {
      icon: Eye,
      title: "Inclusivity",
      description:
        "Equal opportunity and dignity for all, without discrimination.",
    },
    {
      icon: Award,
      title: "Sustainability",
      description:
        "Solutions designed for environmental responsibility and long-term impact.",
    },
    {
      icon: Clock,
      title: "Community Ownership",
      description:
        "Participatory development that builds local leadership and accountability.",
    },
    // {
    //   icon: Clock,
    //   title: "Commitment",
    //   description:
    //     "We are dedicated to long-term support and partnership with communities",
    // },
  ];

  const milestones = [
    {
      year: "2010",
      event:
        "Founded HopeForward with a mission to serve underserved communities",
    },
    { year: "2013", event: "Opened our first school serving 200 children" },
    {
      year: "2016",
      event: "Reached 10,000 lives impacted through our programs",
    },
    {
      year: "2019",
      event: "Launched clean water initiative across 50 villages",
    },
    {
      year: "2022",
      event: "Expanded to 15 countries with over 100 active programs",
    },
    {
      year: "2024",
      event: "Celebrated 50,000+ lives transformed through our work",
    },
  ];

  const leaders = [
    {
      name: "Dr. Emily Richardson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "20+ years in international development",
    },
    {
      name: "Marcus Thompson",
      role: "Director of Programs",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former UN field coordinator",
    },
    {
      name: "Dr. Anita Desai",
      role: "Chief Medical Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specialist in community health",
    },
    {
      name: "Robert Martinez",
      role: "Finance Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in nonprofit financial management",
    },
  ];

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About HopeForward
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real Happiness Of Life Foundation is a Section 8, not-for-profit
            organization established in 2021 with a singular mandate: to drive
            inclusive, measurable, and sustainable social transformation. The
            Foundation works at the intersection of education, health, women
            empowerment, livelihoods, and environmental sustainability,
            partnering closely with communities, institutions, and governments
            to deliver high-impact outcomes.
            <br />
            Structured with strong governance, statutory compliance, and
            transparent reporting mechanisms, the Foundation operates with a
            data-driven, community-first execution model that prioritizes
            long-term value creation over short-term interventions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              • To design and implement scalable, community-centric programs
              that address systemic gaps in education, health, women
              empowerment, livelihoods, and environmental stewardship.
              <br />
              • To empower vulnerable and underserved populations through
              capacity building, institutional access, and resource enablement.
              <br />• To collaborate with government bodies, CSR partners, and
              civil collaborate with government bodies, CSR partners, and civil
              society organizations to amplify impact, ensure compliance, and
              institutionalize sustainability.
            </p>
          </div>
          <div className="bg-secondary/5 rounded-2xl p-8 border-2 border-secondary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To build an equitable and resilient society where every
              individual—regardless of geography, gender, or socio-economic
              background—has access to quality education, essential healthcare,
              dignified livelihoods, and a sustainable environment.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/30 my-2"></div>
                  )}
                </div>
                <div className="bg-card rounded-xl p-6 shadow-sm flex-1 mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                />
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {leader.name}
                </h3>
                <p className="text-primary font-medium mb-2">{leader.role}</p>
                <p className="text-sm text-muted-foreground">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
