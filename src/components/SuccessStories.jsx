import { Quote } from "lucide-react"

export default function SuccessStories() {
  const stories = [
    {
      name: "Maria Santos",
      role: "Student",
      image: "/smiling-young-woman-student-with-books.jpg",
      quote:
        "Thanks to HopeForward's education program, I was able to complete my studies and now I'm pursuing my dream of becoming a teacher.",
      impact: "Education Program",
    },
    {
      name: "James Okonkwo",
      role: "Community Leader",
      image: "/smiling-middle-aged-man-community-leader.jpg",
      quote:
        "The clean water project transformed our village. No one has to walk miles for water anymore, and our children are healthier.",
      impact: "Clean Water Initiative",
    },
    {
      name: "Priya Sharma",
      role: "Entrepreneur",
      image: "/smiling-woman-entrepreneur-at-her-shop.jpg",
      quote:
        "The skills training program helped me start my own business. Now I can provide for my family and employ others in my community.",
      impact: "Women Empowerment",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from the people whose lives have been transformed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm relative">
              <Quote className="h-12 w-12 text-primary/20 absolute top-6 right-6" />
              <div className="relative mb-6">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{story.quote}"</p>
              <div className="border-t border-border pt-4">
                <h4 className="font-bold text-foreground">{story.name}</h4>
                <p className="text-sm text-muted-foreground">{story.role}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {story.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
