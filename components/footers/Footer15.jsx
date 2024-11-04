"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialLinks } from "@/data/footerLinks";
export default function Footer15() {
  return (
    <footer className="site-footer style1">
      {/* Footer Info */}
      <div className="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
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
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
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
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
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
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
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
      {/* Footer Info End */}
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="widget widget_about">
                <h4 className="footer-title">About Industry</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
                <Link href={`/about-2`} className="readmore">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="widget">
                <h4 className="footer-title">Usefull Link</h4>
                <ul className="list-2">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="widget widget_subscribe">
                <h4 className="footer-title">Usefull Link</h4>
                <p>
                  If you have any questions. Subscribe to our newsletter to get
                  our latest products.
                </p>
                <form
                  className="dzSubscribe"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="dzSubscribeMsg" />
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      <div className="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button far fa-paper-plane"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Top End */}
      {/* Footer Bottom */}
      <div className="footer-bottom footer-line">
        <div className="container">
          <div className="footer-bottom-in">
            <div className="footer-bottom-logo">
              <Link href={`/`}>
                <img alt="" src="/images/logo-light.png" />
              </Link>
            </div>
            <div className="footer-bottom-social">
              <ul className="dlab-social-icon dez-border">
                {socialLinks.slice(0, 4).map((link, index) => (
                  <React.Fragment key={index}>
                    <li>
                      <a href={link.href} className={link.iconClass}></a>
                    </li>{" "}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom End */}
    </footer>
  );
}
