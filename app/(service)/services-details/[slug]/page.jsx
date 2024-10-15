import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import Banner3 from "@/components/service/Banner3";
import ServiceDetails from "@/components/service/ServiceDetails";
import { allServices } from "@/data/services";

import React from "react";

export const metadata = {
  title:
    "Services Details || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const serviceItem =
    allServices.filter((elm) => elm.title == slug)[0] || allServices[0];
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Banner3 />
          <div className="content-block">
            <ServiceDetails serviceItem={serviceItem} />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
