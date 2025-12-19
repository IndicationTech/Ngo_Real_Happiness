import { Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Building Hope: Our New School in Rural Kenya",
      excerpt:
        "After months of hard work, we're excited to announce the opening of our newest educational facility, bringing quality education to 300 children.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 15, 2024",
      author: "Sarah Johnson",
      category: "Education",
    },
    {
      title: "Clean Water Changes Everything",
      excerpt:
        "Discover how access to clean water has transformed the health and daily lives of families in remote villages.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 10, 2024",
      author: "Michael Chen",
      category: "Water",
    },
    {
      title: "Women Empowerment Through Skills Training",
      excerpt:
        "Meet the inspiring women who have started their own businesses after completing our vocational training programs.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 5, 2024",
      author: "Amira Patel",
      category: "Empowerment",
    },
    {
      title: "Healthcare Reaches Remote Communities",
      excerpt:
        "Our mobile health clinics have provided medical care to over 5,000 people in underserved areas this year.",
      image: "/placeholder.svg?height=400&width=600",
      date: "November 28, 2024",
      author: "Dr. James Wilson",
      category: "Healthcare",
    },
    {
      title: "Planting a Greener Future",
      excerpt:
        "With the help of local volunteers, we've planted 10,000 trees this month as part of our environmental conservation efforts.",
      image: "/placeholder.svg?height=400&width=600",
      date: "November 20, 2024",
      author: "Elena Rodriguez",
      category: "Environment",
    },
    {
      title: "Annual Fundraiser Exceeds All Expectations",
      excerpt:
        "Thanks to our generous supporters, this year's fundraising gala raised over $500,000 for our programs.",
      image: "/placeholder.svg?height=400&width=600",
      date: "November 15, 2024",
      author: "David Kim",
      category: "Events",
    },
  ];

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px- mt-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our programs, success stories, and upcoming
            events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-primary font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
