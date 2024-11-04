import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Error 404 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <div
          className="dlab-bnr-inr full-height overlay-black-dark"
          style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="row max-w700 dlab-bnr-inr-entry dz_error-404-area align-m dz_error-404 text-white m-auto">
              <div className="col-lg-4 col-md-4 m-tb30">
                <div className="bg-primary dz_error">404</div>
              </div>
              <div className="col-lg-8 col-md-8 m-b30 text-left">
                <h2 className="error-head">Something went wrong !</h2>
                <p className="font-16">
                  We are sorry but it appears that the page you are looking for
                  could not be found. We are working on it and we will get it
                  fixed as soon as possible.
                </p>
                <p className="font-16">
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
    </>
  );
}
