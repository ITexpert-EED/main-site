"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
export default function ProjectGallery() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="section-full scrollSpySection" id="choose-us">
        <div className="row m-lr0">
          <div
            className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info style1 bg-secondry wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="align-self-center text-white">
              <div className="section-head text-white">
                <h2 className="title">Why choose us</h2>
                <p>
                  We’re continually working to change the way people think about
                  and engage with our products.
                </p>
              </div>
              <ul className="list-check white list-2 rounded border">
                <li>
                  <h4 className="m-b10">Customer Oriented</h4>
                  <p>
                    We prioritize your needs to create a building that fits
                    perfectly with your organization’s goals.
                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Prompt Response Guaranted</h4>
                  <p>
                    Our swift and reliable responses ensure your project runs
                    smoothly from start to finish.
                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Innovative Approach</h4>
                  <p>
                    "We bring creativity and innovation to deliver a building
                    that works seamlessly for your organization."
                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Datebase Management</h4>
                  <p>
                    Efficient data handling is key to ensuring your building
                    project is executed flawlessly.
                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Rectification First Policy</h4>
                  <p>
                    We focus on immediate correction, ensuring that any issues
                    are resolved promptly for a hassle-free experience.
                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Negligible Delivery</h4>
                  <p>
                    With attention to detail, we guarantee that your building
                    will be delivered without any errors.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-12 p-lr0 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="row spno">
              <div className="col-lg-6 col-md-6 col-sm-6 bg-primary align-items-center d-flex">
                <div className="dlab-services-box text-white">
                  <h2 className="service-year">
                    32<small>year</small>
                  </h2>
                  <h3 className="title m-b0">
                    We are Building the Future and Restoring.
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <Image
                  className="img-cover"
                  alt=""
                  src="/images/company pump.png"
                  width="500"
                  height="357"
                />
              </div>
              {/* <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="video-bx radius-no h100">
                  <Image
                    alt="Signature"
                    className="img-cover"
                    src="/images/our-work/car/pic4.jpg"
                    width="500"
                    height="357"
                  />
                  <div className="video-play-icon">
                    <a
                      onClick={() => setOpen(true)}
                      className="popup-youtube video bg-primary"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div> */}

<div className="col-lg-6 col-md-6 col-sm-6">
  <div className="video-bx radius-no h100">
    <video
      className="img-cover"
      width="500"
      height="357"
      autoPlay
      muted
      loop
     
      src="/video/laser cutter.mp4" // Replace with the correct video path
    >
      Your browser does not support the video tag.
    </video>
    {/* <div className="video-play-icon">
      <a
        onClick={() => setOpen(true)}
        className="popup-youtube video bg-primary"
      >
        <i className="fas fa-play" />
      </a>
    </div> */}
  </div>
</div>

              <div className="col-lg-6 col-md-6 col-sm-6 bg-secondry align-items-center d-flex">
                <div className="dlab-services-box text-white">
                  <h3 className="title text-white m-b15">
                    Renting Tips &amp; Articles
                  </h3>
                  <p>
                  With attention to detail, we guarantee that your building
                  will be delivered without any errors.
                  We focus on immediate correction, ensuring that any issues
                  are resolved promptly for a hassle-free experience.
                  We focus on immediate correction, ensuring that any issues
                  are resolved promptly for a hassle-free experience.
                  </p>
                  <Link
                    href={`/about-1`}
                    className="site-button btnhover19 outline white outline-2"
                  >
                    ABOUT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="igBQoKtJIc4&t=20s"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
