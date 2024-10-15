"use client";
import { clientLogos } from "@/data/clients";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Clients() {
  return (
    <div
      className="section-full dlab-we-find bg-img-fix p-t20 p-b20 bg-white wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.6s"
    >
      <div className="container">
        <div className="section-content">
          <Swiper
            // slidesPerView={5}
            spaceBetween={60}
            slidesPerGroup={2}
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
                slidesPerView: 2,
              },

              767: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            style={{ maxWidth: "100vw", overflow: "hidden" }}
            className="client-logo-carousel mfp-gallery gallery owl-btn-center-lr owl-carousel owl-btn-3"
          >
            {clientLogos.map((logoSrc, index) => (
              <SwiperSlide className="item" key={index}>
                <div className="ow-client-logo">
                  <div className="client-logo">
                    <a href="#">
                      <Image width={300} height={200} src={logoSrc} alt="" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
