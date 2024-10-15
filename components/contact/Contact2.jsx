"use client";

import React from "react";
import Link from "next/link";
export default function Contact2() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Contact Us 2</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Contact Us 2</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* Contact Form */}
      <div className="section-full content-inner contact-page-8 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 m-b30">
                  <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm text-primary">
                          <i className="ti-location-pin" />
                        </span>
                        Company Address
                      </h5>
                      <p>
                        007 Dummy Ashoka Apartment, Gautam Marg, Rani Sati
                        Nagar,Jaipur / India
                      </p>
                      <h6 className="m-b15 text-black font-weight-400">
                        <i className="ti-alarm-clock" /> Office Hours
                      </h6>
                      <p className="m-b0">Mon To Sat - 10.00 - 07.00</p>
                      <p>Sunday - Close</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 m-b30">
                  <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm text-primary">
                          <i className="ti-email" />
                        </span>
                        E-mail
                      </h5>
                      <p className="m-b0">
                        <a href="mailto:someone@example.com">
                          info@example.com
                        </a>
                      </p>
                      <p className="m-b0">
                        <a href="mailto:someone@example.com">hr@example.com</a>
                      </p>
                      <p className="m-b0">
                        <a href="mailto:someone@example.com">
                          support@example.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 m-b30">
                  <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm text-primary">
                          <i className="ti-mobile" />
                        </span>
                        Phone Numbers
                      </h5>
                      <p className="m-b0">
                        <a href="tel:+4733378901">+00 234 678 9012</a>
                      </p>
                      <p className="m-b0">
                        <a href="tel:+4733378901">+00 1234 5678 90</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 m-b30">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="inquiry-form wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h3 className="title-box font-weight-300 m-t0 m-b10">
                  Let's Convert Your Idea into Reality
                  <span className="bg-primary" />
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
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
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-mobile text-primary" />
                        </span>
                        <input
                          name="dzOther[Phone]"
                          type="number"
                          required
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
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
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-check-box text-primary" />
                        </span>
                        <input
                          name="dzOther[Subject]"
                          type="file"
                          required
                          className="form-control"
                          placeholder="Upload File"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-file text-primary" />
                        </span>
                        <input
                          name="dzOther[Subject]"
                          type="file"
                          required
                          className="form-control"
                          placeholder="Upload File"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
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
                  <div className="col-lg-12 col-md-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="site-button button-md"
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
      {/* Con
       */}
    </>
  );
}