"use client"

import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer({ setCurrentPage }) {
  const handleLinkClick = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HopeForward</h3>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Making a difference in communities through education, healthcare, and sustainable development.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("about")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("causes")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Our Causes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("gallery")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("blog")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("donate")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Donate
                </button>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Fundraise
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-background/80 text-sm mb-4">Subscribe to get updates on our latest projects</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 text-sm focus:outline-none focus:border-background/40"
              />
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© 2025 HopeForward. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-secondary fill-secondary" />
            <span>for a better world</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
