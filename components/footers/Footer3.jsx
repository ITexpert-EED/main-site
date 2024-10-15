"use client";

import React from "react";
import Link from "next/link";
import { footerLinks, socialLinks } from "@/data/footerLinks";
export default function Footer3() {
  return (
    <footer className="site-footer footer-gray-1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="widget border-0">
                <h6 className="m-b20 text-white font-weight-300 text-uppercase">
                  Quick Links
                </h6>
                <ul className="list-2">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="widget">
                <h6 className="text-white font-weight-300 text-uppercase">
                  Newsletter
                </h6>
                <div className="subscribe-form form-white m-b20 m-t15">
                  <form
                    className="dzSubscribe"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="dzSubscribeMsg" />
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        className="form-control radius-no"
                        placeholder="Your Email Id"
                        type="email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button radius-no btnhover14"
                        >
                          SEND
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <h6 className="m-b10 text-white font-weight-300 text-uppercase">
                  Connect with us
                </h6>
                <ul className="list-inline m-a0">
                  {socialLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <li>
                        <a
                          href={link.href}
                          className={`site-button sharp ${link.className}`}
                        >
                          <i className={link.iconClass} />
                        </a>
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-12 col-sm-12 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="icon-bx-wraper bx-style-1 p-a30 m-b15 radius-sm br-col-w1 bg-tpw1">
                <h5 className="text-white font-weight-300">
                  Serving in 70+ countries for web, software and mobile app
                  development
                </h5>
                <p>
                  United States (USA), United Kingdom (UK), Singapore, Kenya,
                  South Africa Germany, Canada, Australia, Netherlands, Norway,
                  United Arab Emirates (UAE) , Finland etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom part */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-left">
              <span>
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <a href="https://dexignzone.com/" target="_blank">
                  DexignZone
                </a>{" "}
                . all rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-right">
              <div className="widget-link">
                <ul>
                  <li>
                    <Link href={`/help-desk`}> Help Desk</Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`}> Refund Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
