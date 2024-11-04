"use client";

import React from "react";
import Link from "next/link";
import { footerLinks2 } from "@/data/footerLinks";
export default function Footer14() {
  return (
    <footer className="site-footer event-footer">
      <div className="footer-top pb-0 bg-primary">
        <div className="container">
          <div className="ev-subscribe">
            <h5 className="evft-subtitle">SUBSCRIBE TO NEWSLETTER</h5>
            <h2 className="evft-title">Want Something Extra?</h2>
            <form className="dzSubscribe" onSubmit={(e) => e.preventDefault()}>
              <div className="dzSubscribeMsg" />
              <div className="form-group">
                <div className="input-group">
                  <input
                    name="dzEmail"
                    required="required"
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                  />
                  <div className="input-group-addon">
                    <button
                      name="submit"
                      value="Submit"
                      type="submit"
                      className="site-button-secondry btnhover20"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <ul className="evft-link">
              {footerLinks2.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="ft-event-social mb-0">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>{" "}
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>{" "}
              <li>
                <a href="#">
                  <i className="fab fa-twitter-square" />
                </a>
              </li>{" "}
              <li>
                <a href="#">
                  <i className="fab fa-pinterest-square" />
                </a>
              </li>{" "}
              <li>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>{" "}
              <li>
                <a href="#">
                  <i className="fab fa-skype" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer bottom part */}
      <div className="footer-bottom bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-sm-start text-center">
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
            <div className="col-md-6 col-sm-6 text-sm-end text-center">
              <span>
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <a href="https://dexignzone.com/" target="_blank">
                  DexignZone
                </a>{" "}
                . all rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
