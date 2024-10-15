"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="section-full content-inner bg-white video-section"
        style={{ backgroundImage: 'url("/images/background/bg-video.png")' }}
      >
        <div className="container">
          <div className="section-content">
            <div className="row d-flex">
              <div className="col-lg-6 col-md-12 m-b30">
                <div className="video-bx">
                  <Image
                    alt="Signature"
                    src="/images/about/pic5.jpg"
                    width="1000"
                    height="674"
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
              </div>
              <div className="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                <div className="content-bx1">
                  <h2 className="m-b15 title">
                    A company involved in
                    <br />
                    <span className="text-primary"> service, maintenance</span>
                  </h2>
                  <p className="m-b30">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an.
                  </p>
                  <Image
                    width={200}
                    alt=""
                    src="/images/sign.png"
                    height="73"
                  />
                  <h4 className="m-b0">Jone Doe</h4>
                  <span className="font-14">Company Director</span>
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
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
