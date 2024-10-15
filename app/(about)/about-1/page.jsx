import About from "@/components/about/About";
import Banner from "@/components/about/Banner";
import Facts from "@/components/common/Facts";
import Pricing from "@/components/about/Pricing";
import Testimonials from "@/components/common/Testimonials2";
import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import Team from "@/components/homes/home-1/Team";
import React from "react";

export const metadata = {
  title: "About 1 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
     
        <Header1 />
        <div className="page-content bg-white">
          <Banner />
         
          <About />
          <Facts />
          <Team />
          <Pricing />
          <Testimonials />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
