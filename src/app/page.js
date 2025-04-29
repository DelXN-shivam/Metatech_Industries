import React from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import OurServicesSection from "./components/OurServicesSection";
import WhatSetsSection from "./components/WhatSetsSection";
import Footer from "./components/Footer";
import QueryAndMap from "./components/QueryAndMap";

const Home = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* <CompanyHeader /> */}
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
      <QueryAndMap />

      {/* About Us Section + Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
