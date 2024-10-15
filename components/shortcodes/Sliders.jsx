"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientSlider from "../common/ClientSlider";
import { testimonials6 } from "@/data/testimonials";
import Link from "next/link";
import Image from "next/image";

import GallaryWrapper from "../common/GallaryWrapper";

const images = [
  "/images/our-work/pic1.jpg",
  "/images/our-work/pic2.jpg",
  "/images/our-work/pic3.jpg",
  "/images/our-work/pic4.jpg",
  "/images/our-work/pic5.jpg",
  "/images/our-work/pic6.jpg",
  "/images/our-work/pic1.jpg",
  "/images/our-work/pic2.jpg",
  "/images/our-work/pic3.jpg",
  "/images/our-work/pic4.jpg",
  "/images/our-work/pic5.jpg",
  "/images/our-work/pic6.jpg",
];
const images2 = ["/images/banner/bnr5.jpg", "/images/banner/bnr4.jpg"];
export default function Sliders() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Carousel Sliders</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Carousel Sliders</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* Breadcrumb row END */}
      <div className="bg-white lightgallery" id="lightgallery">
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Image Carousel</h4>
                </div>
                {/* Image Carousel start */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={2}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    }}
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
                    className="img-carousel-dots owl-loaded owl-theme owl-carousel mfp-gallery gallery owl-none owl-dots-primary-full"
                  >
                    {images.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <div className="ow-img dlab-img-effect zoom-slow">
                            <a href="#">
                              <Image
                                alt=""
                                src={elm}
                                width="700"
                                height="500"
                              />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="owl-dots spt1"></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          {/* Image Carousel start END*/}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Image Carousel with content</h4>
                </div>
                {/* Image Carousel with content */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <div className="img-carousel-dots-nav owl-btn-3 owl-loaded owl-theme owl-carousel owl-btn-center-lr">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      slidesPerGroup={2}
                      loop
                      autoplay={{
                        delay: 4000,
                      }}
                      speed={2500}
                      modules={[Pagination, Autoplay, Navigation]}
                      navigation={{
                        prevEl: ".snbp39",
                        nextEl: ".snbn39",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        480: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                      pagination={{
                        clickable: true,
                        el: ".spt2",
                        bulletActiveClass: "active",
                        renderBullet: function (index, className) {
                          return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                        },
                      }}
                    >
                      {images.map((elm, i) => (
                        <SwiperSlide key={i}>
                          <div className="item">
                            <div className="ow-carousel-entry">
                              <div className="ow-entry-media dlab-img-effect zoom-slow">
                                <a href="#">
                                  <Image
                                    alt=""
                                    src={elm}
                                    width="700"
                                    height="500"
                                  />
                                </a>
                              </div>
                              <div className="ow-entry-content">
                                <div className="ow-entry-title">
                                  <a href="#">first heading</a>
                                </div>
                                <div className="ow-entry-text">
                                  <p>
                                    All the Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as
                                    necessary.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="owl-dots spt2"></div>
                    </Swiper>
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev snbp39"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-left" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next snbn39"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-right" />
                      </button>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Carousel with content END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Testimonial Carousel</h4>
                </div>
                {/* Image Carousel start */}
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
                    el: ".spt15",
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
                  <div className="owl-dots spt15"></div>
                </Swiper>
              </div>
            </div>
          </div>
          {/* Image Carousel start END*/}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sort-title clearfix text-center">
                  <h4>Image Carousel with team member</h4>
                </div>
                {/* Image Carousel with team member */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <div className="img-carousel-dots-nav owl-dots-primary-big owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-2 primary owl-drag">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      slidesPerGroup={2}
                      loop
                      autoplay={{
                        delay: 4000,
                      }}
                      speed={2500}
                      modules={[Pagination, Autoplay, Navigation]}
                      navigation={{
                        prevEl: ".snbp31",
                        nextEl: ".snbn31",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        480: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                      pagination={{
                        clickable: true,
                        el: ".spt3",
                        bulletActiveClass: "active",
                        renderBullet: function (index, className) {
                          return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                        },
                      }}
                    >
                      {images.map((elm, i) => (
                        <SwiperSlide key={i}>
                          <div className="item">
                            <div className="ow-carousel-entry">
                              <div className="ow-entry-media dlab-img-effect zoom-slow">
                                <a href="#">
                                  <Image
                                    alt=""
                                    src={elm}
                                    width="700"
                                    height="500"
                                  />
                                </a>
                              </div>
                              <div className="ow-entry-content">
                                <div className="ow-entry-title">
                                  <a href="#">first heading</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="owl-dots spt3"></div>
                    </Swiper>{" "}
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev snbp31"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-left"></i>
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next snbn31"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-right"></i>
                      </button>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Carousel with team member END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Portfolio Carousel</h4>
                </div>
                {/* Portfolio Carousel with team member */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <GallaryWrapper>
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      slidesPerGroup={2}
                      loop
                      autoplay={{
                        delay: 4000,
                      }}
                      speed={2500}
                      modules={[Pagination, Autoplay, Navigation]}
                      navigation={{
                        prevEl: ".snbp32",
                        nextEl: ".snbn32",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        480: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                      className="img-carousel owl-loaded owl-theme owl-carousel mfp-gallery gallery owl-btn-center-lr owl-btn-4 owl-dots-none"
                    >
                      {images.map((elm, i) => (
                        <SwiperSlide key={i}>
                          <div className="item">
                            <div className="ow-portfolio">
                              <div className="ow-portfolio-img dlab-img-overlay1 dlab-img-effect zoom-slow">
                                <Image
                                  alt=""
                                  src={elm}
                                  width="700"
                                  height="500"
                                />
                                <div className="overlay-bx">
                                  <div className="overlay-icon">
                                    <span
                                      className="check-km"
                                      data-exthumbimage={elm}
                                      data-src={elm}
                                    >
                                      <i className="fas fa-search-plus icon-bx-xs" />
                                    </span>
                                    <a>
                                      <i className="fas fa-link icon-bx-xs" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="owl-nav">
                        <button
                          type="button"
                          role="presentation"
                          className="owl-prev snbp32"
                          style={{ zIndex: 1 }}
                        >
                          <i className="ti-arrow-left" />
                        </button>
                        <button
                          type="button"
                          role="presentation"
                          className="owl-next snbn32"
                          style={{ zIndex: 1 }}
                        >
                          <i className="ti-arrow-right" />
                        </button>
                      </div>
                    </Swiper>{" "}
                  </GallaryWrapper>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Carousel with team member END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Portfolio Carousel no margin</h4>
                </div>
                {/* Portfolio Carousel with no margin */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <GallaryWrapper>
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={0}
                      slidesPerGroup={2}
                      loop
                      autoplay={{
                        delay: 4000,
                      }}
                      speed={2500}
                      modules={[Pagination, Autoplay, Navigation]}
                      navigation={{
                        prevEl: ".snbp33",
                        nextEl: ".snbn33",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        480: {
                          slidesPerView: 2,
                        },
                        767: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                      className="portfolio-carousel-nogap owl-loaded owl-theme owl-carousel mfp-gallery gallery owl-btn-center-lr owl-btn-1"
                    >
                      {images.map((elm, i) => (
                        <SwiperSlide key={i}>
                          <div className="item">
                            <div className="ow-portfolio">
                              <div className="ow-portfolio-img dlab-img-overlay1 dlab-img-effect zoom-slow">
                                <Image
                                  alt=""
                                  src={elm}
                                  width="700"
                                  height="500"
                                />
                                <div className="overlay-bx">
                                  <div className="overlay-icon">
                                    <span
                                      className="check-km"
                                      data-exthumbimage={elm}
                                      data-src={elm}
                                    >
                                      <i className="fas fa-search-plus icon-bx-xs" />
                                    </span>
                                    <a href="#">
                                      <i className="fas fa-link icon-bx-xs" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="owl-nav">
                        <button
                          type="button"
                          role="presentation"
                          className="owl-prev snbp33"
                          style={{ zIndex: 1 }}
                        >
                          <i className="ti-arrow-left" />
                        </button>
                        <button
                          type="button"
                          role="presentation"
                          className="owl-next snbn33"
                          style={{ zIndex: 1 }}
                        >
                          <i className="ti-arrow-right" />
                        </button>
                      </div>
                    </Swiper>
                  </GallaryWrapper>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Carousel with no margin END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Event post Carousel</h4>
                </div>
                {/* blog post Carousel with no margin */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Pagination, Autoplay, Navigation]}
                    navigation={{
                      prevEl: ".snbp34",
                      nextEl: ".snbn34",
                    }}
                    className="blog-carousel mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-1 primary"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {images.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <div className="ow-blog-post date-style-2">
                            <div className="ow-post-media dlab-img-effect zoom-slow">
                              <Image
                                alt=""
                                src={elm}
                                width="700"
                                height="500"
                              />
                            </div>
                            <div className="ow-post-info">
                              <div className="ow-post-title">
                                <h4 className="post-title">
                                  <a href="#" title="Video post">
                                    Blog post carousel title
                                  </a>
                                </h4>
                              </div>
                              <div className="ow-post-meta">
                                <ul>
                                  <li className="post-date">
                                    <i className="ti-comment-alt" />
                                    <strong>17 Mar</strong> <span> 2016</span>
                                  </li>
                                  <li className="post-author">
                                    <i className="ti-user" />
                                    By
                                    <a
                                      href="#"
                                      title="Posts by demongo"
                                      rel="author"
                                    >
                                      demongo
                                    </a>
                                  </li>
                                  <li className="post-comment">
                                    <i className="ti-comment-alt" />
                                    <a href="#" className="comments-link">
                                      1 Comment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ow-post-text">
                                <p>
                                  All the Lorem Ipsum generators on the Internet
                                  tend to repeat predefined chunks as necessary.
                                </p>
                              </div>
                              <div className="ow-post-readmore">
                                <a
                                  href="#"
                                  title="READ MORE"
                                  rel="bookmark"
                                  className="site-button-link"
                                >
                                  READ MORE
                                  <i className="fas fa-angle-double-right" />
                                </a>
                              </div>
                              <div className="ow-post-tags clearfix">
                                <div className="post-tags">
                                  <a href="#">Child </a>
                                  <a href="#">Eduction </a>
                                  <a href="#">Money </a>
                                  <a href="#">Resturent </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev snbp34"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-left" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next snbn34"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-right" />
                      </button>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          {/* blog post Carousel with no margin END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Event post Carousel</h4>
                </div>
                {/* Event post Carousel with no margin */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Autoplay]}
                    className="blog-carousel mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {images.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <div className="dlab-box">
                            <div className="dlab-media">
                              <a href="#">
                                <Image
                                  alt=""
                                  src={elm}
                                  width="700"
                                  height="500"
                                />
                              </a>
                            </div>
                            <div className="dlab-info p-a20 border-1">
                              <ul className="blog-info text-white">
                                <li>
                                  By
                                  <a
                                    href="#"
                                    title="Posts by demongo"
                                    rel="author"
                                    className="text-white"
                                  >
                                    demongo
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="comments-link text-white"
                                  >
                                    1 Comment
                                  </a>
                                </li>
                                <li>
                                  <span>17 Mar 2016</span>
                                </li>
                              </ul>
                              <h4 className="dlab-title m-t0">
                                <a href="#">How To Build A garden Plan</a>
                              </h4>
                              <p className="m-a0">
                                All the Lorem Ipsum generators on the Internet
                                tend to repeat predefined chunks as necessary.
                              </p>
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
          {/* Event post Carousel with no margin END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Event post Carousel</h4>
                </div>
                {/* Event post Carousel with no margin */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <div className="blog-carousel owl-loaded owl-theme owl-carousel mfp-gallery gallery owl-btn-center-lr owl-btn-2">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      slidesPerGroup={1}
                      loop
                      autoplay={{
                        delay: 4000,
                      }}
                      speed={2500}
                      modules={[Pagination, Autoplay, Navigation]}
                      navigation={{
                        prevEl: ".snbp35",
                        nextEl: ".snbn35",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 2,
                        },
                        1000: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {images.map((elm, i) => (
                        <SwiperSlide key={i}>
                          <div className="item">
                            <div className="ow-event-post date-style-2">
                              <div className="ow-event-media dlab-img-effect zoom-slow">
                                <Image
                                  alt=""
                                  src={elm}
                                  width="700"
                                  height="500"
                                />
                              </div>
                              <div className="ow-event-info">
                                <div className="ow-event-title">
                                  <h4 className="event-title">
                                    <a href="#" title="Video post">
                                      Event post carousel title
                                    </a>
                                  </h4>
                                </div>
                                <div className="ow-event-text">
                                  <p>
                                    All the Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as
                                    necessary.
                                  </p>
                                </div>
                                <div className="ow-event-readmore">
                                  <a
                                    href="#"
                                    title="READ MORE"
                                    rel="bookmark"
                                    className="site-button-link"
                                  >
                                    READ MORE
                                    <i className="fas fa-angle-double-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev snbp35"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-left" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next snbn35"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Event post Carousel with no margin END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Client Logo</h4>
                </div>
                {/* Client logo Carousel */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <ClientSlider />
                </div>
              </div>
            </div>
          </div>
          {/* Client logo Carousel END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Fade Slide</h4>
                </div>
                {/* content start */}
                <div className="section-content box-sort-in m-b30 button-example">
                  <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    navigation={{
                      prevEl: ".snbp399",
                      nextEl: ".snbn399",
                    }}
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    effect="fade"
                    className="owl-fade-one owl-loaded owl-theme owl-carousel owl-btn-1 primary owl-btn-center-lr"
                  >
                    {images2.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <div className="dlab-thum-bx">
                            <Image alt="" src={elm} width="1920" height="766" />
                          </div>
                        </div>{" "}
                      </SwiperSlide>
                    ))}
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev snbp399"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-left" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next snbn399"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-right" />
                      </button>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* Fade Carousel */}
          </div>
        </div>
        {/* content  END */}
      </div>
    </>
  );
}
