"use client";

import { services9 } from "@/data/services";
import React, { useRef } from "react";
import Link from "next/link";
export default function Features() {
  const parentRefs = useRef([]);

  const handleHover = (i) => {
    parentRefs.current.forEach((elm) => elm.classList.remove("active"));
    parentRefs.current[i].classList.add("active");
  };
  return (
    <div
      className="section-full content-inner bg-white scrollSpySection"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <div className="row">
              {services9.map((item, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-12 col-sm-6 wow ${item.animation}`}
                  data-wow-duration="2s"
                  data-wow-delay={item.delay}
                >
                  <div
                    ref={(el) => (parentRefs.current[index] = el)}
                    onMouseOver={() => handleHover(index)}
                    className="dlab-box-bg m-b30 box-hover style3"
                    style={{ backgroundImage: `url(${item.imgSrc})` }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b20">
                        <span className="icon-cell icon-md">
                          <i className={item.iconClass} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte">{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <Link
                        href={`/services-details/${item.title}`}
                        className="site-button btn-block"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 m-b30 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="request-form dezPlaceAni">
              <div className="request-form-header">
                <i className="flaticon-message" />
                <p>Don’t Hesitate To Ask</p>
                <h2>Request A Quote</h2>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <div className="input-group">
                    <label>Your Name</label>
                    <input
                      name="dzName"
                      type="text"
                      required
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <label>Email</label>
                    <input
                      name="dzName"
                      type="text"
                      required
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <label>Phone</label>
                    <input
                      name="dzName"
                      type="text"
                      required
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <label>Quote Details</label>
                    <textarea className="form-control" defaultValue={""} />
                  </div>
                </div>
                <div className="form-group">
                  <button className="site-button btnhover19 button-md btn-block">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
