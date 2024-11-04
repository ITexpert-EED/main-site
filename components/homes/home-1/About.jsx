"use client";
import { services } from "@/data/services";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
export default function About() {
  const settings = {
    breakpoints: {
      1199: {
        slidesPerView: 3, // When window width is <= 1199px
      },
      1024: {
        slidesPerView: 2, // When window width is <= 768px
      },
      480: {
        slidesPerView: 2, // When window width is <= 480px
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="section-full bg-gray content-inner about-carousel-ser">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">
          Why Customers <br />
            <span className="text-primary">Choose Us</span>
          </h2>
          <p>
          At Expert Engineers, we deliver top-quality, custom-built electrical panels tailored to meet unique project needs. Our experienced team combines innovation with expertise, providing reliable solutions backed by exceptional service and support. Trust us for safety, efficiency, and superior performance.
          </p>
        </div>
        <Swiper
          {...settings}
          initialSlide={3}
          loop
          slidesPerGroupAuto
          spaceBetween={30}
          watchSlidesProgress
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="about-ser-carousel owl-overflow-visible owl-carousel owl-theme owl-btn-center-lr owl-dots-primary-full owl-btn-3 m-b30 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
          style={{ overflow: "visible" }}
        >
          {services.map((elm, i) => (
            <SwiperSlide key={i} className="item">
              <div className="dlab-box service-media-bx">
                <div className="dlab-media">
                  <Link href={`/about-1`}>
                    <Image
                      className="lazy"
                      width={500}
                      height={357}
                      src={elm.imageSrc}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="dlab-info text-center">
                  <h2 className="dlab-title">
                    <Link href={`/about-1`}>{elm.title}</Link>
                  </h2>
                  <p>{elm.description}</p>
                  <Link href={`/about-1`} className="site-button btnhover13">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
