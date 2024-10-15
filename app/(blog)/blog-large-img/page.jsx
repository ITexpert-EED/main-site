import Blogs11 from "@/components/blogs/Blogs11";
import Link from "next/link";
import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title:
    "Blog Large Image || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          {" "}
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Blog Large Image</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Blog Large Image</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <div className="content-area">
            <Blogs11 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
