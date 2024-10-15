import Footer15 from "@/components/footers/Footer15";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Error 405 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <div className="section-full dz_error-405 content-inner bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 text-center m-tb30">
                  <div className="dz_error">405</div>
                </div>
                <div className="col-lg-7 m-b30">
                  <h2 className="error-head">Server Error!</h2>
                  <div className="dlab-divider bg-gray-dark" />
                  <p className="font-16 error-content">
                    You can go back to the Main Page by clicking the button.
                  </p>
                  <Link href={`/`} className="site-button">
                    Go To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
