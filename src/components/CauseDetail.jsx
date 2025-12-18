"use client"

import { Heart, Target, Users2, TrendingUp, ArrowLeft } from "lucide-react"

export default function CauseDetail({ cause, setCurrentPage }) {
  const causesData = {
    education: {
      title: "Education for All",
      image: "/children-studying-in-a-bright-classroom.jpg",
      description:
        "Education is the foundation for a better future. Our education programs provide quality learning resources, school supplies, and scholarships to underprivileged children who lack access to proper education.",
      impact: "Over 5,000 children have received education support",
      goal: "$50,000",
      raised: "$32,500",
      supporters: 450,
      details: [
        "Building and renovating schools in rural areas",
        "Providing school supplies and uniforms",
        "Offering scholarships for higher education",
        "Training teachers and educators",
        "Creating digital learning centers",
      ],
    },
    healthcare: {
      title: "Healthcare Access",
      image: "/healthcare-workers-helping-patients-in-a-clinic.jpg",
      description:
        "Access to quality healthcare is a basic human right. We work to ensure vulnerable communities receive medical care, preventive services, and health education to lead healthier lives.",
      impact: "15,000+ patients treated annually",
      goal: "$75,000",
      raised: "$48,000",
      supporters: 620,
      details: [
        "Operating mobile health clinics",
        "Providing free medical checkups",
        "Distributing essential medicines",
        "Health awareness campaigns",
        "Mother and child health programs",
      ],
    },
    environment: {
      title: "Environmental Protection",
      image: "/volunteers-planting-trees-in-nature.jpg",
      description:
        "Protecting our planet is critical for future generations. Our environmental initiatives focus on tree planting, waste management, and promoting sustainable practices in communities.",
      impact: "50,000+ trees planted",
      goal: "$30,000",
      raised: "$18,500",
      supporters: 340,
      details: [
        "Large-scale tree planting drives",
        "Community clean-up initiatives",
        "Recycling and waste management programs",
        "Environmental education workshops",
        "Renewable energy projects",
      ],
    },
    women: {
      title: "Women Empowerment",
      image: "/women-in-skills-training-workshop.jpg",
      description:
        "Empowering women creates stronger communities. We provide skills training, education, and economic opportunities to help women achieve financial independence and leadership roles.",
      impact: "3,000+ women trained",
      goal: "$40,000",
      raised: "$25,000",
      supporters: 380,
      details: [
        "Vocational skills training programs",
        "Microfinance and business support",
        "Leadership development workshops",
        "Legal rights awareness",
        "Entrepreneurship mentoring",
      ],
    },
    water: {
      title: "Clean Water Initiative",
      image: "/community-water-well-with-people-collecting-water.jpg",
      description:
        "Clean water is essential for life. We build wells, install water filtration systems, and educate communities about water conservation and hygiene practices.",
      impact: "100+ wells constructed",
      goal: "$60,000",
      raised: "$42,000",
      supporters: 510,
      details: [
        "Building deep water wells",
        "Installing water purification systems",
        "Water conservation education",
        "Hygiene and sanitation training",
        "Maintaining existing water infrastructure",
      ],
    },
    poverty: {
      title: "Poverty Relief Programs",
      image: "/community-development-project-with-families.jpg",
      description:
        "Breaking the cycle of poverty requires comprehensive support. Our programs provide food security, livelihood training, and community development to create sustainable change.",
      impact: "2,500+ families supported",
      goal: "$55,000",
      raised: "$38,000",
      supporters: 470,
      details: [
        "Food distribution programs",
        "Livelihood and skills training",
        "Microenterprise development",
        "Housing improvement projects",
        "Financial literacy education",
      ],
    },
  }

  const currentCause = causesData[cause] || causesData.education
  const progressPercentage =
    (Number.parseInt(currentCause.raised.replace(/[$,]/g, "")) /
      Number.parseInt(currentCause.goal.replace(/[$,]/g, ""))) *
    100

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage("causes")}
          className="flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Causes
        </button>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={currentCause.image || "/placeholder.svg"}
            alt={currentCause.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h1 className="absolute bottom-8 left-8 text-4xl md:text-5xl font-bold text-white">{currentCause.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Cause</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{currentCause.description}</p>

              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Our Impact</p>
                    <p className="text-muted-foreground">{currentCause.impact}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">What We Do</h3>
              <ul className="space-y-3">
                {currentCause.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-muted-foreground">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Donation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-4">Support This Cause</h3>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Raised</span>
                  <span className="font-semibold text-foreground">
                    {currentCause.raised} of {currentCause.goal}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted rounded-xl p-4">
                  <Users2 className="h-5 w-5 text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">{currentCause.supporters}</p>
                  <p className="text-xs text-muted-foreground">Supporters</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <TrendingUp className="h-5 w-5 text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">{Math.round(progressPercentage)}%</p>
                  <p className="text-xs text-muted-foreground">Funded</p>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage("payment")}
                className="w-full bg-secondary text-secondary-foreground py-4 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" />
                Donate Now
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Your donation is tax-deductible and 100% secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
