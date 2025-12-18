import { Heart, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-16 md:pt-20 w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="/diverse-group-of-smiling-children-and-volunteers-w.jpg"
        alt="Community Impact"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-screen flex items-center  ">
        <div className="max-w-2xl text-white">
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            REAL HAPPINESS OF LIFE FOUNDATION
          </h1>

          {/* SUBTITLE */}
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
            Empowering Minds | Transforming Futures
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="bg-secondary text-secondary-foreground px-3 py-3 sm:px-6 sm:py-3 rounded-full font-medium sm:font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:opacity-90 transition">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
              Donate Now
            </button>

            <button className="bg-primary text-primary-foreground px-3 py-3 sm:px-6 sm:py-3 rounded-full font-medium sm:font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:opacity-90 transition">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
