"use client";

import { footerLinks2, socialLinks } from "@/data/footerLinks";
import Link from "next/link";
import React from "react";

export default function Footer23() {
  return (
    <footer className="site-footer">
      <div
        className="footer-top overlay-black-dark"
        style={{ backgroundImage: "url(/images/background/bg17.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xl-5 col-lg-4 col-sm-8 footer-col-4">
              <div className="widget">
                <h5 className="m-b30 text-white">
                  Subscribe To Our Newsletter
                </h5>
                <p className="text-capitalize m-b20">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry has been the industry's standard dummy
                  text ever since the..
                </p>
                <div className="subscribe-form form-white m-b20">
                  <form
                    className="dzSubscribe"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="dzSubscribeMsg" />
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button radius-xl"
                        >
                          Subscribe
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <ul className="list-inline m-a0">
                  {socialLinks.slice(0, 4).map((elm, i) => (
                    <React.Fragment key={i}>
                      <li>
                        <a
                          href="#"
                          className={`site-button ${elm.className} circle`}
                        >
                          <i className={elm.iconClass} />
                        </a>
                      </li>{" "}
                    </React.Fragment>
                  ))}{" "}
                  <li>
                    <a href="#" className="site-button twitter circle">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-5 col-xl-2 col-lg-2 col-sm-4 footer-col-4">
              <div className="widget widget_services border-0">
                <h5 className="m-b30 text-white">Company</h5>
                <ul>
                  {footerLinks2.slice(0, 5).map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-7 col-xl-2 col-lg-3 col-sm-6 footer-col-4">
              <div className="widget widget_services border-0">
                <h5 className="m-b30 text-white">Useful Link</h5>
                <ul>
                  {footerLinks2.slice(5, 10).map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 col-lg-3 col-sm-6 footer-col-4">
              <div className="widget widget_getintuch">
                <h5 className="m-b30 text-white">Contact us</h5>
                <ul>
                  <li>
                    <i className="ti-location-pin" />
                    <strong>address</strong> demo address #8901 Marmora Road Chi
                    Minh City, Vietnam
                  </li>
                  <li>
                    <i className="ti-mobile" />
                    <strong>phone</strong>
                    <a href="tel:+4733378901">0800-123456 </a> (24/7 Support
                    Line)
                  </li>
                  <li>
                    <i className="ti-email" />
                    <strong>email</strong>
                    <a href="mailto:someone@example.com">info@example.com</a>
                  </li>
                </ul>
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
                    <Link href="/about-2"> About</Link>
                  </li>
                  <li>
                    <Link href="/help-desk"> Help Desk</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy"> Privacy Policy</Link>
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
