"use client";
import { testimonials2 } from "@/data/testimonials";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      className="section-full content-inner-2 bg-gray wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
      id="client"
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Testimonials</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 1,
            },
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: ".snbp2",
            nextEl: ".snbn2",
          }}
          className="testimonial-box-carousel owl-carousel m-b5 owl-btn-center-lr owl-btn-2 radius-no owl-btn-md owl-theme primary owl-dots-none owl-loaded owl-drag"
        >
          {testimonials2.map((elm, i) => (
            <SwiperSlide key={i} className="item">
              <div className="testimonial-11 testimonial-box">
                <div className="testimonial-pic">
                  <Image width={500} height={600} src={elm.image} alt="" />
                </div>
                <div className="testimonial-detail quote-left quote-right">
                  <div className="testimonial-text">
                    <p>{elm.text}</p>
                  </div>
                  <h5 className="testimonial-name text-primary m-t0 m-b5">
                    {elm.name}
                  </h5>
                  <span className="testimonial-position">{elm.position}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-nav">
            <button
              style={{ zIndex: 1 }}
              type="button"
              role="presentation"
              className="owl-prev snbp2  swiper-p-button "
            >
              <i className="fa fa-angle-right"></i>
            </button>
            <button
              style={{ zIndex: 1 }}
              type="button"
              role="presentation"
              className="owl-next snbn2 "
            >
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
