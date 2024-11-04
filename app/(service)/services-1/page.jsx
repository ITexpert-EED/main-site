import Testimonials from "@/components/common/Testimonials2";
import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import About from "@/components/service/About";
import Banner from "@/components/service/Banner";
import Contact from "@/components/service/Contact";
import Facts from "@/components/service/Facts";
import React from "react";

export const metadata = {
  title: "Services 1 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Banner />
          <div className="content-block">
            <About />
            <Facts />
            <div className="section-full content-inner mb-4">
              <Testimonials />
            </div>
            <Contact />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
