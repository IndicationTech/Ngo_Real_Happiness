"use client"

import { useEffect, useState } from "react"
import { Users, GraduationCap, Heart, Globe } from "lucide-react"

export default function Impact() {
  const stats = [
    { icon: Users, value: 50000, label: "Lives Impacted", suffix: "+" },
    { icon: GraduationCap, value: 15000, label: "Children Educated", suffix: "+" },
    { icon: Heart, value: 200, label: "Communities Served", suffix: "+" },
    { icon: Globe, value: 100000, label: "Trees Planted", suffix: "+" },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Making a real difference in communities around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon: Icon, value, label, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div className="text-4xl font-bold text-foreground mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  )
}
