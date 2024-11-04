import React from "react";
import Link from "next/link";

import { footerLinks2, socialLinks } from "@/data/footerLinks";
import Gallery from "./Gallery";
export default function Footer11() {
  return (
    <footer className="site-footer text-uppercase bg-white">
      {/* Social icon */}
      <div
        className="social-curve wow fadeInLeft"
        data-wow-duration="2s"
        data-wow-delay="0.3s"
      >
        <div className="container">
          <ul className="social-icon list-inline m-b0">
            <li>
              <span className="title">Follow Us</span>
            </li>

            {socialLinks.map((link, index) => (
              <React.Fragment key={index}>
                <li>
                  <a
                    href={link.href}
                    className={`site-button-link  hover ${link.className}`}
                  >
                    <i className={link.iconClass} />
                  </a>
                </li>{" "}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      {/* Social icon End */}
      <div
        className="footer-top"
        style={{
          backgroundImage: "url(/images/background/bg2.png)",
          backgroundSize: "contain",
        }}
      >
        <div className="container saf-footer">
          <div className="row">
            <div className="col-md-6 col-lg-3 col-sm-6 footer-col-4">
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
            <div className="col-md-6 col-lg-3 col-sm-6 col-5 footer-col-4">
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
            <div className="col-md-6 col-lg-3 col-sm-6 col-7 footer-col-4">
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
            <div className="col-md-6 col-lg-3 col-sm-6 footer-col-4">
              <div className="widget widget_gallery gallery-grid-4">
                <h5 className="m-b30 text-white">Gallery</h5>
                <Gallery />
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
                    <Link href={`/privacy-policy`}> Privacy Policy</Link>
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
