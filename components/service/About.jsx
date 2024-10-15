"use client";

import { services5 } from "@/data/services";
import React from "react";

export default function About() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="section-head text-black">
              <h4 className="text-gray-dark font-weight-300 m-b10">
                Expertise
              </h4>
              <h2 className="title">
                Completely customizable high-quality robust websites
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="section-content row">
              {services5.map((service, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-md-6 service-box style3"
                  data-wow-duration="2s"
                  data-wow-delay={service.delay}
                >
                  <div className="icon-bx-wraper" data-name={service.name}>
                    <div className="icon-lg">
                      <a href="#" className="icon-cell">
                        <i className={service.icon} />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h2 className="dlab-title">{service.title}</h2>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="sticky-top m-b30">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="inquiry-form inner"
              >
                <h3 className="title m-t0 m-b10">
                  Let's Convert Your Idea into Reality
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-user text-primary" />
                        </span>
                        <input
                          name="dzName"
                          type="text"
                          required
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-mobile text-primary" />
                        </span>
                        <input
                          name="dzOther[Phone]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-email text-primary" />
                        </span>
                        <input
                          name="dzEmail"
                          type="email"
                          className="form-control"
                          required
                          placeholder="Your Email Id"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-check-box text-primary" />
                        </span>
                        <input
                          name="dzOther[Subject]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Upload File"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-file text-primary" />
                        </span>
                        <input
                          name="dzOther[Subject]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Upload File"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-agenda text-primary" />
                        </span>
                        <textarea
                          name="dzMessage"
                          rows={4}
                          className="form-control"
                          required
                          placeholder="Tell us about your project or idea"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="site-button btn-block"
                    >
                      <span>Get A Free Quote!</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
