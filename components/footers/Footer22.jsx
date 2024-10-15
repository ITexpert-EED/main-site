import { footerLinks2, socialLinks } from "@/data/footerLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer22() {
  return (
    <footer className="site-footer footer-full">
      <div className="p-tb60 bg-black-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-start text-center footer-logo logo-white">
              <img
                alt=""
                width={100}
                src="/images/logo-white.png"
                height="75"
              />
              <p className="m-b0 m-t10">
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <a href="https://dexignzone.com/" target="_blank">
                  DexignZone
                </a>
              </p>
            </div>
            <div className="col-md-6 text-md-end text-center">
              <div className="widget-link">
                <ul>
                  {footerLinks2.slice(0, 5).map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="list-inline m-b0 m-t10">
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
