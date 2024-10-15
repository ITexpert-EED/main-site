import React from "react";
import Link from "next/link";
export default function Banner3() {
  return (
    <div
      className="dlab-bnr-inr overlay-black-middle bg-pt"
      style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
    >
      <div className="container">
        <div className="dlab-bnr-inr-entry">
          <h1 className="text-white">Service Details</h1>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>Service</li>
              <li>Service Details</li>
            </ul>
          </div>
          {/* Breadcrumb row END */}
        </div>
      </div>
    </div>
  );
}
