import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import Service from "@/components/homes/home-2/Service";

import Banner2 from "@/components/service/Banner2";
import Cta from "@/components/service/Cta";

import React from "react";

export const metadata = {
  title: "Services 2 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Banner2 />
          <div className="content-block">
            <Cta />
            <Service />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
