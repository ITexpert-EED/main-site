import Footer15 from "@/components/footers/Footer15";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";

import Portfolio2 from "@/components/portfolio/Portfolio2";
import React from "react";

export const metadata = {
  title:
    "Portfolio Grid 3 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Portfolio Grid 3 Icon</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Portfolio Grid 3 Icon</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Portfolio2 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
