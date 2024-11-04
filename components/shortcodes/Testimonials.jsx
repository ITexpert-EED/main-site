"use client";
import Image from "next/image";
import {
  testimonials,
  testimonials2,
  testimonials5,
  testimonials6,
  testimonials7,
  testimonialsData,
} from "@/data/testimonials";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function Testimonials() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Testimonials</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href="/index">Home</Link>
                </li>
                <li>Element</li>
                <li>Testimonials</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="bg-white">
        {/* Testimonials Style 1 */}
        <div className="section-full bg-primary content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center text-white">
                  <h4>What peolpe are saying style 1</h4>
                </div>
              </div>
            </div>
            <div className="section-content relative">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                  prevEl: ".snbp6",
                  nextEl: ".snbn6",
                }}
                pagination={{
                  clickable: true,
                  el: ".spt7",
                  bulletActiveClass: "active",
                  renderBullet: function (index, className) {
                    return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                  },
                }}
                className="testimonial-one-dots owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-btn-white testimonial-11-area owl-dots-white-full"
              >
                {testimonials2.slice(0, 3).map((elm, i) => (
                  <SwiperSlide key={i} className="item">
                    <div className="testimonial-11 text-white">
                      <div className="testimonial-pic">
                        <Image
                          src={elm.image}
                          width={500}
                          height={600}
                          alt=""
                        />
                      </div>
                      <div className="testimonial-detail clearfix">
                        <div className="testimonial-text">
                          <p>
                            {elm.text}
                            {elm.text}
                            [...]
                          </p>
                        </div>
                        <h5 className="testimonial-name m-t0 m-b5">
                          {elm.name}
                        </h5>
                        <span className="testimonial-position">
                          {elm.position}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="owl-dots spt7"></div>
              </Swiper>
              <div className="owl-btn-center-lr">
                <div className="owl-nav">
                  <button
                    style={{ zIndex: 1, background: "transparent" }}
                    type="button"
                    role="presentation"
                    className="owl-prev snbp6"
                  >
                    <i className="ti-arrow-circle-left"></i>
                  </button>
                  <button
                    style={{ zIndex: 1, background: "transparent" }}
                    type="button"
                    role="presentation"
                    className="owl-next snbn6"
                  >
                    <i className="ti-arrow-circle-right"></i>
                  </button>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 1 End */}
        {/* Testimonials Style 2 */}
        <div className="section-full bg-gray content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 2</h4>
                </div>
              </div>
            </div>
            <div className="section-content">
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
                        <Image
                          width={500}
                          height={600}
                          src={elm.image}
                          alt=""
                        />
                      </div>
                      <div className="testimonial-detail quote-left quote-right">
                        <div className="testimonial-text">
                          <p>{elm.text}</p>
                        </div>
                        <h5 className="testimonial-name text-primary m-t0 m-b5">
                          {elm.name}
                        </h5>
                        <span className="testimonial-position">
                          {elm.position}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="owl-nav">
                  <button
                    style={{ zIndex: 1 }}
                    type="button"
                    role="presentation"
                    className="owl-prev snbp2"
                  >
                    <i className="fa fa-angle-left"></i>
                  </button>
                  <button
                    style={{ zIndex: 1 }}
                    type="button"
                    role="presentation"
                    className="owl-next snbn2"
                  >
                    <i className="fa fa-angle-right"></i>
                  </button>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        {/* Testimonials Style 2 End */}
        {/* Testimonials Style 3 */}
        <div className="section-full bg-white content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 3</h4>
                </div>
              </div>
            </div>

            <div className="section-content ">
              {" "}
              <div
                style={{ display: "block" }}
                className="testimonial-num-count visible owl-num-count owl-carousel owl-btn-center-lr owl-btn-3 owl-theme"
              >
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  loop
                  autoplay={{
                    delay: 4000,
                  }}
                  speed={2500}
                  modules={[Pagination, Autoplay, Navigation]}
                  navigation={{
                    prevEl: ".snbp41",
                    nextEl: ".snbn41",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".spt4",
                    bulletActiveClass: "active",
                    renderBullet: function (index, className) {
                      return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                    },
                  }}
                >
                  {testimonials2.slice(0, 3).map((elm, i) => (
                    <SwiperSlide key={i} className="item">
                      <div className="testimonial-12 text-white">
                        <div className="testimonial-pic">
                          <Image
                            src={elm.image}
                            width={500}
                            height={600}
                            alt=""
                          />
                        </div>
                        <div className="testimonial-detail">
                          <h4 className="testimonial-name m-t0 m-b5">
                            {elm.name}
                          </h4>
                          <span className="testimonial-position">
                            {elm.position}
                          </span>
                          <div className="testimonial-text">
                            <p>{elm.text}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="owl-dots spt4"></div>
                </Swiper>
                <div className="owl-nav">
                  <button
                    style={{ zIndex: 1 }}
                    type="button"
                    role="presentation"
                    className="owl-prev snbp41"
                  >
                    <i className="ti-arrow-left"></i>
                  </button>
                  <button
                    style={{ zIndex: 1 }}
                    type="button"
                    role="presentation"
                    className="owl-next snbn41"
                  >
                    <i className="ti-arrow-right"></i>
                  </button>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 3 End */}
        {/* Testimonials Style 4 */}
        <div className="section-full bg-gray content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 4</h4>
                </div>
              </div>
            </div>
            <div className="section-content">
              <Swiper
                slidesPerView={3}
                spaceBetween={5}
                slidesPerGroup={1}
                //   swiper-slide swiper-slide-active item wow bounceInUp
                loop
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                centeredSlides
                modules={[Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 3,
                  },
                }}
                className="testimonial-six centeredSlides owl-carousel owl-btn-center-lr testimonial-13-area owl-btn-2 primary dots-style-3 owl-theme"
              >
                {testimonials.map((elm, i) => (
                  <SwiperSlide
                    key={i}
                    className="item wow bounceInUp"
                    data-wow-duration="2s"
                    data-wow-delay={0.3 * (i + 1) + "s"}
                  >
                    <div className="testimonial-13">
                      <div className="testimonial-text">
                        <div className="quote-left" />
                        <p>{elm.text}</p>
                      </div>
                      <div className="testimonial-detail clearfix">
                        <div className="testimonial-pic radius shadow">
                          <Image
                            src={elm.image}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </div>
                        <h5 className="testimonial-name m-t10 m-b5">
                          {elm.name}
                        </h5>
                        <span className="testimonial-position text-primary">
                          {elm.position}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {/* Testimonials Style 4 End */}
        {/* Testimonials Style 5 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 5</h4>
                </div>
              </div>
            </div>
            <div className="section-content">
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                slidesPerGroup={1}
                loop
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                modules={[Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                }}
                className="testimonial-five owl-carousel owl-btn-center-lr owl-btn-2 primary dots-style-3 owl-theme"
              >
                {testimonials5.map((testimonial, index) => (
                  <SwiperSlide
                    className="swiper-slide item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay={testimonial.animationDelay}
                    key={index}
                  >
                    <div className="testimonial-14 quote-left">
                      <div className="testimonial-detail clearfix text-white">
                        <h5 className="testimonial-name m-t10 m-b5">
                          {testimonial.name}
                        </h5>
                        <span className="testimonial-position">
                          {testimonial.position}
                        </span>
                      </div>
                      <div className="testimonial-text">
                        <p>{testimonial.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {/* Testimonials Style 5 End */}
        {/* Testimonials Style 6 */}
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 6</h4>
                </div>
              </div>
            </div>
            <div className="section-content">
              <Swiper
                slidesPerView={3}
                spaceBetween={6}
                slidesPerGroup={1}
                loop
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                centeredSlides
                modules={[Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 3,
                  },
                }}
                className="testimonial-six owl-loaded owl-theme owl-carousel owl-none dots-style-3"
              >
                {testimonials.map((elm, i) => (
                  <SwiperSlide key={i} className="item">
                    <div className="testimonial-8">
                      <div className="testimonial-text">
                        <p>{elm.text}</p>
                      </div>
                      <div className="testimonial-detail clearfix">
                        <div className="testimonial-pic radius shadow">
                          <Image
                            src={elm.image}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </div>
                        <h5 className="testimonial-name m-t0 m-b5">
                          {elm.name}
                        </h5>
                        <span className="testimonial-position">
                          {elm.position}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {/* Testimonials Style 6 End */}
        {/* Testimonials Style 7 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 7</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={2}
                    loop
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
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                    className="testimonial-three owl-loaded owl-theme owl-carousel owl-btn-2 primary owl-btn-center-lr"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide key={i} className="item">
                        <div className="testimonial-15 ">
                          <div className="testimonial-text quote-left quote-right">
                            <p>{elm.text}</p>
                          </div>
                          <div className="testimonial-detail clearfix">
                            <div className="testimonial-pic radius shadow">
                              <Image
                                src={elm.image}
                                width={100}
                                height={100}
                                alt=""
                              />
                            </div>
                            <strong className="testimonial-name">
                              {elm.name}
                            </strong>
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 7 End */}
        {/* Testimonials Style 8 */}
        <div className="section-full bg-black content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center text-white">
                  <h4>What peolpe are saying style 8</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={2}
                    loop
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
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                    className="testimonial-three owl-loaded owl-theme owl-carousel owl-btn-2 primary owl-btn-center-lr"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide key={i} className="item">
                        <div className="testimonial-15 text-white">
                          <div className="testimonial-text quote-left quote-right">
                            <p>{elm.text}</p>
                          </div>
                          <div className="testimonial-detail clearfix">
                            <div className="testimonial-pic radius shadow">
                              <Image
                                src={elm.image}
                                width={100}
                                height={100}
                                alt=""
                              />
                            </div>
                            <strong className="testimonial-name">
                              {elm.name}
                            </strong>
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 8 End */}
        {/* Testimonials Style 9 */}
        <div className="section-full bg-gray content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 9</h4>
                </div>
              </div>
            </div>
            <div className="section-content">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={2}
                slidesPerGroupAuto
                loop
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 3,
                  },
                }}
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  el: ".spt1",
                  bulletActiveClass: "active",
                  renderBullet: function (index, className) {
                    return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                  },
                }}
                className="testimonial-two-dots owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-dots-primary-full"
              >
                {testimonials6.map((testimonial, i) => (
                  <SwiperSlide
                    key={i}
                    className="item p-a5 wow fadeInUp"
                    data-wow-duration={testimonial.duration}
                    data-wow-delay={testimonial.delay}
                  >
                    <div className="testimonial-9">
                      <div className="testimonial-pic radius style1">
                        <Image
                          src={testimonial.image}
                          width={100}
                          height={100}
                          alt=""
                        />
                      </div>
                      <div className="testimonial-text">
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="testimonial-detail">
                        <strong className="testimonial-name">
                          {testimonial.name}
                        </strong>
                        <span className="testimonial-position">
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="owl-dots spt1"></div>
              </Swiper>
            </div>
          </div>
        </div>
        {/* Testimonials Style 9 End */}
        {/* Testimonials Style 10 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 10</h4>
                </div>
              </div>
            </div>
            <div className="section-content">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                modules={[Autoplay]}
                className="testimonial-seven owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3"
              >
                {testimonials7.map((testimonial, index) => (
                  <SwiperSlide key={index} className="item">
                    <div className="testimonial-10">
                      <div className="testimonial-pic radius">
                        <Image
                          src={testimonial.imageUrl}
                          width={100}
                          height={100}
                          alt=""
                        />
                      </div>
                      <div className="testimonial-text">
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="testimonial-detail">
                        <strong className="testimonial-name">
                          {testimonial.name}
                        </strong>
                        <span className="testimonial-position">
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {/* Testimonials Style 10 End */}
        {/* Testimonials Style 11 */}
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 11</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Navigation, Autoplay]}
                    navigation={{
                      prevEl: ".snbp9",
                      nextEl: ".snbn9",
                    }}
                    className="testimonial-one owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3"
                  >
                    {testimonialsData.map((testimonial, index) => (
                      <SwiperSlide className="item" key={index}>
                        <div className="testimonial-1">
                          <div className="testimonial-pic radius">
                            <Image
                              src={testimonial.image}
                              width={100}
                              height={100}
                              alt={testimonial.name}
                            />
                          </div>
                          <div className="testimonial-text">
                            <p>{testimonial.text}</p>
                          </div>
                          <div className="testimonial-detail">
                            <strong className="testimonial-name">
                              {testimonial.name}
                            </strong>
                            <span className="testimonial-position">
                              {testimonial.position}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="owl-nav">
                      <button
                        type="button"
                        style={{ zIndex: 1 }}
                        role="presentation"
                        className="owl-prev snbp9"
                      >
                        <i className="ti-arrow-left"></i>
                      </button>
                      <button
                        type="button"
                        style={{ zIndex: 1 }}
                        role="presentation"
                        className="owl-next snbn9"
                      >
                        <i className="ti-arrow-right"></i>
                      </button>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 11 End */}
        {/* Testimonials Style 12 */}
        <div
          className="section-full overlay-black-middle bg-img-fix content-inner"
          style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title text-white clearfix text-center">
                  <h4>What peolpe are saying style 12</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Autoplay]}
                    className="testimonial-one owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3 btn-white"
                  >
                    {testimonialsData.map((testimonial, index) => (
                      <SwiperSlide className="item" key={index}>
                        <div className="testimonial-1 testimonial-bg text-white">
                          <div className="testimonial-pic quote-left radius shadow">
                            <Image
                              src={testimonial.image}
                              width={100}
                              height={100}
                              alt={testimonial.name}
                            />
                          </div>
                          <div className="testimonial-text">
                            <p>{testimonial.text}</p>
                          </div>
                          <div className="testimonial-detail">
                            <strong className="testimonial-name">
                              {testimonial.name}
                            </strong>
                            <span className="testimonial-position">
                              {testimonial.position}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 12 End */}
        {/* Testimonials Style 13 */}
        <div className="section-full bg-white content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 13</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={6}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    centeredSlides
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                    className="testimonial-two-dots owl-theme owl-dots-primary-full owl-loaded owl-carousel owl-none"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide key={i} className="item">
                        <div className="testimonial-8">
                          <div className="testimonial-text">
                            <p>{elm.text}</p>
                          </div>
                          <div className="testimonial-detail clearfix">
                            <div className="testimonial-pic radius shadow">
                              <Image
                                src={elm.image}
                                width={100}
                                height={100}
                                alt=""
                              />
                            </div>
                            <h5 className="testimonial-name m-t0 m-b5">
                              {elm.name}
                            </h5>
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 13 End */}
        {/* Testimonials Style 14 */}
        <div
          className="section-full overlay-black-middle bg-img-fix content-inner-2"
          style={{ backgroundImage: "url(/images/background/bg2.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title text-white clearfix text-center">
                  <h4>What peolpe are saying style 14</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    centeredSlides
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                    className="testimonial-two-dots owl-theme owl-dots-white-full owl-loaded owl-carousel owl-none"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide key={i} className="item">
                        <div className="testimonial-2 testimonial-bg">
                          <div className="testimonial-text">
                            <p>{elm.text} [...]</p>
                          </div>
                          <div className="testimonial-detail clearfix">
                            <div className="testimonial-pic quote-left radius shadow">
                              <Image
                                width={100}
                                height={100}
                                alt=""
                                src={elm.image}
                              />
                            </div>
                            <strong className="testimonial-name">
                              {elm.name}
                            </strong>
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 14 End */}
        {/* Testimonials Style 15 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 15</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={6}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    centeredSlides
                    modules={[Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                    className="testimonial-three owl-loaded owl-theme owl-carousel owl-btn-2 primary owl-btn-center-lr"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide key={i} className="item">
                        <div className="testimonial-3">
                          <div className="quote-left" />
                          <div className="testimonial-text">
                            <p>{elm.text} [...]</p>
                          </div>
                          <div className="testimonial-detail">
                            <strong className="testimonial-name">
                              {elm.name}
                            </strong>{" "}
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                          </div>
                          <div className="testimonial-pic radius shadow">
                            <Image
                              width={100}
                              height={100}
                              alt=""
                              src={elm.image}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 15 End */}
        {/* Testimonials Style 16 */}
        <div
          className="section-full overlay-black-middle bg-img-fix content-inner"
          style={{ backgroundImage: "url(/images/background/bg3.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title text-white clearfix text-center">
                  <h4>What peolpe are saying style 16</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={6}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    centeredSlides
                    modules={[Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                    className="testimonial-three owl-loaded owl-theme owl-carousel owl-btn-2 primary owl-btn-center-lr"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide key={i} className="item">
                        <div className="testimonial-3 testimonial-bg">
                          <div className="quote-left" />
                          <div className="testimonial-text">
                            <p>{elm.text} [...]</p>
                          </div>
                          <div className="testimonial-detail">
                            <strong className="testimonial-name">
                              {elm.name}
                            </strong>{" "}
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                          </div>
                          <div className="testimonial-pic radius shadow">
                            <Image
                              width={100}
                              height={100}
                              alt=""
                              src={elm.image}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 16 End */}
        {/* Testimonials Style 15 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 15</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                    }}
                    className="testimonial-four owl-loaded owl-theme owl-carousel owl-none"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide
                        key={i}
                        className="item wow fadeInUp "
                        data-wow-duration="2s"
                        data-wow-delay="0.3s"
                      >
                        <div className="testimonial-4">
                          <div className="testimonial-pic">
                            <Image
                              width={100}
                              height={100}
                              alt=""
                              src={elm.image}
                            />
                          </div>
                          <div className="testimonial-text text-white">
                            <p>{elm.text} [...]</p>
                          </div>
                          <div className="testimonial-detail">
                            <strong className="testimonial-name text-white">
                              {elm.name}
                            </strong>
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                          </div>
                          <div className="quote-right" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 15 End */}
        {/* Testimonials Style 16 */}
        <div
          className="section-full overlay-black-middle bg-img-fix content-inner"
          style={{ backgroundImage: "url(/images/background/bg4.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title text-white clearfix text-center">
                  <h4>What peolpe are saying style 16</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                    }}
                    className="testimonial-four owl-loaded owl-theme owl-carousel owl-none"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide
                        key={i}
                        className="item wow fadeInUp "
                        data-wow-duration="2s"
                        data-wow-delay="0.3s"
                      >
                        <div className="testimonial-4 testimonial-bg">
                          <div className="testimonial-pic">
                            <Image
                              width={100}
                              height={100}
                              alt=""
                              src={elm.image}
                            />
                          </div>
                          <div className="testimonial-text">
                            <p>{elm.text} [...]</p>
                          </div>
                          <div className="testimonial-detail">
                            <strong className="testimonial-name">
                              {elm.name}
                            </strong>
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                          </div>
                          <div className="quote-right" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 16 End */}
        {/* Testimonials Style 17 */}
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>What peolpe are saying style 17</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                    }}
                    className="testimonial-five owl-none owl-loaded owl-theme owl-carousel"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide
                        key={i}
                        className="item wow fadeInUp "
                        data-wow-duration="2s"
                        data-wow-delay="0.3s"
                      >
                        <div className="testimonial-6">
                          <div className="testimonial-text bg-white quote-left quote-right">
                            <p>{elm.text} [...]</p>
                          </div>
                          <div className="testimonial-detail clearfix bg-primary text-white">
                            <h4 className="testimonial-name m-tb0">
                              {elm.name}
                            </h4>
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                            <div className="testimonial-pic radius">
                              <Image
                                src={elm.image}
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 17 End */}
        {/* Testimonials Style 18 */}
        <div
          className="section-full overlay-black-middle bg-img-fix content-inner"
          style={{ backgroundImage: "url(/images/background/bg5.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title text-white clearfix text-center">
                  <h4>What peolpe are saying style 18</h4>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                    }}
                    className="testimonial-five owl-none owl-loaded owl-theme owl-carousel"
                  >
                    {testimonials.map((elm, i) => (
                      <SwiperSlide
                        key={i}
                        className="item wow fadeInUp "
                        data-wow-duration="2s"
                        data-wow-delay="0.3s"
                      >
                        <div className="testimonial-6">
                          <div className="testimonial-text bg-white quote-left quote-right">
                            <p>{elm.text} [...]</p>
                          </div>
                          <div className="testimonial-detail clearfix bg-primary text-white">
                            <h4 className="testimonial-name m-tb0">
                              {elm.name}
                            </h4>
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                            <div className="testimonial-pic radius">
                              <Image
                                src={elm.image}
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 18 End */}
      </div>
    </>
  );
}
