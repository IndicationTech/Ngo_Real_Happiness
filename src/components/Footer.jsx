"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer({ setCurrentPage }) {
  const handleLinkClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-14 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[30%_40%_30%] gap-12 items-start">
          {/* LEFT – LOGO */}
          <div className="flex items-start">
            <img src="/NGOLogo.png" alt="NGO Logo" className="w-56 h-auto" />
          </div>

          {/* CENTER – LINKS */}
          <div className="grid grid-cols-2 gap-12">
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => handleLinkClick("about")}
                    className="text-background/80 hover:text-background transition"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("causes")}
                    className="text-background/80 hover:text-background transition"
                  >
                    Our Causes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("gallery")}
                    className="text-background/80 hover:text-background transition"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("blog")}
                    className="text-background/80 hover:text-background transition"
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
                    className="text-background/80 hover:text-background transition"
                  >
                    Donate
                  </button>
                </li>
                <li className="text-background/80">Volunteer</li>
                <li className="text-background/80">Fundraise</li>
                <li className="text-background/80">Partner With Us</li>
              </ul>
            </div>
          </div>

          {/* RIGHT – GET IN TOUCH */}
          <div>
            <h4 className="font-bold mb-6">Get in Touch</h4>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <p className="text-background/80">
                  123 Hope Street,
                  <br />
                  Community Center,
                  <br />
                  San Francisco, CA
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <p className="text-background/80">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <p className="text-background/80">info@hopeforward.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
