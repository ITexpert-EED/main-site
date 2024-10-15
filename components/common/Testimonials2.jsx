"use client";
import { testimonials } from "@/data/testimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      className="testimonial-six owl-loaded owl-theme owl-carousel owl-none dots-style-2 owl-drag"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
      id="client"
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Happy Customers Said</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
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
          modules={[Pagination, Autoplay, Navigation]}
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
          navigation={{
            prevEl: ".snbp1",
            nextEl: ".snbn1",
          }}
          className="slick-slider centeredSlides testimonial-six dots-long d-primary btn-style-1 slick-initialized"
        >
          {testimonials.map((elm, i) => (
            <SwiperSlide key={i} className="item">
              <div className="testimonial-8">
                <div className="testimonial-text">
                  <p>{elm.text}</p>
                </div>
                <div className="testimonial-detail clearfix">
                  <div className="testimonial-pic radius shadow">
                    <Image src={elm.image} width={100} height={100} alt="" />
                  </div>
                  <h5 className="testimonial-name m-t0 m-b5">{elm.name}</h5>
                  <span className="testimonial-position">{elm.position}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
