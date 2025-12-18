// "use client";

// import { Menu, X, User } from "lucide-react";
// import { useState } from "react";

// export default function Navigation({ currentPage, setCurrentPage }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", id: "home" },
//     { name: "About", id: "about" },
//     { name: "Causes", id: "causes" },
//     { name: "Gallery", id: "gallery" },
//     { name: "Blog", id: "blog" },
//     { name: "Contact", id: "contact" },
//   ];

//   const handleNavClick = (id) => {
//     setCurrentPage(id);
//     setMobileMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <button
//               onClick={() => handleNavClick("home")}
//               className="text-2xl font-bold text-primary"
//             >
//               <img src="/NGOLogo.png" alt="" />
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`text-sm font-medium transition-colors hover:text-primary ${
//                   currentPage === item.id ? "text-primary" : "text-foreground"
//                 }`}
//               >
//                 {item.name}
//               </button>
//             ))}
//             {/* <button
//               onClick={() => handleNavClick("login")}
//               className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
//             >
//               <User className="h-4 w-4" />
//               Login
//             </button> */}
//             <button
//               onClick={() => handleNavClick("donate")}
//               className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
//             >
//               Donate Now
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`block w-full text-left py-3 px-4 text-sm font-medium transition-colors hover:bg-muted ${
//                   currentPage === item.id
//                     ? "text-primary bg-muted"
//                     : "text-foreground"
//                 }`}
//               >
//                 {item.name}
//               </button>
//             ))}
//             {/* <button
//               onClick={() => handleNavClick("login")}
//               className="block w-full text-left py-3 px-4 text-sm font-medium text-foreground hover:bg-muted"
//             >
//               Login
//             </button> */}
//             <button
//               onClick={() => handleNavClick("donate")}
//               className="w-full mt-4 bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
//             >
//               Donate Now
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Causes", id: "causes" },
    { name: "Gallery", id: "gallery" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setCurrentPage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        {/* LOGO */}

        <button
          onClick={() => handleClick("home")}
          className={`transition-all duration-300 ${
            isScrolled ? "static" : "absolute left-6 top-4"
          }`}
        >
          <img
            src="/NGOLogo.png"
            alt="NGO Logo"
            className={`w-auto transition-all duration-300 ${
              isScrolled ? "h-18" : "h-14 md:h-28"
            }`}
          />
        </button>

        {/* CENTER NAV */}

        <div
          className={`hidden md:flex transition-all duration-300 ${
            isScrolled
              ? "ml-auto flex items-center gap-8"
              : "absolute left-1/2 -translate-x-1/2 top-1/3"
          }`}
        >
          <div
            className={`flex items-center gap-10 px-12 py-3.5 rounded-full border shadow-md ${
              isScrolled
                ? "bg-transparent border-none shadow-none"
                : "bg-white border-gray-200"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  currentPage === item.id
                    ? "text-primary"
                    : "text-black hover:text-primary"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* DONATE BUTTON */}

        <div
          className={`hidden md:flex transition-all duration-300 ${
            isScrolled ? "ml-6" : "absolute top-1/3 right-6"
          }`}
        >
          <button
            onClick={() => handleClick("donate")}
            className="bg-secondary text-secondary-foreground px-6 py-3.5 rounded-full font-medium hover:opacity-90 transition"
          >
            Donate Now
          </button>
        </div>

        {/* MOBILE MENU */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileOpen && (
        <div className="md:hidden mx-4 mt-2 bg-white rounded-xl shadow-lg p-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="block w-full text-left py-3 px-4 rounded-md text-sm hover:bg-muted"
            >
              {item.name}
            </button>
          ))}
          <button className="w-full mt-4 bg-secondary text-secondary-foreground py-2 rounded-full">
            Donate Now
          </button>
        </div>
      )}
    </header>
  );
}
