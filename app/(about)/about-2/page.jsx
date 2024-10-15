import About2 from "@/components/about/About2";
import Banner from "@/components/about/Banner";
import Progress from "@/components/about/Progress";

import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import Services from "@/components/homes/home-1/Services";
import About from "@/components/homes/home-3/About";
import React from "react";

export const metadata = {
  title: "About 2 || Industry - Factory & Industrial React Nextjs Template",
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
          <About2 />
          <Services />
          <Progress />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
