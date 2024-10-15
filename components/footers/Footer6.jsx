"use client";

import React from "react";
import Link from "next/link";
import { footerLinks2, socialLinks } from "@/data/footerLinks";
export default function Footer6() {
  return (
    <footer className="site-footer">
      <div className="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                <div className="icon-content">
                  <h5 className="dlab-tilte">
                    <span className="icon-sm">
                      <i className="ti-location-pin" />
                    </span>
                    Company Address
                  </h5>
                  <p className="op7">
                    Demo address #8901 Marmora Road Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                <div className="icon-content">
                  <h5 className="dlab-tilte">
                    <span className="icon-sm">
                      <i className="ti-email" />
                    </span>
                    E-mail
                  </h5>
                  <p className="m-b0 op7">
                    <a href="mailto:someone@example.com">info@example.com</a>
                  </p>
                  <p className="op7">
                    <a href="mailto:someone@example.com">company@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInDown"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                <div className="icon-content">
                  <h5 className="dlab-tilte">
                    <span className="icon-sm">
                      <i className="ti-mobile" />
                    </span>
                    Phone Numbers
                  </h5>
                  <p className="m-b0 op7">
                    Mobile : <a href="tel:+4733378901">+00 234 678 9012</a>
                  </p>
                  <p className="op7">
                    Phone : <a href="tel:+4733378901">+0 1234 5678 90</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                <div className="icon-content">
                  <h5 className="dlab-tilte">
                    <span className="icon-sm">
                      <i className="ti-alarm-clock" />
                    </span>
                    Office Hours
                  </h5>
                  <p className="m-b0 op7">Mon To Sat - 08.00-18.00</p>
                  <p className="op7">Sunday - Close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  {footerLinks2.map((link, index) => (
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
                        placeholder="Your Email Address"
                        type="email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button btnhover15 radius-no"
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
              <div className="icon-bx-wraper bx-style-1 m-b15 p-a30 radius-sm br-col-w1 bg-tpw1">
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
            <div className="col-md-6 col-sm-6 text-left">
              <span>
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <a href="https://dexignzone.com/" target="_blank">
                  DexignZone
                </a>{" "}
                . all rights reserved.
              </span>
            </div>
            <div className="col-md-6 col-sm-6 text-right">
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
