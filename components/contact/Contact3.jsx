"use client";

import React from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
export default function Contact3() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Contact Us 3</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Contact Us 3</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* contact area */}
      <div className="section-full content-inner bg-white contact-style-1">
        <div className="container">
          <div className="row">
            {/* right part start */}
            <div className="col-lg-4 col-md-6 d-flex m-b30">
              <div className="p-a30 border contact-area border-1 align-self-stretch radius-sm">
                <h3 className="m-b5">Quick Contact</h3>
                <p>
                  If you have any questions simply use the following contact
                  details.
                </p>
                <ul className="no-margin">
                  <li className="icon-bx-wraper left m-b30">
                    <div className="icon-bx-xs border-1">
                      <a href="#" className="icon-cell">
                        <i className="ti-location-pin" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dlab-tilte">
                        Address:
                      </h6>
                      <p>123 West Street, Melbourne Victoria 3000 Australia</p>
                    </div>
                  </li>
                  <li className="icon-bx-wraper left m-b30">
                    <div className="icon-bx-xs border-1">
                      <a href="#" className="icon-cell">
                        <i className="ti-email" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dlab-tilte">
                        Email:
                      </h6>
                      <p>
                        <a href="mailto:someone@example.com">
                          info@example.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="icon-bx-wraper left">
                    <div className="icon-bx-xs border-1">
                      <a href="#" className="icon-cell">
                        <i className="ti-mobile" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
                      <p>
                        <a href="tel:+4733378901">+00 1234 5678 90</a>
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="m-t20">
                  <ul className="dlab-social-icon border dlab-social-icon-lg">
                    <li>
                      <a href="#" className="fab fa-facebook-f bg-primary" />
                    </li>{" "}
                    <li>
                      <a href="#" className="fab fa-twitter bg-primary" />
                    </li>{" "}
                    <li>
                      <a href="#" className="fab fa-linkedin-in bg-primary" />
                    </li>{" "}
                    <li>
                      <a href="#" className="fab fa-pinterest-p bg-primary" />
                    </li>{" "}
                    <li>
                      <a href="#" className="fab fa-google-plus-g bg-primary" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* right part END */}
            {/* Left part start */}
            <div className="col-lg-4 col-md-6 mb-4 m-b30 mb-md-0">
              <div className="p-a30 bg-gray clearfix radius-sm">
                <h3 className="m-b10">Send Message Us</h3>
                <div className="dzFormMsg" />
                <form onSubmit={(e) => e.preventDefault()} className="dzForm">
                  <input type="hidden" defaultValue="Contact" name="dzToDo" />
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            name="dzName"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
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
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <textarea
                            name="dzMessage"
                            rows={4}
                            className="form-control"
                            required
                            placeholder="Your Message..."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <ReCAPTCHA
                            sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                            onChange={(onChange) => {}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="site-button"
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Left part END */}
            <div className="col-lg-4 d-flex m-b30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219"
                className="align-self-stretch radius-sm"
                style={{ border: 0, width: "100%", minHeight: "100%" }}
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
