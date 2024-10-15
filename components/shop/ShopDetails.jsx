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
    src: "/images/product/item2/item1.jpg",
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
              id="lightgallery"
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
            </div>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-12">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="cart sticky-top"
            >
              <div className="dlab-post-title">
                <h4 className="post-title">
                  <a href="#">{productsItem.title}</a>
                </h4>
                <p className="m-b10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic.
                </p>
                <div className="dlab-divider bg-gray tb15">
                  <i className="icon-dot c-square" />
                </div>
              </div>
              <div className="relative">
                <h3 className="m-tb10">$2,140.00</h3>
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
              <div className="shop-item-tage">
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
              </button>
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
                    <i className="fas fa-globe" /> Description
                  </a>
                </li>
                <li>
                  <a data-bs-toggle="tab" href="#graphic-design-1">
                    <i className="far fa-image" /> Additional Information
                  </a>
                </li>
                <li>
                  <a data-bs-toggle="tab" href="#developement-1">
                    <i className="fas fa-cog" /> Product Review
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="web-design-1" className="tab-pane active">
                  <p className="m-b10">
                    Suspendisse et justo. Praesent mattis commyolk augue Aliquam
                    ornare hendrerit augue Cras tellus In pulvinar lectus a est
                    Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit. Suspendisse et justo.
                    Praesent mattis commyolk augue aliquam ornare augue.
                  </p>
                  <p>
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences
                  </p>
                  <ul className="list-check primary">
                    <li>
                      "But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and
                    </li>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </li>
                  </ul>
                </div>
                <div id="graphic-design-1" className="tab-pane">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Size</td>
                        <td>Small, Medium &amp; Large</td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>Pink &amp; White</td>
                      </tr>
                      <tr>
                        <td>Rating</td>
                        <td>
                          <span className="rating-bx">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Waist</td>
                        <td>26 cm</td>
                      </tr>
                      <tr>
                        <td>Length</td>
                        <td>40 cm</td>
                      </tr>
                      <tr>
                        <td>Chest</td>
                        <td>33 inches</td>
                      </tr>
                      <tr>
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
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="developement-1" className="tab-pane">
                  <div id="comments">
                    <ol className="commentlist">
                      <li className="comment">
                        <div className="comment_container">
                          <Image
                            className="avatar avatar-60 photo"
                            alt=""
                            src="/images/testimonials/pic1.jpg"
                            width="100"
                            height="100"
                          />
                          <div className="comment-text">
                            <div className="star-rating">
                              <div data-rating={2}>
                                <i
                                  className="fas fa-star text-yellow"
                                  data-alt={1}
                                  title="regular"
                                />
                                <i
                                  className="fas fa-star text-yellow"
                                  data-alt={2}
                                  title="regular"
                                />
                                <i
                                  className="far fa-star text-yellow"
                                  data-alt={3}
                                  title="regular"
                                />
                                <i
                                  className="far fa-star text-yellow"
                                  data-alt={4}
                                  title="regular"
                                />
                                <i
                                  className="far fa-star text-yellow"
                                  data-alt={5}
                                  title="regular"
                                />
                              </div>
                            </div>
                            <p className="meta">
                              <strong className="author">Cobus Bester</strong>
                              <span>
                                <i className="far fa-clock" /> March 7, 2013
                              </span>
                            </p>
                            <div className="description">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment_container">
                          <Image
                            className="avatar avatar-60 photo"
                            alt=""
                            src="/images/testimonials/pic2.jpg"
                            width="100"
                            height="100"
                          />
                          <div className="comment-text">
                            <div className="star-rating">
                              <div data-rating={3}>
                                <i
                                  className="fas fa-star text-yellow"
                                  data-alt={1}
                                  title="regular"
                                />
                                <i
                                  className="fas fa-star text-yellow"
                                  data-alt={2}
                                  title="regular"
                                />
                                <i
                                  className="fas fa-star text-yellow"
                                  data-alt={3}
                                  title="regular"
                                />
                                <i
                                  className="far fa-star text-yellow"
                                  data-alt={4}
                                  title="regular"
                                />
                                <i
                                  className="far fa-star text-yellow"
                                  data-alt={5}
                                  title="regular"
                                />
                              </div>
                            </div>
                            <p className="meta">
                              <strong className="author">Cobus Bester</strong>
                              <span>
                                <i className="far fa-clock" /> March 7, 2013
                              </span>
                            </p>
                            <div className="description">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment_container">
                          <Image
                            className="avatar avatar-60 photo"
                            alt=""
                            src="/images/testimonials/pic3.jpg"
                            width="100"
                            height="100"
                          />
                          <div className="comment-text">
                            <div className="star-rating">
                              <div data-rating={3}>
                                <i
                                  className="fas fa-star text-yellow"
                                  data-alt={1}
                                  title="regular"
                                />
                                <i
                                  className="fas fa-star text-yellow"
                                  data-alt={2}
                                  title="regular"
                                />
                                <i
                                  className="fas fa-star text-yellow"
                                  data-alt={3}
                                  title="regular"
                                />
                                <i
                                  className="fas fa-star text-yellow"
                                  data-alt={4}
                                  title="regular"
                                />
                                <i
                                  className="far fa-star text-yellow"
                                  data-alt={5}
                                  title="regular"
                                />
                              </div>
                            </div>
                            <p className="meta">
                              <strong className="author">Cobus Bester</strong>
                              <span>
                                <i className="far fa-clock" /> March 7, 2013
                              </span>
                            </p>
                            <div className="description">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div id="review_form_wrapper">
                    <div id="review_form">
                      <div id="respond" className="comment-respond">
                        <h3 className="comment-reply-title" id="reply-title">
                          Add a review
                        </h3>
                        <form
                          className="comment-form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="comment-form-author">
                            <label>
                              Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              aria-required="true"
                              size={30}
                              defaultValue=""
                              name="author"
                              id="author"
                            />
                          </div>
                          <div className="comment-form-email">
                            <label>
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              aria-required="true"
                              size={30}
                              defaultValue=""
                              name="email"
                              id="email"
                            />
                          </div>
                          <div className="comment-form-rating">
                            <label className="pull-left m-r20">
                              Your Rating
                            </label>
                            <div className="rating-widget">
                              {/* Rating Stars Box */}
                              <div className="rating-stars">
                                <ul id="stars">
                                  {starRatings.map((st, index) => (
                                    <li
                                      key={index}
                                      className={`star cursor-pointer ${
                                        star >= st.dataValue ? "selected" : ""
                                      }`}
                                      onClick={() => setstar(st.dataValue)}
                                      title={st.title}
                                      data-value={st.dataValue}
                                    >
                                      <i className="fas fa-star fa-fw" />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="comment-form-comment">
                            <label>Your Review</label>
                            <textarea
                              aria-required="true"
                              rows={8}
                              cols={45}
                              name="comment"
                              id="comment"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-submit">
                            <input
                              type="submit"
                              defaultValue="Submit"
                              className="site-button"
                              id="submit"
                              name="submit"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
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
