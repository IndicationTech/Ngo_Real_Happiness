const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Data file path
const dataPath = path.join(__dirname, "data", "blogs.json")

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, "data"))) {
  fs.mkdirSync(path.join(__dirname, "data"))
}

// Initialize blogs data if file doesn't exist
if (!fs.existsSync(dataPath)) {
  const initialData = [
    {
      id: 1,
      title: "Building Hope: Our New School in Rural Kenya",
      excerpt:
        "After months of hard work, we're excited to announce the opening of our newest educational facility, bringing quality education to 300 children.",
      content: "Full content of the blog post goes here...",
      image: "/school-children-education.jpg",
      date: "December 15, 2024",
      author: "Sarah Johnson",
      category: "Education",
      published: true,
    },
    {
      id: 2,
      title: "Clean Water Changes Everything",
      excerpt:
        "Discover how access to clean water has transformed the health and daily lives of families in remote villages.",
      content: "Full content of the blog post goes here...",
      image: "/clean-water-well.png",
      date: "December 10, 2024",
      author: "Michael Chen",
      category: "Water",
      published: true,
    },
    {
      id: 3,
      title: "Women Empowerment Through Skills Training",
      excerpt:
        "Meet the inspiring women who have started their own businesses after completing our vocational training programs.",
      content: "Full content of the blog post goes here...",
      image: "/women-empowerment-training.png",
      date: "December 5, 2024",
      author: "Amira Patel",
      category: "Empowerment",
      published: true,
    },
  ]
  fs.writeFileSync(dataPath, JSON.stringify(initialData, null, 2))
}

// Helper functions
const readBlogs = () => {
  const data = fs.readFileSync(dataPath, "utf8")
  return JSON.parse(data)
}

const writeBlogs = (blogs) => {
  fs.writeFileSync(dataPath, JSON.stringify(blogs, null, 2))
}

// Routes

// Get all published blogs (public)
app.get("/api/blogs", (req, res) => {
  try {
    const blogs = readBlogs().filter((blog) => blog.published)
    res.json(blogs)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" })
  }
})

// Get single blog by id (public)
app.get("/api/blogs/:id", (req, res) => {
  try {
    const blogs = readBlogs()
    const blog = blogs.find((b) => b.id === Number.parseInt(req.params.id))
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" })
    }
    res.json(blog)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog" })
  }
})

// Admin routes - Get all blogs (including unpublished)
app.get("/api/admin/blogs", (req, res) => {
  try {
    const blogs = readBlogs()
    res.json(blogs)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" })
  }
})

// Create new blog
app.post("/api/admin/blogs", (req, res) => {
  try {
    const blogs = readBlogs()
    const newBlog = {
      id: blogs.length > 0 ? Math.max(...blogs.map((b) => b.id)) + 1 : 1,
      ...req.body,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }
    blogs.push(newBlog)
    writeBlogs(blogs)
    res.status(201).json(newBlog)
  } catch (error) {
    res.status(500).json({ error: "Failed to create blog" })
  }
})

// Update blog
app.put("/api/admin/blogs/:id", (req, res) => {
  try {
    const blogs = readBlogs()
    const index = blogs.findIndex((b) => b.id === Number.parseInt(req.params.id))
    if (index === -1) {
      return res.status(404).json({ error: "Blog not found" })
    }
    blogs[index] = { ...blogs[index], ...req.body }
    writeBlogs(blogs)
    res.json(blogs[index])
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog" })
  }
})

// Delete blog
app.delete("/api/admin/blogs/:id", (req, res) => {
  try {
    const blogs = readBlogs()
    const filteredBlogs = blogs.filter((b) => b.id !== Number.parseInt(req.params.id))
    if (blogs.length === filteredBlogs.length) {
      return res.status(404).json({ error: "Blog not found" })
    }
    writeBlogs(filteredBlogs)
    res.json({ message: "Blog deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog" })
  }
})

// Simple admin authentication (in production, use proper auth)
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body

  // Simple check (replace with proper auth in production)
  if (username === "admin" && password === "admin123") {
    res.json({
      success: true,
      token: "demo-token-" + Date.now(),
      user: { username: "admin", role: "admin" },
    })
  } else {
    res.status(401).json({ success: false, error: "Invalid credentials" })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
