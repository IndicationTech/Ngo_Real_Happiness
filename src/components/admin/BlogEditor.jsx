"use client"

import { useState, useEffect } from "react"
import { Save, X, Upload } from "lucide-react"

export default function BlogEditor({ blog, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "Education",
    image: "",
    published: false,
  })

  useEffect(() => {
    if (blog) {
      setFormData(blog)
    }
  }, [blog])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const url = blog ? `http://localhost:5000/api/admin/blogs/${blog.id}` : "http://localhost:5000/api/admin/blogs"

      const method = blog ? "PUT" : "POST"

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      onSave()
    } catch (error) {
      console.error("Failed to save blog:", error)
      alert("Failed to save blog post")
    }
  }

  const categories = ["Education", "Water", "Healthcare", "Environment", "Empowerment", "Events"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">{blog ? "Edit Blog Post" : "Create New Post"}</h1>
            <button
              onClick={onCancel}
              className="flex items-center gap-2 border border-border px-4 py-2 rounded-xl font-semibold hover:bg-muted transition-colors text-foreground"
            >
              <X className="h-5 w-5" />
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-card rounded-2xl shadow-sm border border-border p-6 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                Title *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                placeholder="Enter blog title"
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-foreground mb-2">
                Excerpt *
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                placeholder="Brief description of the blog post"
                required
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-foreground mb-2">
                Content *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={12}
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                placeholder="Write your blog content here..."
                required
              />
            </div>

            {/* Author and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-foreground mb-2">
                  Author *
                </label>
                <input
                  id="author"
                  name="author"
                  type="text"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Author name"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-foreground mb-2">
                Image URL
              </label>
              <div className="flex gap-2">
                <input
                  id="image"
                  name="image"
                  type="text"
                  value={formData.image}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Enter image URL or use placeholder"
                />
                <button
                  type="button"
                  className="px-4 py-3 border border-border rounded-xl hover:bg-muted transition-colors flex items-center gap-2"
                >
                  <Upload className="h-5 w-5" />
                  Upload
                </button>
              </div>
              {formData.image && (
                <div className="mt-3">
                  <img
                    src={formData.image || "/placeholder.svg"}
                    alt="Preview"
                    className="h-32 w-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>

            {/* Published Toggle */}
            <div className="flex items-center gap-3">
              <input
                id="published"
                name="published"
                type="checkbox"
                checked={formData.published}
                onChange={handleChange}
                className="h-5 w-5 rounded border-border text-primary focus:ring-primary"
              />
              <label htmlFor="published" className="text-sm font-medium text-foreground">
                Publish immediately
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              <Save className="h-5 w-5" />
              {blog ? "Update Post" : "Create Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
