import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Cta() {
  return (
    <div
      className="section-full bg-img-fix content-inner-2 overlay-black-dark contact-action style2"
      style={{ backgroundImage: "url(/images/background/bg2.jpg)" }}
    >
      <div className="container">
        <div className="row relative">
          <div
            className="col-md-12 col-lg-8 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="contact-no-area">
              <h2 className="title">
                A company involved in service, maintenance
              </h2>
              <div className="contact-no">
                <div className="contact-left">
                  <h3 className="no">
                    <i className="sl-call-in" />
                 +91 971-137-7735
                  </h3>
                </div>
                <div className="contact-right">
                  <Link
                    href={`/contact-4`}
                    className="site-button appointment-btn btnhover13"
                  >
                    Get Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 col-lg-4 contact-img-bx wow fadeInRight relative"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <Image alt="" src="/images/pic1.png" width="500" height="542" />
          </div>
        </div>
      </div>
    </div>
  );
}
