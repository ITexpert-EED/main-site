"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import ReCAPTCHA from "react-google-recaptcha";
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="countdown text-center">
        <div className="date">
          <span className="time days text-primary">
            {days.toString().padStart(2, "0")}
          </span>
          <span>Days</span>
        </div>
        <div className="date">
          <span className="time hours text-primary">
            {hours.toString().padStart(2, "0")}
          </span>
          <span>Hours</span>
        </div>
        <div className="date">
          <span className="time mins text-primary">
            {minutes.toString().padStart(2, "0")}
          </span>
          <span>Minutess</span>
        </div>
        <div className="date">
          <span className="time secs text-primary">
            {seconds.toString().padStart(2, "0")}
          </span>
          <span>Second</span>
        </div>
      </div>
    );
  }
};
export default function CommingSoon() {
  const [isReadmoreOpen, setIsReadmoreOpen] = useState(false);
  const [showCountdown, setshowCountdown] = useState(false);
  useEffect(() => {
    setshowCountdown(true);
  }, []);
  return (
    <>
      <div className="style-1 sticky-header">
        {/* Side Nav */}
        <div
          id="mySidenav1"
          className="sidenav coming-side-bar content cs-sidenav"
          style={isReadmoreOpen ? { right: "0px" } : { right: "-820px" }}
        >
          <a
            onClick={() => setIsReadmoreOpen(false)}
            className="closebtn bg-primary closebtn"
          >
            ×
          </a>
          <div className="clearfix" />
          <div className="coming-contact">
            <div className="p-t50">
              <div className="section-head text-center">
                <h2 className="title">About Us</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                <div className="dlab-box">
                  <div className="dlab-media dlab-img-effect off-color">
                    <Image
                      alt=""
                      src="/images/gallery/pic1.jpg"
                      width="480"
                      height="430"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                <div className="dlab-box">
                  <div className="dlab-media dlab-img-effect off-color">
                    <Image
                      alt=""
                      src="/images/gallery/pic2.jpg"
                      width="480"
                      height="430"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                <div className="dlab-box">
                  <div className="dlab-media dlab-img-effect off-color">
                    <Image
                      alt=""
                      src="/images/gallery/pic3.jpg"
                      width="480"
                      height="430"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                <div className="dlab-box">
                  <div className="dlab-media dlab-img-effect off-color">
                    <Image
                      alt=""
                      src="/images/gallery/pic4.jpg"
                      width="480"
                      height="430"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                <div className="dlab-box">
                  <div className="dlab-media dlab-img-effect off-color">
                    <Image
                      alt=""
                      src="/images/gallery/pic5.jpg"
                      width="480"
                      height="430"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 p-a0">
                <div className="dlab-box">
                  <div className="dlab-media dlab-img-effect off-color">
                    <Image
                      alt=""
                      src="/images/gallery/pic6.jpg"
                      width="480"
                      height="430"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-inner p-lr15">
              <div className="section-head text-center">
                <h2 className="title">Contact Us</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
              </div>
              <div>
                <div className="dzFormMsg" />
                <form onSubmit={(e) => e.preventDefault()} className="dzForm">
                  <input type="hidden" defaultValue="Contact" name="dzToDo" />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            name="dzName"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            name="dzEmail"
                            type="email"
                            className="form-control"
                            placeholder="Your Email Address"
                            required
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
                            placeholder="Your Message"
                            required
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
                    <div className="col-lg-12 text-center">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="site-button"
                      >
                        <span>Submit</span>
                      </button>
                      <button
                        name="Resat"
                        type="reset"
                        value="Reset"
                        className="site-button m-l15"
                      >
                        <span>Reset</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Side Nav End*/}
        {/* Coming Soon */}
        <div
          className="dlab-coming-soon bg-img-fix dlab-coming-soon-full overlay-black-light"
          style={{ backgroundImage: "url(images/background/bg8.jpg)" }}
        >
          <div className="container dlab-coming-bx">
            <div className="top-head text-center logo-header">
              <Link href="/">
                <img
                  alt=""
                  src="/images/logo-white.png"
                  width="258"
                  height="75"
                />
              </Link>
            </div>
            <div className="coming-soon-content text-center text-white m-b30">
              <h2>Coming Soon</h2>
            </div>

            {showCountdown && (
              <Countdown
                date={
                  new Date(
                    Date.now() +
                      Math.floor(Math.random() * 99) * 24 * 60 * 60 * 1000
                  )
                }
                renderer={renderer}
              />
            )}

            <div className="text-center m-t50 info-style-1">
              <a
                onClick={() => setIsReadmoreOpen(true)}
                className="site-button radius-xl m-lr5 openbtn"
              >
                Read More
              </a>
              <a
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                className="site-button radius-xl outline white m-lr5"
              >
                Subscribe
              </a>
            </div>
            <div className="social-icon">
              <ul className="dlab-social-icon">
                <li>
                  <a className="fab fa-facebook-f" />
                </li>{" "}
                <li>
                  <a className="fab fa-twitter" />
                </li>{" "}
                <li>
                  <a className="fab fa-linkedin-in" />
                </li>{" "}
                <li>
                  <a className="fab fa-google-plus-g" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Coming Soon End */}
      </div>
      <div
        className="modal fade contact-form"
        id="myModal"
        area-modal="true"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={(e) => e.preventDefault()} className="p-b20">
                <div className="row">
                  <button
                    name="Resat"
                    type="reset"
                    value="Reset"
                    data-bs-dismiss="modal"
                    className="close-btn"
                  >
                    ×
                  </button>
                  <div className="col-lg-12 text-center text-white">
                    <h2 className="text-white">Stay Informed</h2>
                    <p>
                      Lorem ipsum dolor sit amet, repellat quos ipsum corrupti
                      expedita sequi reprehenderit pariatur.
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <div className="m-b15">
                      <input
                        id="contact_name"
                        placeholder="Your Name"
                        name="name"
                        type="text"
                        required
                        className="form-control radius-xl"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="site-button radius-xl outline btn-block"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
}
