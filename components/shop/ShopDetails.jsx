"use client";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
const starRatings = [
  { className: "star selected", title: "Poor", dataValue: 1 },
  { className: "star selected", title: "Fair", dataValue: 2 },
  { className: "star selected", title: "Good", dataValue: 3 },
  { className: "star", title: "Excellent", dataValue: 4 },
  { className: "star", title: "WOW!!!", dataValue: 5 },
];
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { products } from "@/data/products";
import { useContextElement } from "@/context/Context";

import GallaryWrapper from "../common/GallaryWrapper";
const items = [
  {
    src: "/images/product/pcc.jpg",
    title: "Image 1 Title will come here",
  },
  {
    src: "/images/product/item2/item2.jpg",
    title: "Image 2 Title will come here",
  },
  {
    src: "/images/product/item2/item3.jpg",
    title: "Image 3 Title will come here",
  },
  {
    src: "/images/product/item2/item4.jpg",
    title: "Image 4 Title will come here",
  },
  {
    src: "/images/product/item2/item5.jpg",
    title: "Image 5 Title will come here",
  },
];
export default function ShopDetails({ productsItem }) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [star, setstar] = useState(3);
  return (
    <div className="section-full content-inner bg-white">
      {/* Product details */}
      <div className="container woo-entry">
        <div className="row m-b30">
          <div className="col-md-5 col-lg-5 col-sm-12">
            <div
              className="product-gallery on-show-slider lightgallery"
              // id="lightgallery"
            >
              <GallaryWrapper>
                <Swiper
                  modules={[Thumbs, Navigation]}
                  navigation={{
                    prevEl: ".snbpsd1",
                    nextEl: ".snbnsd1",
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="owl-carousel owl-theme owl-btn-center-lr m-b5 owl-btn-1 primary"
                  spaceBetween={8}
                >
                  {items.map((item, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="item">
                        <div className="mfp-gallery">
                          <div className="dlab-box">
                            <div className="dlab-thum-bx dlab-img-overlay1">
                              <Image
                                alt=""
                                src={item.src}
                                width="900"
                                height="1057"
                              />
                              <div className="overlay-bx">
                                <div className="overlay-icon">
                                  <span
                                    className="check-km"
                                    data-exthumbimage={item.src}
                                    data-src={item.src}
                                  >
                                    <i className="ti-fullscreen" />
                                  </span>
                                </div>
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
                      style={{ zIndex: 2 }}
                      className="owl-prev snbpsd1 snbpd"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      style={{ zIndex: 2 }}
                      className="owl-next snbnsd1 snbpd"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </Swiper>
              </GallaryWrapper>
              {/* <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={4}
                className="owl-carousel owl-theme owl-none"
              >
                {items.map((elm, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="item">
                      <div className="dlab-media">
                        <Image alt="" src={elm.src} width="250" height="294" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-12">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="cart sticky-top"
            >
              <div className="dlab-post-title">
                <h4 className="post-title">
                  <a href="#">Power Control Centers (PCC) Panel</a>
                </h4>
                <p className="m-b10">
                  Power Control Centers (PCC) Panel, in which your main incomer
                  is directly connected to your LT transformer either by bus
                  duct or cable & all protection given to this incomer i.e. over
                  current & earth fault relay, restricted earth fault relay.
                  Also, this panels have DG incomer as per client requirement of
                  continues power supply even if main supply will be OFF. PCC
                  Panel also includes outgoing feeders like PDB, MLDB and APFC &
                  MCC feeders' incomer.
                </p>
                <div className="dlab-divider bg-gray tb15">
                  <i className="icon-dot c-square" />
                </div>
              </div>
              <div className="relative">
                {/* <h3 className="m-tb10">$2,140.00</h3> */}
                <div className="shop-item-rating">
                  <span className="rating-bx">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                  </span>
                  <span>4.5 Rating</span>
                </div>
              </div>
              {/* <div className="shop-item-tage">
                <span>Tags :- </span>
                <a href="#">Shoes,</a>
                <a href="#">Clothing</a>
                <a href="#">T-shirts</a>
              </div>
              <div className="dlab-divider bg-gray tb15">
                <i className="icon-dot c-square" />
              </div>
              <div className="row">
                <div className="m-b30 col-md-7 col-sm-8">
                  <h6>Product Size</h6>
                  <div
                    className="btn-group product-item-size"
                    data-bs-toggle="buttons"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio1"
                      id="btnradio11"
                      defaultChecked
                    />
                    <label className="btn" htmlFor="btnradio11">
                      XS
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio1"
                      id="btnradio21"
                    />
                    <label className="btn" htmlFor="btnradio21">
                      SM
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio1"
                      id="btnradio31"
                    />
                    <label className="btn" htmlFor="btnradio31">
                      MD
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio1"
                      id="btnradio41"
                    />
                    <label className="btn" htmlFor="btnradio41">
                      LG
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio1"
                      id="btnradio51"
                    />
                    <label className="btn" htmlFor="btnradio51">
                      XL
                    </label>
                  </div>
                </div>
                <div className="m-b30 col-md-5 col-sm-4">
                  <h6>Select quantity</h6>
                  <div className="quantity btn-quantity style-1">
                    <div className="input-group bootstrap-touchspin">
                      <span
                        className="input-group-addon bootstrap-touchspin-prefix"
                        style={{ display: "none" }}
                      />
                      <input
                        id="demo_vertical2"
                        type="text"
                        defaultValue={1}
                        name="demo_vertical2"
                        className="form-control"
                        style={{ display: "block" }}
                      />
                      <span
                        className="input-group-addon bootstrap-touchspin-postfix"
                        style={{ display: "none" }}
                      />
                      <span className="input-group-btn-vertical">
                        <button
                          className="btn btn-color btn-default bootstrap-touchspin-up"
                          type="button"
                        >
                          <i className="ti-plus" />
                        </button>
                        <button
                          className="btn btn-color btn-default bootstrap-touchspin-down"
                          type="button"
                        >
                          <i className="ti-minus" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-b30">
                <h6>Select the color</h6>
                <div
                  className="btn-group product-item-color"
                  data-bs-toggle="buttons"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    defaultChecked
                  />
                  <label className="btn btn-color bg-red" htmlFor="btnradio1" />
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                  />
                  <label
                    className="btn btn-color bg-dark"
                    htmlFor="btnradio2"
                  />
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                  />
                  <label
                    className="btn btn-color bg-yellow"
                    htmlFor="btnradio3"
                  />
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio4"
                  />
                  <label
                    className="btn btn-color bg-blue"
                    htmlFor="btnradio4"
                  />
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio5"
                  />
                  <label
                    className="btn btn-color bg-green"
                    htmlFor="btnradio5"
                  />
                </div>
              </div>
              <button className="site-button radius-no">
                <i className="ti-shopping-cart" /> Add To Cart
              </button> */}

              <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={4}
                className="owl-carousel owl-theme owl-none"
              >
                {items.map((elm, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="item">
                      <div className="dlab-media">
                        <Image alt="" src={elm.src} width="250" height="294" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="dlab-tabs product-description tabs-site-button">
              <ul className="nav nav-tabs">
                <li>
                  <a
                    data-bs-toggle="tab"
                    href="#web-design-1"
                    className="active"
                  >
                    <i className="fas fa-globe" /> Key Specifications:
                  </a>
                </li>
                <li>
                  <a data-bs-toggle="tab" href="#graphic-design-1">
                    <i className="far fa-image" /> Panel Specifications
                  </a>
                </li>
                {/* <li>
                  <a data-bs-toggle="tab" href="#developement-1">
                    <i className="fas fa-cog" /> Product Review
                  </a>
                </li> */}
              </ul>
              <div className="tab-content">
                <div id="web-design-1" className="tab-pane active">
                  <p className="m-b10">
                    PCC Panel stand for Power Control Center also known as Main
                    power Panel ,The Power Control Center Panel works by combine
                    circuits from several places into a single central hub. This
                    enables access to the whole electrical connections of a
                    grid, Industry from a single place. 
                  </p>
                  <p>
                  The electricity for all
                    circuits is controlled by a single main power switch in a
                    PCC panel. When the main Circuit Breaker switch is turned
                    off, the entire electric supply might be temporarily shut
                    down. There are situations, though, when you may need to
                    manage the power for individual components or places.
                  </p>
                  <ul className="list-check primary">
                    <li>
                     High endurance
                    </li>
                    <li>
                    Easy to maintain
                    </li>
                    <li>
                      Efficient power utilization
                    </li>
                    <li>
                      Robust structure
                    </li>
                    <li> CPRI approved </li>
                    <li> Better controllability</li>
                    <li> Hassle-free operation </li>
                    <li>Available in different technical specifications </li>
                    <li>Designed with main panels that are either of draw out or non-draw out type</li>
                  <li> Cubical panels depending on the type of application</li>
                  <li>CPRI Certified products </li>
                  <li> Made in single front design </li>
                  <li>Integration of all necessary protections to meet safety standards</li>
                  </ul>
                </div>
                <div id="graphic-design-1" className="tab-pane">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Voltage</td>

                        <td>
                          {" "}
                          380/415/440V, 50 Hz, 3 Phase &amp; 4 Wire AC System
                        </td>
                      </tr>
                      <tr>
                        <td>Construction Type</td>
                        <td>
                          Cubicle Design / Floor Standing with Single/Double
                          Front for Operation
                        </td>
                      </tr>
                      <tr>
                        <td>Enclosure</td>
                        <td>
                          Fabricated with 1mm/1.6mm/2mm/2.5mm/3mm CRCA MS sheet
                        </td>
                      </tr>
                      <tr>
                        <td>Degree of Protection</td>
                        <td>IP 4X/5X</td>
                      </tr>
                      <tr>
                        <td>Busbar</td>
                        <td>
                          Electrolytic Grade Aluminium/ Electrolytic Grade
                          Copper / Tinned Electrolytic Grade Copper –provided
                          with colored PVC sleeves & of standard current density
                          (1A/sq.mm for Aluminium & 1.6A/sq.mm for Copper) or
                          customer specified current density.
                        </td>
                      </tr>
                      <tr>
                        <td>Enclosure Color</td>
                        <td>
                          RAL 7032 Shade (Industrial Standard) / Customer
                          Specified Color
                        </td>
                      </tr>
                      {/* <tr>
                        <td>Fabric</td>
                        <td>Cotton, Silk &amp; Synthetic</td>
                      </tr>
                      <tr>
                        <td>Warranty</td>
                        <td>3 Months</td>
                      </tr>
                      <tr>
                        <td>Chest</td>
                        <td>33 inches</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
                <div id="developement-1" className="tab-pane">
              
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5 className="m-b20">Related Products</h5>
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
              className="img-carousel-content owl-carousel owl-btn-center-lr owl-btn-1 primary"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="item">
                  <div className={`item-box ${product.styleClass}`}>
                    <div className="item-img">
                      <Image
                        alt=""
                        src={product.imgSrc}
                        width="450"
                        height="514"
                      />
                      <div className="item-info-in">
                        <ul>
                          <li>
                            <a
                              className={
                                isAddedToCartProducts(product.id) ? "added" : ""
                              }
                              onClick={() => addProductToCart(product.id)}
                            >
                              <i className="ti-shopping-cart" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="ti-eye" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="ti-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="item-info text-center text-black p-a10">
                      <h6 className="item-title font-weight-500">
                        <Link href={`/shop-product-details/${product.title}`}>
                          {product.title}
                        </Link>
                      </h6>
                      <ul className="item-review">
                        {[...Array(5)].map((_, i) => (
                          <React.Fragment key={i}>
                            <li>
                              <i
                                className={
                                  i + 1 < product.rating
                                    ? "fas fa-star text-yellow"
                                    : i + 0.5 == product.rating
                                    ? "fas fa-star-half-alt text-yellow"
                                    : "far fa-star"
                                }
                              />
                            </li>{" "}
                          </React.Fragment>
                        ))}
                      </ul>
                      <h4 className="item-price">
                        <del>${product.price}</del>{" "}
                        <span className="text-primary">
                          ${product.discountedPrice}
                        </span>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Product details */}
    </div>
  );
}
