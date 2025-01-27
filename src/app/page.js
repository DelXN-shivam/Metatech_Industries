import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import OurServicesSection from "./components/OurServicesSection";
import WhatSetsSection from "./components/WhatSetsSection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* What Sets Us Apart Section */}
      <WhatSetsSection />

      {/* Services Section */}
      <OurServicesSection />

      {/* Contact Form Section */}
      

      {/* About Us Section + Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
