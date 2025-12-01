import React from "react";
import Hero from "../sections/Hero";
import NutritionSolutions from "../sections/NutritionSolutions";
import BestSellers from "../sections/BestSellers";
import BrandTrust from "../sections/BrandTrust";
import SmartHealth from "../sections/SmartHealth";
import CharityAndTestimonials from "../sections/CharityAndTestimonials";
import SupportStrip from "../sections/SupportStrip";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="flex-1 bg-white">
      <Hero />
      <NutritionSolutions />
      <BestSellers />
      <BrandTrust />
      <SmartHealth />
      <CharityAndTestimonials />
      <SupportStrip />
      <Footer />
    </main>
  );
};

export default Home;
