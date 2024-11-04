"use client";

import { footerLinks2, socialLinks } from "@/data/footerLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer20() {
  return (
    <footer className="site-footer footer-overlay bg-img-fix bgpt1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center m-b30">
              <h4 className="text-white font-weight-300">
                A SHORT STORY ABOUT US
              </h4>
              <p className="max-w600 p-b20 m-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the industry's standard dummy text ever since
                the been when an unknown printer.
              </p>
              <div className="max-w500 m-auto m-t30 subscribe-form form-white">
                <form
                  className="dzSubscribe"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="dzSubscribeMsg" />
                  <div className="input-group">
                    <input
                      name="dzEmail"
                      required="required"
                      className="form-control"
                      placeholder="Your Email Id"
                      type="email"
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
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom part */}
      <div className="footer-bottom text-center">
        <div className="container p-tb10">
          <div className="row">
            <div className="col-md-12 col-sm-12 m-b30 logo-white">
              <img
                alt=""
                width={100}
                src="/images/logo-white.png"
                height="75"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="widget-link">
                <ul>
                  {footerLinks2.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 m-t20">
              <ul className="list-inline">
                {socialLinks.slice(0, 4).map((elm, i) => (
                  <React.Fragment key={i}>
                    <li>
                      <a
                        href="#"
                        className={`site-button-link ${elm.className} hover`}
                      >
                        <i className={elm.iconClass} />
                      </a>
                    </li>{" "}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
