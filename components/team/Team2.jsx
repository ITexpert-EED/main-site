"use client";
import { teamMembers5 } from "@/data/team";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
export default function Team2() {
  return (
    <div className="section-full text-center bg-white content-inner">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Meet Our Team</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <Swiper
          slidesPerView={4}
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
          className="img-carousel owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3"
        >
          {teamMembers5.map((member, index) => (
            <SwiperSlide className="item" key={index}>
              <div className="dlab-box m-b30 dlab-team1">
                <div className="dlab-media">
                  <a href="#">
                    <Image
                      width={358}
                      height={460}
                      alt={member.name}
                      src={member.image}
                    />
                  </a>
                </div>
                <div className="dlab-info">
                  <h4 className="dlab-title">
                    <a href="#">{member.name}</a>
                  </h4>
                  <span className="dlab-position">{member.position}</span>
                  <ul className="dlab-social-icon dez-border">
                    {member.socialLinks.map((link, i) => (
                      <React.Fragment key={i}>
                        <li>
                          <a
                            className={`fab fa-${
                              [
                                "facebook-f",
                                "twitter",
                                "linkedin-in",
                                "pinterest-p",
                              ][i]
                            }`}
                            href={link}
                          />
                        </li>{" "}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
