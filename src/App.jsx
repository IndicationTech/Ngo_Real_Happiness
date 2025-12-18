"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Causes from "./components/Causes";
import Impact from "./components/Impact";
import HowToHelp from "./components/HowToHelp";
import SuccessStories from "./components/SuccessStories";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CauseDetail from "./components/CauseDetail";
import Payment from "./components/Payment";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [causeId, setCauseId] = useState("education");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero />
            <Impact />
            <Causes setCurrentPage={setCurrentPage} setCauseId={setCauseId} />
            <SuccessStories />
            <HowToHelp />
            <Contact />
          </>
        );
      case "about":
        return <About />;
      case "causes":
        return (
          <Causes setCurrentPage={setCurrentPage} setCauseId={setCauseId} />
        );
      case "donate":
        return <HowToHelp />;
      case "gallery":
        return <Gallery />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      case "login":
        return <Login setCurrentPage={setCurrentPage} />;
      case "signup":
        return <Signup setCurrentPage={setCurrentPage} />;
      case "cause-detail":
        return <CauseDetail cause={causeId} setCurrentPage={setCurrentPage} />;
      case "payment":
        return <Payment setCurrentPage={setCurrentPage} />;
      case "admin":
        return <AdminPanel />;
      default:
        return (
          <>
            <Hero />
            <Impact />
            <Causes setCurrentPage={setCurrentPage} setCauseId={setCauseId} />
            <SuccessStories />
            <HowToHelp />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
