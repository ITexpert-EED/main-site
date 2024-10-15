import React from "react";
import Link from "next/link";
export default function Banner2() {
  return (
    <div
      className="dlab-bnr-inr overlay-black-middle bg-pt"
      style={{ backgroundImage: "url(/images/banner/bnr3.jpg)" }}
    >
      <div className="container">
        <div className="dlab-bnr-inr-entry">
          <h1 className="text-white">Services 2</h1>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>Services 2</li>
            </ul>
          </div>
          {/* Breadcrumb row END */}
        </div>
      </div>
    </div>
  );
}
