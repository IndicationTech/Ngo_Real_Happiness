"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function FooterFix() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-foreground border-t border-background/20">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/70">
        {/* LEFT – COPYRIGHT */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Real Happiness of Life Foundation. All
          rights reserved.
        </p>

        {/* RIGHT – SOCIAL LINKS */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-background transition"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-background transition"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-background transition"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-background transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
