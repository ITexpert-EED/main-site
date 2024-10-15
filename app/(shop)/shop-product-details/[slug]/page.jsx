import Link from "next/link";
import Footer16 from "@/components/footers/Footer16";
import Header1 from "@/components/headers/Header1";
import ShopDetails from "@/components/shop/ShopDetails";
import ShopFeatures from "@/components/shop/ShopFeatures";
import React from "react";
import { products } from "@/data/products";
import Header22 from "@/components/headers/Header22";

export const metadata = {
  title:
    "Shop Details || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const productsItem =
    products.filter((elm) => elm.title == slug)[0] || products[0];
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
                <h1 className="text-white">Shop Details</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Shop Details</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <ShopDetails productsItem={productsItem} />

          <ShopFeatures />
        </div>
        <Footer16 />
      </div>
    </>
  );
}
