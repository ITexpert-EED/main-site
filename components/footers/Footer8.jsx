import { socialLinks } from "@/data/footerLinks";
import React from "react";

export default function Footer8() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-5">
              <div className="widget widget_getintuch">
                <h4 className="footer-title">Registered Office Address:</h4>
                <ul className="info-contact">
                  <li>
                    <span>
                      <i className="fas fa-map-marker-alt" /> Demo address #8901
                      marmora road chi minh city, vietnam demo address #8901
                      marmora road chi minh city, vietnam
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="footer-title">Contact Info</h4>
                <ul className="ft-contact">
                  <li>
                    Telephone: <span>+00 123 456 7890</span>
                  </li>
                  <li>
                    Mobile: <span>+00 978 654 2310</span>
                  </li>
                  <li>
                    E Email: <a href="#">exemple@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4">
              <div className="widget">
                <h4 className="footer-title">Follow Us</h4>
                <ul className="ft-social">
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
          </div>
        </div>
      </div>
      {/* footer bottom part */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright © All rights reserved.
              <span className="current-year">2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
