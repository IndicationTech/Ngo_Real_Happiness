import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Contact Us
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CONTACT FORM */}
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-full font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* MAP */}
          <div className="w-full h-[520px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.080363360157!2d72.9523854!3d19.191692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b96f0b099f21%3A0xc978277a19452515!2sSunrise%20Business%20Park!5e0!3m2!1sen!2sin!4v1766147404810!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
