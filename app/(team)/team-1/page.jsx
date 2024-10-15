import ClientSlider from "@/components/common/ClientSlider";
import Link from "next/link";
import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import Team1 from "@/components/team/Team1";
import React from "react";

export const metadata = {
  title: "Team 1 || Industry - Factory & Industrial React Nextjs Template",
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
                <h1 className="text-white">Team</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Team</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Team1 />
            <div className="section-full content-inner bg-gray">
              <div className="container overflow-hidden">
                <ClientSlider />
              </div>
            </div>
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
