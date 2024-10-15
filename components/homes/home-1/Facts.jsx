"use client";

import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Facts() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="section-full text-white bg-img-fix content-inner overlay-black-dark counter-staus-box"
        style={{ backgroundImage: "url(/images/background/bg4.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head text-white">
                <a
                  onClick={() => setOpen(true)}
                  className="popup-youtube video play-btn"
                >
                  <span>
                    <i className="fas fa-play" />
                  </span>
                  Play Now
                </a>
                <h2 className="title">
                  We're thriving and building better products
                </h2>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="row sp20">
                {facts.map((item, index) => (
                  <div
                    key={index}
                    className="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay={item.delay}
                  >
                    <div className="icon-bx-wraper center counter-style-5">
                      <div className="icon-xl m-b20">
                        <span className="icon-cell">
                          <i className={item.icon} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <div className="dlab-separator bg-primary" />
                        <h2 className="dlab-tilte counter">
                          <Counter max={item.counter} />
                        </h2>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="dFq0d6s8Fgs"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
