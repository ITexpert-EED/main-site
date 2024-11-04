"use client";
import Image from "next/image";
import { clientLogos } from "@/data/clients";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ClientSlider({
  parentClass = "client-logo-carousel owl-loaded owl-theme owl-carousel owl-dots-none owl-btn-center-lr owl-btn-3",
  border = false,
}) {
  return (
    <Swiper
      // slidesPerView={5}
      spaceBetween={60}
      slidesPerGroup={2}
      style={{ maxWidth: "100vw", overflow: "hidden" }}
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
      className={parentClass}
    >
      {clientLogos.map((logoSrc, index) => (
        <SwiperSlide className="item" key={index}>
          <div className="ow-client-logo">
            <div className={`client-logo ${border ? "border" : ""}`}>
              <a href="#">
                <Image width={300} height={200} src={logoSrc} alt="" />
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
