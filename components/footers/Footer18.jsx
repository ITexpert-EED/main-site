import { socialLinks } from "@/data/footerLinks";
import Image from "next/image";
import React from "react";

export default function Footer18() {
  return (
    <footer className="site-footer footer-full">
      <div className="p-tb60 bg-primary">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 text-center text-md-start footer-logo">
              <img
                alt=""
                width={140}
                src="/images/logo-light.png"
                height="75"
              />
            </div>
            <div className="col-md-4 text-center">
              <ul className="list-inline m-a0">
                {socialLinks.slice(0, 4).map((elm, i) => (
                  <React.Fragment key={i}>
                    <li>
                      <a className="site-button white outline circle">
                        <i className={elm.iconClass} />
                      </a>
                    </li>{" "}
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <p className="max-w600 m-auto m-t10 text-white">
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <a href="https://dexignzone.com/" target="_blank">
                  DexignZone
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
