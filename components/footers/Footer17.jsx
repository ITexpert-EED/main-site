import { socialLinks } from "@/data/footerLinks";
import React from "react";

export default function Footer17() {
  return (
    <footer className="site-footer">
      <div
        className="p-tb60 text-center bg-black-1"
        style={{
          backgroundImage: "url(/images/background/bg2.png)",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="font-weight-300">LET'S CONNECT</h3>
              <div className="dlab-separator bg-white" />
              <p className="max-w600 m-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
              <ul className="list-inline m-t20">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
