"use client";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { teamData } from "@/data/team";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
export default function Team() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Team</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Team</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="bg-white team-box-area">
        {/* Team Section Style 1 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="sort-title clearfix text-center">
              <h4>Team Section Style 1</h4>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team4">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic1.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Nashid Martines</a>
                    </h4>
                    <span className="dlab-position">Director</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-facebook-f"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-linkedin-in"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team4">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic2.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Designer</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-facebook-f"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-linkedin-in"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team4">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic3.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Hackson Willingham</a>
                    </h4>
                    <span className="dlab-position">Developer</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-facebook-f"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-linkedin-in"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team4">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic4.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Manager</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-facebook-f"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-linkedin-in"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm gray-light fab fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 1 End */}
        {/* Team Section Style 2 */}
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="sort-title clearfix text-center">
              <h4>Team Section Style 2</h4>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team5">
                  <div className="dlab-border-left" />
                  <div className="dlab-border-right" />
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        width={358}
                        height={460}
                        alt=""
                        src="/images/our-team/pic1.jpg"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Nashid Martines</a>
                    </h4>
                    <span className="dlab-position">Director</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-facebook-f"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-linkedin-in"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team5">
                  <div className="dlab-border-left" />
                  <div className="dlab-border-right" />
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic2.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Designer</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-facebook-f"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-linkedin-in"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team5">
                  <div className="dlab-border-left" />
                  <div className="dlab-border-right" />
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic3.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Hackson Willingham</a>
                    </h4>
                    <span className="dlab-position">Developer</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-facebook-f"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-linkedin-in"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team5">
                  <div className="dlab-border-left" />
                  <div className="dlab-border-right" />
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic4.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Manager</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-facebook-f"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-linkedin-in"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button circle-sm white fab fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 2 End */}
        {/* Team Section Style 3 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="sort-title clearfix text-center">
              <h4>Team Section Style 3</h4>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="dlab-box m-b30 dlab-team6">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic2.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Marco Datella</a>
                    </h4>
                    <span className="dlab-position">Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="dlab-box m-b30 dlab-team6">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic3.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="dlab-box m-b30 dlab-team6">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic4.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Nashid Martines</a>
                    </h4>
                    <span className="dlab-position">Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 3 End */}
        {/* Team Section Style 4 */}
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="sort-title clearfix text-center">
              <h4>Team Section Style 4</h4>
            </div>
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
              className="team-carousel centeredSlides owl-carousel owl-btn-3 owl-theme owl-btn-center-lr"
            >
              {teamData.map((elm, i) => (
                <SwiperSlide
                  key={i}
                  className="item wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay={elm.delay}
                >
                  <div className="dlab-box m-b30 dlab-team7">
                    <div className="dlab-media">
                      <Link href={`/team-1`}>
                        <Image
                          alt=""
                          src={elm.image}
                          width={350}
                          height={350}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <Link href={`/team-1`}>{elm.name}</Link>
                      </h4>
                      <span className="dlab-position">{elm.position}</span>
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            className="site-button circle-sm gray-light fab fa-facebook-f"
                            href="#"
                          ></a>
                        </li>{" "}
                        <li>
                          <a
                            className="site-button circle-sm gray-light fab fa-twitter"
                            href="#"
                          ></a>
                        </li>{" "}
                        <li>
                          <a
                            className="site-button circle-sm gray-light fab fa-linkedin-in"
                            href="#"
                          ></a>
                        </li>{" "}
                        <li>
                          <a
                            className="site-button circle-sm gray-light fab fa-pinterest-p"
                            href="#"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Team Section Style 4 End */}
        {/* Team Section Style 5 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="sort-title clearfix text-center">
              <h4>Team Section Style 5</h4>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team8">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic1.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button fab fa-facebook-f facebook"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-twitter twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-linkedin-in linkedin"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-pinterest-p pinterest"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Nashid Martines</a>
                    </h4>
                    <span className="dlab-position">Director</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team8">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic2.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button fab fa-facebook-f facebook"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-twitter twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-linkedin-in linkedin"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-pinterest-p pinterest"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team8">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic3.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button fab fa-facebook-f facebook"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-twitter twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-linkedin-in linkedin"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-pinterest-p pinterest"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Hackson Willingham</a>
                    </h4>
                    <span className="dlab-position">Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team8">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic4.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button fab fa-facebook-f facebook"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-twitter twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-linkedin-in linkedin"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-pinterest-p pinterest"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 5 End */}
        {/* Team Section Style 6 */}
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="sort-title clearfix text-center">
              <h4>Team Section Style 6</h4>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team9">
                  <div className="dlab-media dlab-media-right">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic1.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                    <div className="dlab-info-has">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            className="site-button fab fa-facebook-f"
                            href="#"
                          />
                        </li>
                        <li>
                          <a className="site-button fab fa-twitter" href="#" />
                        </li>
                        <li>
                          <a
                            className="site-button fab fa-linkedin-in"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="site-button fab fa-pinterest-p"
                            href="#"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix">
                      <h4 className="dlab-title">
                        <a href="#">Nashid Martines</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team9">
                  <div className="dlab-media dlab-media-right">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic2.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                    <div className="dlab-info-has">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            className="site-button fab fa-facebook-f"
                            href="#"
                          />
                        </li>
                        <li>
                          <a className="site-button fab fa-twitter" href="#" />
                        </li>
                        <li>
                          <a
                            className="site-button fab fa-linkedin-in"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="site-button fab fa-pinterest-p"
                            href="#"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix">
                      <h4 className="dlab-title">
                        <a href="#">Konne Backfield</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team9">
                  <div className="dlab-media dlab-media-right">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic3.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                    <div className="dlab-info-has">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            className="site-button fab fa-facebook-f"
                            href="#"
                          />
                        </li>
                        <li>
                          <a className="site-button fab fa-twitter" href="#" />
                        </li>
                        <li>
                          <a
                            className="site-button fab fa-linkedin-in"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="site-button fab fa-pinterest-p"
                            href="#"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix">
                      <h4 className="dlab-title">
                        <a href="#">Hackson Willingham</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team9">
                  <div className="dlab-media dlab-media-right">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/pic4.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                    <div className="dlab-info-has">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            className="site-button fab fa-facebook-f"
                            href="#"
                          />
                        </li>
                        <li>
                          <a className="site-button fab fa-twitter" href="#" />
                        </li>
                        <li>
                          <a
                            className="site-button fab fa-linkedin-in"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="site-button fab fa-pinterest-p"
                            href="#"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix">
                      <h4 className="dlab-title">
                        <a href="#">Konne Backfield</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 6 End */}
        {/* Team Section Style 7 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="sort-title clearfix text-center">
              <h4>Team Section Style 7</h4>
            </div>
            <div className="row dlab-team10-area">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team10">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic1.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Nashid Martines</a>
                    </h4>
                    <span className="dlab-position">Director</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button fab fa-facebook-f facebook"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-twitter twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-linkedin-in linkedin"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-pinterest-p pinterest"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team10">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic2.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Designer</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button fab fa-facebook-f facebook"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-twitter twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-linkedin-in linkedin"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-pinterest-p pinterest"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team10">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic3.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Hackson Willingham</a>
                    </h4>
                    <span className="dlab-position">Developer</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button fab fa-facebook-f facebook"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-twitter twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-linkedin-in linkedin"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-pinterest-p pinterest"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team10">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-team/team-bx/pic4.jpg"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Manager</span>
                    <ul className="dlab-social-icon">
                      <li>
                        <a
                          className="site-button fab fa-facebook-f facebook"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-twitter twitter"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-linkedin-in linkedin"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-pinterest-p pinterest"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 7 End */}
        {/* Team Section Style 8 */}
        <div className="section-full bg-gray content-inner-2">
          <div className="container">
            <div className="sort-title clearfix text-center">
              <h4>Team Section Style 8</h4>
            </div>
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
                700: {
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
                el: ".spt7",
                bulletActiveClass: "active",
                renderBullet: function (index, className) {
                  return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                },
              }}
              className="owl-team owl-carousel dlab-team11-area owl-theme owl-btn-center-lr dots-theme"
            >
              {teamData.map((member, index) => (
                <SwiperSlide
                  className="item wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay={member.delay}
                  key={index}
                >
                  <div className="dlab-box dlab-team11">
                    <div className="dlab-media dlab-img-effect zoom">
                      <Link href={`/team-1`}>
                        <Image
                          src={member.image}
                          width={350}
                          height={350}
                          alt={member.name}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <Link href={`/team-1`}>{member.name}</Link>
                      </h4>
                      <span className="dlab-position">{member.position}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div style={{ zIndex: 1 }} className="owl-dots spt7"></div>
            </Swiper>
          </div>
        </div>
        {/* Team Section Style 8 End */}
        {/* Team Section Style 9 */}
        <div
          className="section-full bg-white content-inner overlay-primary-dark bg-img-fix"
          style={{ backgroundImage: "url(/images/background/bg19.jpg)" }}
        >
          <div className="container">
            <div className="sort-title clearfix text-white text-center">
              <h4>Team Section Style 9</h4>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team3">
                    <div className="dlab-media">
                      <a href="#">
                        <Image
                          width={358}
                          height={460}
                          alt=""
                          src="/images/our-team/car/pic1.jpg"
                        />
                      </a>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <a href="#">Nashid Martines</a>
                      </h4>
                      <span className="dlab-position">Director</span>
                      <ul className="dlab-social-icon dez-border">
                        <li>
                          <a className="fab fa-facebook-f" href="#" />
                        </li>{" "}
                        <li>
                          <a className="fab fa-twitter" href="#" />
                        </li>{" "}
                        <li>
                          <a className="fab fa-linkedin-in" href="#" />
                        </li>{" "}
                        <li>
                          <a className="fab fa-pinterest-p" href="#" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team3">
                    <div className="dlab-media">
                      <a href="#">
                        <Image
                          width={358}
                          height={460}
                          alt=""
                          src="/images/our-team/car/pic2.jpg"
                        />
                      </a>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <a href="#">Konne Backfield</a>
                      </h4>
                      <span className="dlab-position">Marketing</span>
                      <ul className="dlab-social-icon dez-border">
                        <li>
                          <a className="fab fa-facebook-f" href="#" />
                        </li>
                        <li>
                          <a className="fab fa-twitter" href="#" />
                        </li>
                        <li>
                          <a className="fab fa-linkedin-in" href="#" />
                        </li>
                        <li>
                          <a className="fab fa-pinterest-p" href="#" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team3">
                    <div className="dlab-media">
                      <a href="#">
                        <Image
                          width={358}
                          height={460}
                          alt=""
                          src="/images/our-team/car/pic3.jpg"
                        />
                      </a>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <a href="#">Hackson Willingham</a>
                      </h4>
                      <span className="dlab-position">Sales Manager</span>
                      <ul className="dlab-social-icon dez-border">
                        <li>
                          <a className="fab fa-facebook-f" href="#" />
                        </li>
                        <li>
                          <a className="fab fa-twitter" href="#" />
                        </li>
                        <li>
                          <a className="fab fa-linkedin-in" href="#" />
                        </li>
                        <li>
                          <a className="fab fa-pinterest-p" href="#" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team3">
                    <div className="dlab-media">
                      <a href="#">
                        <Image
                          width={358}
                          height={460}
                          alt=""
                          src="/images/our-team/car/pic4.jpg"
                        />
                      </a>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <a href="#">Konne Backfield</a>
                      </h4>
                      <span className="dlab-position">Marketing</span>
                      <ul className="dlab-social-icon dez-border">
                        <li>
                          <a className="fab fa-facebook-f" href="#" />
                        </li>
                        <li>
                          <a className="fab fa-twitter" href="#" />
                        </li>
                        <li>
                          <a className="fab fa-linkedin-in" href="#" />
                        </li>
                        <li>
                          <a className="fab fa-pinterest-p" href="#" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 9 End */}
        {/* Team Section Style 10 */}
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="sort-title clearfix text-center">
              <h4>Team Section Style 10</h4>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="relative">
                  <div className="dlab-box dlab-team1">
                    <div className="inner">
                      <div className="dlab-media">
                        <a href="#">
                          <Image
                            width={358}
                            height={460}
                            alt=""
                            src="/images/our-team/pic1.jpg"
                          />
                        </a>
                      </div>
                      <div className="dlab-info">
                        <h4 className="dlab-title">
                          <a href="#">Nashid Martines</a>
                        </h4>
                        <span className="dlab-position">Director</span>
                        <ul className="dlab-social-icon dez-border">
                          <li>
                            <a className="fab fa-facebook-f" href="#" />
                          </li>
                          <li>
                            <a className="fab fa-twitter" href="#" />
                          </li>
                          <li>
                            <a className="fab fa-linkedin-in" href="#" />
                          </li>
                          <li>
                            <a className="fab fa-pinterest-p" href="#" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team1">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        width={358}
                        height={460}
                        alt=""
                        src="/images/our-team/pic2.jpg"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Designer</span>
                    <ul className="dlab-social-icon dez-border">
                      <li>
                        <a className="fab fa-facebook-f" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-twitter" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-linkedin-in" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-pinterest-p" href="#" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team1">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        width={358}
                        height={460}
                        alt=""
                        src="/images/our-team/pic3.jpg"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Hackson Willingham</a>
                    </h4>
                    <span className="dlab-position">Developer</span>
                    <ul className="dlab-social-icon dez-border">
                      <li>
                        <a className="fab fa-facebook-f" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-twitter" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-linkedin-in" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-pinterest-p" href="#" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="dlab-box m-b30 dlab-team1">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        width={358}
                        height={460}
                        alt=""
                        src="/images/our-team/pic4.jpg"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Manager</span>
                    <ul className="dlab-social-icon dez-border">
                      <li>
                        <a className="fab fa-facebook-f" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-twitter" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-linkedin-in" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-pinterest-p" href="#" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 10 End */}
        <div className="dlab-divider bg-gray-dark" />
        {/* Team Section Style 11 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Team Section Style 11</h4>
                </div>
                {/* Team Section Style 1 */}
                <div className="section-content box-sort-in button-example">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="rounded-team">
                        <div className="round-box bg-primary">
                          <div className="team-mamber">
                            <div className="team-mamber">
                              <Image
                                alt=""
                                src="/images/our-team/pic5.jpg"
                                width="500"
                                height="600"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sosial-icon-team text-center">
                          <ul className="rounde-team-social-icon border">
                            <li>
                              <a
                                href="#"
                                className="fab fa-facebook-f fb-btn"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-twitter tw-btn m-l10"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-linkedin-in link-btn m-l10"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-pinterest-p pin-btn"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="border-1 team-info text-center p-a20 p-t40">
                          <h5 className="dlab-title">
                            <a href="#">Nashid Martines</a>
                          </h5>
                          <span>Director</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="rounded-team">
                        <div className="round-box bg-primary">
                          <div className="team-mamber">
                            <div className="team-mamber">
                              <Image
                                alt=""
                                src="/images/our-team/pic6.jpg"
                                width="500"
                                height="600"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sosial-icon-team text-center">
                          <ul className="rounde-team-social-icon border">
                            <li>
                              <a
                                href="#"
                                className="fab fa-facebook-f fb-btn"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-twitter tw-btn m-l10"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-linkedin-in link-btn m-l10"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-pinterest-p pin-btn"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="border-1 team-info text-center p-a20 p-t40">
                          <h5 className="dlab-title">
                            <a href="#">Konne Backfield</a>
                          </h5>
                          <span>Manager</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="rounded-team">
                        <div className="round-box bg-primary">
                          <div className="team-mamber">
                            <div className="team-mamber">
                              <Image
                                alt=""
                                src="/images/our-team/pic7.jpg"
                                width="500"
                                height="600"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sosial-icon-team text-center">
                          <ul className="rounde-team-social-icon border">
                            <li>
                              <a
                                href="#"
                                className="fab fa-facebook-f fb-btn"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-twitter tw-btn m-l10"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-linkedin-in link-btn m-l10"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-pinterest-p pin-btn"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="border-1 team-info text-center p-a20 p-t40">
                          <h5 className="dlab-title">
                            <a href="#">Marco Datella</a>
                          </h5>
                          <span>Developer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="rounded-team">
                        <div className="round-box bg-primary">
                          <div className="team-mamber">
                            <div className="team-mamber">
                              <Image
                                alt=""
                                src="/images/our-team/pic8.jpg"
                                width="500"
                                height="600"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sosial-icon-team text-center">
                          <ul className="rounde-team-social-icon border">
                            <li>
                              <a
                                href="#"
                                className="fab fa-facebook-f fb-btn"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-twitter tw-btn m-l10"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-linkedin-in link-btn m-l10"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fab fa-pinterest-p pin-btn"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="border-1 team-info text-center p-a20 p-t40">
                          <h5 className="dlab-title">
                            <a href="#">Hackson Willingham</a>
                          </h5>
                          <span>Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 11 End */}
        <div className="dlab-divider bg-gray-dark" />
        {/* Team Section Style 12 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Team Section Style 12</h4>
                </div>
                <div className="section-content box-sort-in button-example">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 m-b30">
                      <div className="team-box-type dlab-box">
                        <div className="team-mamber-img dlab-media dlab-img-overlay8">
                          <Image
                            alt=""
                            src="/images/our-team/pic4.jpg"
                            width="500"
                            height="600"
                          />
                        </div>
                        <div className="team-info-box">
                          <h4 className="dlab-title">
                            <a href="#">Marco Datella</a>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing
                            and.
                          </p>
                          <ul className="list-inline m-tb20">
                            <li>
                              <a
                                href="#"
                                className="site-button facebook sharp outline"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button google-plus sharp outline"
                              >
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button linkedin sharp outline"
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button twitter sharp outline"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                          </ul>
                          <ul className="team-p-info">
                            <li>
                              <i className="ti-mobile m-r5 text-primary" /> +00
                              234 567 8910
                            </li>
                            <li>
                              <i className="ti-email m-r5 text-primary" />
                              <a href="mailto:someone@example.com">
                                info@example.com
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 m-b30">
                      <div className="team-box-type dlab-box">
                        <div className="team-mamber-img dlab-media dlab-img-overlay8">
                          <Image
                            alt=""
                            src="/images/our-team/pic3.jpg"
                            width="500"
                            height="600"
                          />
                        </div>
                        <div className="team-info-box">
                          <h4 className="dlab-title">
                            <a href="#">Konne Backfield</a>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing
                            and.
                          </p>
                          <ul className="list-inline m-tb20">
                            <li>
                              <a
                                href="#"
                                className="site-button facebook sharp outline"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button google-plus sharp outline"
                              >
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button linkedin sharp outline"
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button twitter sharp outline"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                          </ul>
                          <ul className="team-p-info">
                            <li>
                              <i className="ti-mobile m-r5 text-primary" /> +00
                              234 567 8910
                            </li>
                            <li>
                              <i className="ti-email m-r5 text-primary" />
                              <a href="mailto:someone@example.com">
                                info@example.com
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 m-b30">
                      <div className="team-box-type dlab-box">
                        <div className="team-mamber-img dlab-media dlab-img-overlay8">
                          <Image
                            alt=""
                            src="/images/our-team/pic2.jpg"
                            width="500"
                            height="600"
                          />
                        </div>
                        <div className="team-info-box">
                          <h4 className="dlab-title">
                            <a href="#">Hackson Willingham</a>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing
                            and.
                          </p>
                          <ul className="list-inline m-tb20">
                            <li>
                              <a
                                href="#"
                                className="site-button facebook sharp outline"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button google-plus sharp outline"
                              >
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button linkedin sharp outline"
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button twitter sharp outline"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                          </ul>
                          <ul className="team-p-info">
                            <li>
                              <i className="ti-mobile m-r5 text-primary" /> +00
                              234 567 8910
                            </li>
                            <li>
                              <i className="ti-email m-r5 text-primary" />
                              <a href="mailto:someone@example.com">
                                info@example.com
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 m-b30">
                      <div className="team-box-type dlab-box">
                        <div className="team-mamber-img dlab-media dlab-img-overlay8">
                          <Image
                            alt=""
                            src="/images/our-team/pic1.jpg"
                            width="500"
                            height="600"
                          />
                        </div>
                        <div className="team-info-box">
                          <h4 className="dlab-title">
                            <a href="#">Jimmy Morris</a>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing
                            and.
                          </p>
                          <ul className="list-inline m-tb20">
                            <li>
                              <a
                                href="#"
                                className="site-button facebook sharp outline"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button google-plus sharp outline"
                              >
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button linkedin sharp outline"
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="site-button twitter sharp outline"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                          </ul>
                          <ul className="team-p-info">
                            <li>
                              <i className="ti-mobile m-r5 text-primary" /> +00
                              234 567 8910
                            </li>
                            <li>
                              <i className="ti-email m-r5 text-primary" />
                              <a href="mailto:someone@example.com">
                                info@example.com
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 12 End */}
        <div className="dlab-divider bg-gray-dark" />
        {/* Team Section Style 13 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Team Section Style 13</h4>
                </div>
                <div className="section-content box-sort-in button-example">
                  <div className="row text-center">
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="dlab-box">
                        <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm">
                          <Image
                            alt=""
                            src="/images/our-team/pic1.jpg"
                            width="500"
                            height="600"
                          />
                          <div className="overlay-bx">
                            <div className="overlay-icon">
                              <ul className="dlab-social-icon">
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-facebook-f"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-twitter"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-linkedin-in"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-facebook-f"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="dlab-title-bx p-a10">
                          <h5 className="dlab-title m-b5">
                            <a href="#">Marco Datella</a>
                          </h5>
                          <span className="dlab-position">Director</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="dlab-box">
                        <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm">
                          <Image
                            alt=""
                            src="/images/our-team/pic2.jpg"
                            width="500"
                            height="600"
                          />
                          <div className="overlay-bx">
                            <div className="overlay-icon">
                              <ul className="dlab-social-icon">
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-facebook-f"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-twitter"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-linkedin-in"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-facebook-f"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="dlab-title-bx p-a10">
                          <h5 className="dlab-title m-b5">
                            <a href="#">Marco Datella</a>
                          </h5>
                          <span className="dlab-position">Director</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="dlab-box">
                        <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm">
                          <Image
                            alt=""
                            src="/images/our-team/pic3.jpg"
                            width="500"
                            height="600"
                          />
                          <div className="overlay-bx">
                            <div className="overlay-icon">
                              <ul className="dlab-social-icon">
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-facebook-f"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-twitter"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-linkedin-in"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-facebook-f"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="dlab-title-bx p-a10">
                          <h5 className="dlab-title m-b5">
                            <a href="#">Konne Backfield</a>
                          </h5>
                          <span className="dlab-position">Developer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="dlab-box">
                        <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm">
                          <Image
                            alt=""
                            src="/images/our-team/pic4.jpg"
                            width="500"
                            height="600"
                          />
                          <div className="overlay-bx">
                            <div className="overlay-icon">
                              <ul className="dlab-social-icon">
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-facebook-f"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-twitter"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-linkedin-in"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-white fab fa-facebook-f"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="dlab-title-bx p-a10">
                          <h5 className="dlab-title m-b5">
                            <a href="#">Hackson Willingham</a>
                          </h5>
                          <span className="dlab-position">Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 13 End */}
        {/* Team Section Style 14 */}
        <div
          className="section-full bg-gray content-inner bg-img-fix overlay-black-dark"
          style={{ backgroundImage: "url(/images/background/bg2.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center text-white">
                  <h4>Team Section Style 14</h4>
                </div>
                <div className="section-content box-sort-in button-example">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
                        <div className="dlab-media dlab-img-overlay2 dlab-img-effect text-center">
                          <a href="#">
                            <Image
                              width={358}
                              height={460}
                              alt=""
                              src="/images/our-team/pic8.jpg"
                            />
                          </a>
                          <div className="dlab-info-has">
                            <ul className="dlab-social-icon dlab-social-icon-lg border">
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-facebook-f fb-btn"
                                />
                              </li>
                              <li>
                                <a href="#" className="fab fa-twitter tw-btn" />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-linkedin-in link-btn"
                                />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-pinterest-p pin-btn"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="p-lr10 p-tb20 text-black bg-white text-center">
                          <h5 className="dlab-title m-t0 m-b5">
                            <a href="#">Nashid Martines</a>
                          </h5>
                          <span className="dlab-member-position">Director</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
                        <div className="dlab-media dlab-media-top dlab-img-overlay2 dlab-img-effect text-center">
                          <a href="#">
                            <Image
                              width={358}
                              height={460}
                              alt=""
                              src="/images/our-team/pic5.jpg"
                            />
                          </a>
                          <div className="dlab-info-has">
                            <ul className="dlab-social-icon dlab-social-icon-lg border">
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-facebook-f fb-btn"
                                />
                              </li>
                              <li>
                                <a href="#" className="fab fa-twitter tw-btn" />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-linkedin-in link-btn"
                                />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-pinterest-p pin-btn"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="p-lr10 p-tb20 text-black bg-white text-center">
                          <h5 className="dlab-title m-t0 m-b5">
                            <a href="#">Nashid Martines</a>
                          </h5>
                          <span className="dlab-member-position">Director</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
                        <div className="dlab-media dlab-media-left dlab-img-overlay2 dlab-img-effect">
                          <a href="#">
                            <Image
                              width={358}
                              height={460}
                              alt=""
                              src="/images/our-team/pic1.jpg"
                            />
                          </a>
                          <div className="dlab-info-has">
                            <ul className="dlab-social-icon dlab-social-icon-lg border">
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-facebook-f fb-btn"
                                />
                              </li>
                              <li>
                                <a href="#" className="fab fa-twitter tw-btn" />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-linkedin-in link-btn"
                                />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-pinterest-p pin-btn"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="p-lr10 p-tb20 text-black bg-white text-center">
                          <h5 className="dlab-title m-t0 m-b5">
                            <a href="#">Nashid Martines</a>
                          </h5>
                          <span className="dlab-member-position">Director</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
                        <div className="dlab-media dlab-media-right dlab-img-overlay2 dlab-img-effect">
                          <a href="#">
                            <Image
                              width={358}
                              height={460}
                              alt=""
                              src="/images/our-team/pic6.jpg"
                            />
                          </a>
                          <div className="dlab-info-has">
                            <ul className="dlab-social-icon dlab-social-icon-lg border">
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-facebook-f fb-btn"
                                />
                              </li>
                              <li>
                                <a href="#" className="fab fa-twitter tw-btn" />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-linkedin-in link-btn"
                                />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fab fa-pinterest-p pin-btn"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="p-lr10 p-tb20 text-black bg-white text-center">
                          <h5 className="dlab-title m-t0 m-b5">
                            <a href="#">Hackson Willingham</a>
                          </h5>
                          <span className="dlab-member-position">
                            Developer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 14 End */}
        {/* Team Section Style 15 */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Team Section Style 15</h4>
                </div>
                <div className="section-content box-sort-in button-example p-b0">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="dlab-box fly-box dlab-img-effect off-color">
                        <div className="dlab-media">
                          <a href="#">
                            <Image
                              alt=""
                              src="/images/our-team/pic1.jpg"
                              width="500"
                              height="600"
                            />
                          </a>
                        </div>
                        <div className="dlab-info p-a20 p-t40 border-1">
                          <h5 className="dlab-title m-tb0">
                            <a href="#">Marco Datella</a>
                          </h5>
                          <div className="bg-primary skew-content-box">
                            <ul className="dlab-social-icon">
                              <li>
                                <a className="fab fa-facebook-f" href="#" />
                              </li>
                              <li>
                                <a className="fab fa-twitter" href="#" />
                              </li>
                              <li>
                                <a className="fab fa-linkedin-in" href="#" />
                              </li>
                              <li>
                                <a className="fab fa-google-plus-g" href="#" />
                              </li>
                            </ul>
                          </div>
                          <span>Developer</span>
                          <p className="m-t10 m-b0">
                            All the Lorem Ipsum generators on the Internet tend
                            to repeat predefined chunks as necessary.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="dlab-box fly-box dlab-img-effect off-color">
                        <div className="dlab-media">
                          <a href="#">
                            <Image
                              alt=""
                              src="/images/our-team/pic2.jpg"
                              width="500"
                              height="600"
                            />
                          </a>
                        </div>
                        <div className="dlab-info p-a20 p-t40 border-1">
                          <h5 className="dlab-title m-tb0">
                            <a href="#">Konne Backfield</a>
                          </h5>
                          <div className="bg-primary skew-content-box">
                            <ul className="dlab-social-icon">
                              <li>
                                <a className="fab fa-facebook-f" href="#" />
                              </li>
                              <li>
                                <a className="fab fa-twitter" href="#" />
                              </li>
                              <li>
                                <a className="fab fa-linkedin-in" href="#" />
                              </li>
                              <li>
                                <a className="fab fa-google-plus-g" href="#" />
                              </li>
                            </ul>
                          </div>
                          <span>Manager</span>
                          <p className="m-t10 m-b0">
                            All the Lorem Ipsum generators on the Internet tend
                            to repeat predefined chunks as necessary.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="dlab-box fly-box dlab-img-effect off-color">
                        <div className="dlab-media off-color">
                          <a href="#">
                            <Image
                              alt=""
                              src="/images/our-team/pic3.jpg"
                              width="500"
                              height="600"
                            />
                          </a>
                        </div>
                        <div className="dlab-info p-a20 p-t40 border-1">
                          <h5 className="dlab-title m-tb0">
                            <a href="#">Jimmy Morris</a>
                          </h5>
                          <div className="bg-primary skew-content-box">
                            <ul className="dlab-social-icon">
                              <li>
                                <a className="fab fa-facebook-f" href="#" />
                              </li>
                              <li>
                                <a className="fab fa-twitter" href="#" />
                              </li>
                              <li>
                                <a className="fab fa-linkedin-in" href="#" />
                              </li>
                              <li>
                                <a className="fab fa-google-plus-g" href="#" />
                              </li>
                            </ul>
                          </div>
                          <span>Director</span>
                          <p className="m-t10 m-b0">
                            All the Lorem Ipsum generators on the Internet tend
                            to repeat predefined chunks as necessary.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 15 End */}
      </div>
    </>
  );
}
