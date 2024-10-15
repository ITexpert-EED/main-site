import Footer15 from "@/components/footers/Footer15";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import Team from "@/components/homes/home-1/Team";
import Facts from "@/components/team/Facts";
import Team2 from "@/components/team/Team2";
import React from "react";

export const metadata = {
  title: "Team 2 || Industry - Factory & Industrial React Nextjs Template",
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
            style={{ backgroundImage: "url(/images/banner/bnr3.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Team 2</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Team 2</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Team />
            <Facts />
            <Team2 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
