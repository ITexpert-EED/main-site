"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
export default function Faq1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="section-full overlay-white-middle content-inner">
        <div className="container">
          <div className="section-head text-black text-center">
            <h3 className="title">Do you have Questions?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since
              the been when an unknown printer.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 m-b30">
              <div className="faq-video">
                <a
                  className="play-btn popup-youtube"
                  onClick={() => setOpen(true)}
                >
                  <i className="flaticon-play-button text-white" />
                </a>
                <Image
                  alt=""
                  className="img-cover radius-sm"
                  src="/images/about/pic5.jpg"
                  width="1000"
                  height="674"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 m-b30">
              <div
                className="dlab-accordion faq-1 box-sort-in m-b30"
                id="accordion1"
              >
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        className="collapsed"
                        aria-expanded="true"
                      >
                        1. Web design aorem apsum dolor sit amet?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq1"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      Web design aorem apsum dolor sit amet, adipiscing elit,
                      sed diam nibh euismod tincidunt ut laoreet dolore magna
                      aliquam erat volutpat.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        2. Graphic design aorem apsum dolor ?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq2"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      Graphic design aorem apsum dolor sit amet, adipiscing
                      elit, sed diam nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        3. Developement aorem apsum dolor sit amet ?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq3"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      Developement aorem apsum dolor sit amet, adipiscing elit,
                      sed diam nibh euismod tincidunt ut laoreet dolore magna
                      aliquam erat volutpat.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        4. True Responsiveness consectetuer adipiscing ?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq4"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      Developement aorem apsum dolor sit amet, adipiscing elit,
                      sed diam nibh euismod tincidunt ut laoreet dolore magna
                      aliquam erat volutpat.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        5. Claritas est etiam processus ?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq5"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      Developement aorem apsum dolor sit amet, adipiscing elit,
                      sed diam nibh euismod tincidunt ut laoreet dolore magna
                      aliquam erat volutpat.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Faq Info */}
          <div className="row">
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                <div className="icon-md text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-factory" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">Make it Simple</h5>
                  <p>
                    Web design aorem apsum dolor dolore magna aliquam erat
                    volutpat.Claritas est etiam processus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                <div className="icon-md text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-worker" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">Unique design</h5>
                  <p>
                    Web design aorem apsum dolor dolore magna aliquam erat
                    volutpat.Claritas est etiam processus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 m-b30">
              <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                <div className="icon-md text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-settings" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">True Responsiveness</h5>
                  <p>
                    Web design aorem apsum dolor dolore magna aliquam erat
                    volutpat.Claritas est etiam processus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Faq Info END */}
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
