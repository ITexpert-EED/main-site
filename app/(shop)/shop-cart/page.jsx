import Link from "next/link";
import Footer16 from "@/components/footers/Footer16";
import Header1 from "@/components/headers/Header1";
import ShopCart from "@/components/shop/ShopCart";
import ShopFeatures from "@/components/shop/ShopFeatures";
import React from "react";
import Header22 from "@/components/headers/Header22";

export const metadata = {
  title: "Shop Cart || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Shop Cart</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Shop Cart</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <ShopCart />

          <ShopFeatures />
        </div>
        <Footer16 />
      </div>
    </>
  );
}
