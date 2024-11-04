"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import GallaryWrapper from "../common/GallaryWrapper";
export default function ImageEffect() {
  return (
    <>
      <GallaryWrapper>
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Images effects</h1>
              {/* Breadcrumb row */}
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li>Element</li>
                  <li>Images effects</li>
                </ul>
              </div>
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>
        {/* inner page banner END */}
        <div className="bg-white lightgallery" id="lightgallery">
          {/* Left & right section start */}
          <div className="section-full bg-white content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sort-title clearfix text-center">
                    <h4>Images overlay on hover</h4>
                  </div>
                  {/* Images overlay on hover */}
                  <div className="section-content box-sort-in button-example p-b0">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay1">
                            <Image
                              alt=""
                              src="/images/our-work/pic1.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 1</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay2">
                            <Image
                              alt=""
                              src="/images/our-work/pic2.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 2</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay3">
                            <Image
                              alt=""
                              src="/images/our-work/pic3.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 3</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay4">
                            <Image
                              alt=""
                              src="/images/our-work/pic4.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 4</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay5">
                            <Image
                              alt=""
                              src="/images/our-work/pic5.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 5</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay6">
                            <Image
                              alt=""
                              src="/images/our-work/pic6.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 6</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay7">
                            <Image
                              alt=""
                              src="/images/our-work/pic7.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 7</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay8">
                            <Image
                              alt=""
                              src="/images/our-work/pic8.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 7</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay9">
                            <Image
                              alt=""
                              src="/images/our-work/pic1.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 9</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay12">
                            <Image
                              alt=""
                              src="/images/our-work/pic2.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 10</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay12 left">
                            <Image
                              alt=""
                              src="/images/our-work/pic3.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 11</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Images overlay on hover END */}
          </div>
          <div className="dlab-divider bg-gray-dark tb10" />
          <div className="section-full bg-white content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sort-title clearfix text-center">
                    <h4>Images effect on hover</h4>
                  </div>
                  {/* Images Effect on hover */}
                  <div className="section-content box-sort-in button-example p-b0">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect opacity">
                            <Image
                              alt=""
                              src="/images/our-work/pic1.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Opacity low</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect zoom">
                            <Image
                              alt=""
                              src="/images/our-work/pic2.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Zoom</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect shrink">
                            <Image
                              alt=""
                              src="/images/our-work/pic3.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Shrink</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect side-pan">
                            <Image
                              alt=""
                              src="/images/our-work/pic4.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Left move</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect vertical-pan">
                            <Image
                              alt=""
                              src="/images/our-work/pic5.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Vertical move</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect fade-in">
                            <Image
                              alt=""
                              src="/images/our-work/pic8.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Fade-in</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect fade-out">
                            <Image
                              alt=""
                              src="/images/our-work/pic7.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Fade out</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect rotate">
                            <Image
                              alt=""
                              src="/images/our-work/pic2.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Image rotate</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect blurr">
                            <Image
                              alt=""
                              src="/images/our-work/pic3.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Blurr</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect blurr-invert">
                            <Image
                              alt=""
                              src="/images/our-work/pic4.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Blurr invert</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect off-color">
                            <Image
                              alt=""
                              src="/images/our-work/pic8.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Off color hover</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect on-color">
                            <Image
                              alt=""
                              src="/images/our-work/pic2.jpg"
                              width="700"
                              height="500"
                            />
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">On color hover</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Images effect on hover END */}
          </div>
          <div className="dlab-divider bg-gray-dark tb10" />
          <div className="section-full bg-white content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sort-title clearfix text-center">
                    <h4>Images overlay &amp; content on hover</h4>
                  </div>
                  {/* Images overlay & content on hover */}
                  <div className="section-content box-sort-in button-example">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay1 dlab-img-effect zoom">
                            <Image
                              alt=""
                              src="/images/our-work/pic1.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="overlay-bx">
                              <div className="overlay-icon">
                                <a>
                                  <i className="fas fa-link icon-bx-xs" />
                                </a>
                                <span
                                  className="check-km"
                                  data-exthumbimage={`/images/our-work/pic1.jpg`}
                                  data-src={`/images/our-work/pic1.jpg`}
                                >
                                  <i className="far fa-image icon-bx-xs" />
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 1</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay2 dlab-img-effect zoom">
                            <Image
                              alt=""
                              src="/images/our-work/pic4.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="dlab-info-has p-a20">
                              <div className="dlab-info-has-text">
                                We have the expertise to create just the right
                                web presence for you.
                              </div>
                              <ul className="dlab-social-icon border">
                                <li>
                                  <a className="fab fa-facebook-f" />
                                </li>
                                <li>
                                  <a className="fab fa-twitter" />
                                </li>
                                <li>
                                  <a className="fab fa-linkedin-in" />
                                </li>
                                <li>
                                  <a className="fas fa-rss" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 2</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect zoom">
                            <Image
                              alt=""
                              src="/images/our-work/pic2.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="dlab-info-has p-a20 bg-primary">
                              <div className="dlab-info-has-text">
                                We have the expertise to create just the right
                                web presence for you.
                              </div>
                              <ul className="dlab-social-icon border">
                                <li>
                                  <a className="fab fa-facebook-f" />
                                </li>
                                <li>
                                  <a className="fab fa-twitter" />
                                </li>
                                <li>
                                  <a className="fab fa-linkedin-in" />
                                </li>
                                <li>
                                  <a className="fas fa-rss" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 3</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect zoom">
                            <Image
                              alt=""
                              src="/images/our-work/pic7.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="dlab-info-has p-a20 bg-black">
                              <div className="dlab-info-has-text">
                                We have the expertise to create just the right
                                web presence for you.
                              </div>
                              <ul className="dlab-social-icon border">
                                <li>
                                  <a className="fab fa-facebook-f" />
                                </li>
                                <li>
                                  <a className="fab fa-twitter" />
                                </li>
                                <li>
                                  <a className="fab fa-linkedin-in" />
                                </li>
                                <li>
                                  <a className="fas fa-rss" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 4</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect zoom">
                            <Image
                              alt=""
                              src="/images/our-work/pic8.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="dlab-info-has p-a20 bg-white no-hover">
                              <div className="dlab-info-has-text">
                                We have the expertise to create just the right
                                web presence for you.
                              </div>
                              <ul className="dlab-social-icon dark">
                                <li>
                                  <a className="fab fa-facebook-f" />
                                </li>
                                <li>
                                  <a className="fab fa-twitter" />
                                </li>
                                <li>
                                  <a className="fab fa-linkedin-in" />
                                </li>
                                <li>
                                  <a className="fas fa-rss" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 5</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-effect zoom">
                            <Image
                              alt=""
                              src="/images/our-work/pic5.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="dlab-info-has skew-has p-a20 bg-primary">
                              <p className="dlab-info-has-text">
                                We have the expertise to create just the right
                                web presence for you.
                              </p>
                              <ul className="dlab-social-icon border">
                                <li>
                                  <a className="fab fa-facebook-f" />
                                </li>
                                <li>
                                  <a className="fab fa-twitter" />
                                </li>
                                <li>
                                  <a className="fab fa-linkedin-in" />
                                </li>
                                <li>
                                  <a className="fas fa-rss" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 6</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b15">
                        <div className="dlab-box">
                          <div className="dlab-media dlab-img-overlay11 dlab-img-effect zoom">
                            <Image
                              alt=""
                              src="/images/our-work/pic1.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="overlay-bx">
                              <div className="overlay-icon">
                                <a>
                                  <i className="fas fa-link icon-bx-xs" />
                                </a>
                                <span
                                  className="check-km"
                                  data-exthumbimage={`/images/our-work/pic1.jpg`}
                                  data-src={`/images/our-work/pic1.jpg`}
                                >
                                  <i className="far fa-image icon-bx-xs" />
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 7</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dlab-divider bg-gray-dark tb10" />
          <div className="section-full bg-white content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sort-title clearfix text-center">
                    <h4>Images content on hover Icon</h4>
                  </div>
                  {/* Images overlay & content on hover */}
                  <div className="section-content box-sort-in button-example">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                        <div className="dlab-box img-content-style-1 fly-box">
                          <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                            <Image
                              alt=""
                              src="/images/our-work/pic1.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="overlay-bx">
                              <div className="overlay-icon">
                                <ul className="list-inline link-list">
                                  <li>
                                    <a>
                                      <i className="ti-link" />
                                    </a>
                                  </li>
                                  <li>
                                    <a>
                                      <i className="ti-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <span
                                      data-exthumbimage={`/images/our-work/pic1.jpg`}
                                      data-src={`/images/our-work/pic1.jpg`}
                                      className="check-km"
                                    >
                                      <i className="ti-fullscreen" />
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="dlab-title-bx bg-white p-a20 text-center">
                            <p className="font-16 text-secondry m-b5">
                              Herbal Beauty Salon
                            </p>
                            <div className="dlab-divider margin-0 bg-black" />
                            <p className="font-16 text-secondry m-a0">
                              <small>Branding and Identity</small>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                        <div className="dlab-box img-content-style-2 fly-box">
                          <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                            <Image
                              alt=""
                              src="/images/our-work/pic4.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="overlay-bx">
                              <ul className="list-inline link-list">
                                <li>
                                  <a>
                                    <i className="ti-link" />
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <i className="ti-heart" />
                                  </a>
                                </li>
                                <li>
                                  <span
                                    data-exthumbimage={`/images/our-work/pic4.jpg`}
                                    data-src={`/images/our-work/pic4.jpg`}
                                    className="check-km"
                                  >
                                    <i className="ti-fullscreen" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx bg-white p-a20 text-center">
                            <p className="font-16 text-secondry m-b5">
                              Herbal Beauty Salon
                            </p>
                            <div className="dlab-divider margin-0 bg-black" />
                            <p className="font-16 text-secondry m-a0">
                              <small>Branding and Identity</small>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                        <div className="dlab-box img-content-style-3 fly-box">
                          <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                            <Image
                              alt=""
                              src="/images/our-work/pic2.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="overlay-bx">
                              <ul className="link-list">
                                <li>
                                  <a>
                                    <i className="ti-link" />
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <i className="ti-heart" />
                                  </a>
                                </li>
                                <li>
                                  <span
                                    data-exthumbimage={`/images/our-work/pic2.jpg`}
                                    data-src={`/images/our-work/pic2.jpg`}
                                    className="check-km"
                                  >
                                    <i className="ti-fullscreen" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx bg-white p-a20 text-center">
                            <p className="font-16 text-secondry m-b5">
                              Herbal Beauty Salon
                            </p>
                            <div className="dlab-divider margin-0 bg-black" />
                            <p className="font-16 text-secondry m-a0">
                              <small>Branding and Identity</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Images content on hover Icon END */}
          </div>
          <div className="dlab-divider bg-gray-dark tb10" />
          <div className="section-full bg-white content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sort-title clearfix text-center">
                    <h4>Images content on hover</h4>
                  </div>
                  {/* Images overlay & content on hover */}
                  <div className="section-content box-sort-in m-b15 button-example">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="dlab-box img-hvr-content-style-1">
                          <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                            <Image
                              alt=""
                              src="/images/our-work/pic1.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="overlay-bx">
                              <div className="overlay-icon">
                                <div className="text-white">
                                  <p className="font-16 m-b5">
                                    Herbal Beauty Salon
                                  </p>
                                  <p className="font-16 m-b5">
                                    <small>Branding and Identity</small>
                                  </p>
                                </div>
                              </div>
                              <ul className="list-inline link-list">
                                <li>
                                  <a>
                                    <i className="ti-link" />
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <i className="ti-heart" />
                                  </a>
                                </li>
                                <li>
                                  <span
                                    data-exthumbimage={`/images/our-work/pic1.jpg`}
                                    data-src={`/images/our-work/pic1.jpg`}
                                    className="check-km"
                                  >
                                    <i className="ti-fullscreen" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 1</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="dlab-box img-hvr-content-style-2">
                          <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                            <Image
                              alt=""
                              src="/images/our-work/pic4.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="overlay-bx">
                              <div className="dlab-info-has-text">
                                <div className="text-white">
                                  <p className="font-16 m-b5">
                                    Herbal Beauty Salon
                                  </p>
                                  <div className="dlab-divider margin-0 bg-gray-dark" />
                                  <p className="font-16 m-b5">
                                    <small>Branding and Identity</small>
                                  </p>
                                </div>
                              </div>
                              <ul className="list-inline link-list">
                                <li>
                                  <a>
                                    <i className="ti-link" />
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <i className="ti-heart" />
                                  </a>
                                </li>
                                <li>
                                  <span
                                    className="check-km"
                                    data-exthumbimage={`/images/our-work/pic4.jpg`}
                                    data-src={`/images/our-work/pic4.jpg`}
                                  >
                                    <i className="ti-fullscreen" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 2</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="dlab-box img-hvr-content-style-3">
                          <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                            <Image
                              alt=""
                              src="/images/our-work/pic2.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="overlay-bx">
                              <div className="dlab-info-has-text">
                                <div className="text-white">
                                  <p className="font-16 m-b5">
                                    Herbal Beauty Salon
                                  </p>
                                  <div className="dlab-divider margin-0 bg-gray-dark" />
                                  <p className="font-16 m-b5">
                                    <small>Branding and Identity</small>
                                  </p>
                                </div>
                              </div>
                              <ul className="list-inline link-list">
                                <li>
                                  <a>
                                    <i className="ti-link" />
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <i className="ti-heart" />
                                  </a>
                                </li>
                                <li>
                                  <span
                                    data-exthumbimage={`/images/our-work/pic2.jpg`}
                                    data-src={`/images/our-work/pic2.jpg`}
                                    className="check-km"
                                  >
                                    <i className="ti-fullscreen" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 3</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="dlab-box img-hvr-content-style-4">
                          <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                            <Image
                              alt=""
                              src="/images/our-work/pic7.jpg"
                              width="700"
                              height="500"
                            />
                            <div className="overlay-bx">
                              <div className="dlab-info-has-text">
                                <div className="text-white">
                                  <p className="font-16 m-b5">
                                    Herbal Beauty Salon
                                  </p>
                                  <div className="dlab-divider margin-0 bg-gray-dark" />
                                  <p className="font-16 m-b5">
                                    <small>Branding and Identity</small>
                                  </p>
                                </div>
                              </div>
                              <ul className="list-inline link-list">
                                <li>
                                  <a>
                                    <i className="ti-link" />
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <i className="ti-heart" />
                                  </a>
                                </li>
                                <li>
                                  <span
                                    data-exthumbimage={`/images/our-work/pic7.jpg`}
                                    data-src={`/images/our-work/pic7.jpg`}
                                    className="check-km"
                                  >
                                    <i className="ti-fullscreen" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 4</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content on hover END */}
          </div>
          {/* Left & right section  END */}
          <div className="dlab-divider bg-gray-dark tb10" />
          <div className="section-full bg-white content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sort-title clearfix text-center">
                    <h4>Images content on hover</h4>
                  </div>
                  {/* Images overlay & content on hover */}
                  <div className="section-content box-sort-in m-b15 button-example">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="dlab-box content-box-style style1">
                          <div className="dlab-media dlab-img-overlay12">
                            <Image
                              alt=""
                              src="/images/about/pic1.jpg"
                              width="600"
                              height="909"
                            />
                            <div className="overlay-bx no-hover">
                              <div className="overlay-icon text-white">
                                <h4 className="text-white">Hover Box</h4>
                                <p className="p-lr10 box-visible">
                                  Lorem ipsum Nam libero tempore cum soluta
                                  nobis esteligen dioptio cumque nihil impedit
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="m-b0">Effect 1</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="dlab-box content-box-style style1">
                          <div className="dlab-media dlab-img-overlay12">
                            <Image
                              alt=""
                              src="/images/about/pic2.jpg"
                              width="600"
                              height="909"
                            />
                            <div className="overlay-bx no-hover">
                              <div className="align-m text-white">
                                <p className="m-b10">Manager</p>
                                <h4 className="text-white m-t0">Team Mamber</h4>
                                <div className="p-lr20 box-visible text-center">
                                  <ul className="list-inline m-a0">
                                    <li>
                                      <a className="site-button facebook sharp">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a className="site-button google-plus sharp">
                                        <i className="fab fa-google-plus-g" />
                                      </a>
                                    </li>
                                    <li>
                                      <a className="site-button twitter sharp">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 2</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="dlab-box content-box-style style1">
                          <div className="dlab-media dlab-img-overlay12">
                            <Image
                              alt=""
                              src="/images/about/pic1.jpg"
                              width="600"
                              height="909"
                            />
                            <div className="overlay-bx no-hover">
                              <div className="align-m text-white">
                                <div className="text-center p-a10 box-visible">
                                  <div className="icon-sm m-b20">
                                    <a className="icon-cell">
                                      <i className="ti-headphone-alt" />
                                    </a>
                                  </div>
                                  <div className="icon-content">
                                    <h5 className="dlab-tilte text-uppercase">
                                      Unique design
                                    </h5>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetuer
                                      adipiscing elit, sed diam.
                                    </p>
                                    <a className="site-button">Site Button</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 3</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="dlab-box content-box-style style1">
                          <div className="dlab-media dlab-img-overlay12 left">
                            <Image
                              alt=""
                              src="/images/about/pic2.jpg"
                              width="600"
                              height="909"
                            />
                            <div className="overlay-bx no-hover">
                              <div className="align-m text-white text-left">
                                <div className="icon-bx-wraper p-a10 left box-visible">
                                  <div className="icon-sm text-primary m-b20">
                                    <a className="icon-cell text-primary">
                                      <i className="ti-gift" />
                                    </a>
                                  </div>
                                  <div className="icon-content">
                                    <h5 className="dlab-tilte text-uppercase">
                                      Icon Box
                                    </h5>
                                    <p>
                                      Lorem ipsum dolor sit elit nonummy dolor
                                      is euismod end..
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dlab-title-bx m-t10">
                            <h4 className="margin-0">Effect 4</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content on hover END */}
          </div>
          {/* Left & right section  END */}
        </div>{" "}
      </GallaryWrapper>
    </>
  );
}
