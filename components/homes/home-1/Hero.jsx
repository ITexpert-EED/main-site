"use client";

import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const slidesData = [
  {
    backgroundImage:
      'url("/images/wa001.png") center center no-repeat',
    title: "LT Panels",
    description:
      "Industry is ready to help you in making unique-looking and best website in a moment.",
  },
  {
    backgroundImage:
      'url("/images/busbar.jpg") center center no-repeat',
    title: "Bus Bar",
    description:
      "Industry is ready to help you in making unique-looking and best website in a moment.",
  },
  {
    backgroundImage:
      'url("/images/general panel.jpg") center center no-repeat',
    title: "General Panel",
    description:
      "Industry is ready to help you in making unique-looking and best website in a moment.",
  },
  {
    backgroundImage:
      'url("/images/green panel.jpg") center center no-repeat',
    title: "General Panel",
    description:
      "Industry is ready to help you in making unique-looking and best website in a moment.",
  },
];

export default function Hero() {
  return (
   <>
   
   <div className="hero-sec">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          loop
          navigation={{ prevEl: ".snbph2", nextEl: ".snbnh2" }}
          className=" swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-slider2 swiper-backface-hidden"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`swiper-slide slider-content ${
                index === 0 ? "swiper-slide-active" : "swiper-slide-next"
              }`}
              style={{ background: slide.backgroundImage }}
            >
              <div className="inner sliderStyle2">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>{" "}
                <Link href={"/services-1"}>
                  <button>Read More</button>
                </Link>{" "}
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button" style={{ zIndex: 1 }}>
            <div className="swiper-button-prev snbph2 previousButton swiper-button-disabled">
              <i className="las la-angle-left" />
            </div>
            <div className="swiper-button-next snbnh2 nextButton">
              <i className="las la-angle-right" />
            </div>
          </div>
        </Swiper>{" "}
      </div>{" "}
   </>
  );
}
