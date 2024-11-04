"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/data/footerLinks";
export default function Footer16() {
  return (
    <footer className="site-footer style1">
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
                <img
                  alt=""
                  src="/images/logo-light.png"
                  width="258"
                  height="75"
                />
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
