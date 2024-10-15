import { facts2 } from "@/data/facts";
import React from "react";
import Counter from "../common/Counter";

export default function Facts() {
  return (
    <div
      className="section-full overlay-black-dark bg-img-fix text-white content-inner"
      style={{ backgroundImage: "url(/images/background/bg4.jpg)" }}
    >
      <div className="container">
        <div className="section-content">
          <div className="row sp20">
            {facts2.map((elm, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div className="icon-bx-wraper center counter-style-5">
                  <div className="icon-xl m-b20">
                    <span className="icon-cell">
                      <i className={elm.iconClass} />
                    </span>
                  </div>
                  <div className="icon-content">
                    <div className="dlab-separator bg-primary" />
                    <h2 className="dlab-tilte counter">
                      <Counter max={elm.number} />
                    </h2>
                    <p>{elm.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
