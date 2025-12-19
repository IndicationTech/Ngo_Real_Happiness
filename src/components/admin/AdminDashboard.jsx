"use client"

import { useState, useEffect } from "react"
import { Plus, Edit2, Trash2, LogOut, Eye, EyeOff } from "lucide-react"
import BlogEditor from "./BlogEditor"

export default function AdminDashboard({ onLogout }) {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingBlog, setEditingBlog] = useState(null)
  const [showEditor, setShowEditor] = useState(false)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/blogs")
      const data = await response.json()
      setBlogs(data)
    } catch (error) {
      console.error("Failed to fetch blogs:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return

    try {
      await fetch(`http://localhost:5000/api/admin/blogs/${id}`, {
        method: "DELETE",
      })
      fetchBlogs()
    } catch (error) {
      console.error("Failed to delete blog:", error)
    }
  }

  const handleEdit = (blog) => {
    setEditingBlog(blog)
    setShowEditor(true)
  }

  const handleCreate = () => {
    setEditingBlog(null)
    setShowEditor(true)
  }

  const handleSave = () => {
    setShowEditor(false)
    setEditingBlog(null)
    fetchBlogs()
  }

  const handleTogglePublish = async (blog) => {
    try {
      await fetch(`http://localhost:5000/api/admin/blogs/${blog.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...blog, published: !blog.published }),
      })
      fetchBlogs()
    } catch (error) {
      console.error("Failed to update blog:", error)
    }
  }

  if (showEditor) {
    return <BlogEditor blog={editingBlog} onSave={handleSave} onCancel={() => setShowEditor(false)} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Blog Management</h1>
              <p className="text-sm text-muted-foreground">Manage your NGO blog posts</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCreate}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                <Plus className="h-5 w-5" />
                New Post
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 border border-border px-4 py-2 rounded-xl font-semibold hover:bg-muted transition-colors text-foreground"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
            <p className="mt-4 text-muted-foreground">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No blog posts yet. Create your first post!</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-64 h-48 md:h-auto">
                    <img
                      src={blog.image || "/placeholder.svg?height=300&width=400"}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {blog.category}
                        </span>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            blog.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {blog.published ? "Published" : "Draft"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleTogglePublish(blog)}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          title={blog.published ? "Unpublish" : "Publish"}
                        >
                          {blog.published ? (
                            <EyeOff className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <Eye className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>
                        <button
                          onClick={() => handleEdit(blog)}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                          <Edit2 className="h-5 w-5 text-muted-foreground" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-5 w-5 text-red-600" />
                        </button>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-foreground mb-2">{blog.title}</h2>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{blog.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>By {blog.author}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
