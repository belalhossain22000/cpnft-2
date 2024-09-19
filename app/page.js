import React from "react";
import Hero from "./components/Hero/Hero";
import ToplistSlider from "./components/ToplistSlider/ToplistSlider";
import CreateSellNft from "./components/CreateSellNft/CreateSellNft";
import TrendingCategories from "./components/TrendingCategories/TrendingCategories";
import CustomerSay from "./components/CustomerSay/CustomerSay";


const page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ToplistSlider />
      <CreateSellNft />
      <TrendingCategories />
      <CustomerSay />
    </main>
  );
};

export default page;
