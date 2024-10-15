"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryItems2 } from "@/data/gallery";

import { testimonials } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { services } from "@/data/services";
import GallaryWrapper from "../common/GallaryWrapper";
export default function Widget() {
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".card-container",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">All widgets</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>All widgets</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* Breadcrumb row END */}
      <div className="section-full content-inner">
        <div className="container">
          {/* widgets grid start */}
          <div
            id="masonry"
            ref={isotopContainer}
            className="dlab-blog-grid-3 row"
          >
            {/* Search */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20">
                <h4 className="widget-title">Search</h4>
                <div className="search-bx">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                      <input
                        name="text"
                        type="text"
                        className="form-control"
                        placeholder="Write your text"
                      />
                      <span className="input-group-btn">
                        <button type="submit" className="site-button">
                          <i className="fas fa-search" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="search-bx style-1 m-t30">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                      <input
                        name="text"
                        type="text"
                        className="form-control"
                        placeholder="Enter your keywords..."
                      />
                      <span className="input-group-btn">
                        <button
                          type="submit"
                          className="fas fa-search text-primary"
                        />
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Search end*/}
            {/* About Us */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget widget-about bg-white p-a20">
                <h4 className="widget-title">About us</h4>
                <div className="widget-about">
                  <div className="dlab-box">
                    <div className="dlab-media dlab-img-overlay4 radius-sm">
                      <Image
                        alt=""
                        src="/images/about/about1.jpg"
                        width="700"
                        height="479"
                      />
                    </div>
                    <div className="dlab-info">
                      <h5 className="dlab-title text-uppercase">
                        About Us Content
                      </h5>
                      <p className="m-b10">
                        Lorem ipsum dolor consectetur adipiscing Fusce varius
                        euismod lacus eget feugiat rorem ipsum dolor
                        consectetur.
                      </p>
                      <a
                        href="#"
                        className="site-button black outline outline-2 black button-sm"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About Us End*/}
            {/* Search */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget widget-newslatter bg-white p-a20">
                <h4 className="widget-title">Newsletter</h4>
                <div className="news-box">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                  <form
                    className="dzSubscribe"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="dzSubscribeMsg" />
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="site-button btn-block radius-no"
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Search end*/}
            {/* Search */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget widget-project bg-white p-a20">
                <h4 className="widget-title">Our Project</h4>
                <Swiper
                  loop
                  autoplay={{
                    delay: 4000,
                  }}
                  speed={2500}
                  modules={[Pagination, Autoplay]}
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
                  className="widget-project-box owl-none owl-loaded owl-theme owl-carousel dots-style-1"
                >
                  {services.slice(0, 3).map((elm, i) => (
                    <SwiperSlide key={i} className="item">
                      <Image
                        alt=""
                        src={elm.imageSrc}
                        width="500"
                        height="357"
                      />
                    </SwiperSlide>
                  ))}
                  <div className="owl-dots spt2"></div>
                </Swiper>
              </div>
            </div>
            {/* Search end*/}
            {/* Search */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget widget-testimonial bg-white p-a20">
                <h4 className="widget-title">Testimonial Box</h4>
                <Swiper
                  loop
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
                  className="widget-project-box owl-carousel owl-none owl-theme owl-dots-black-full owl-loaded owl-drag text-center"
                >
                  {testimonials.slice(0, 3).map((elm, i) => (
                    <SwiperSlide key={i} className="item">
                      <div className="testimonial">
                        <div className="testimonial-pic radius shadow">
                          <Image
                            alt=""
                            width={100}
                            height={100}
                            src={elm.image}
                          />
                        </div>
                        <div className="testimonial-text">
                          <p>{elm.text.split(" ").slice(0, 18).join(" ")}</p>
                        </div>
                        <div className="testimonial-detail">
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
                  <div className="owl-dots spt1"></div>
                </Swiper>
              </div>
            </div>
            {/* Search end*/}
            {/* Recent Posts */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 recent-posts-entry">
                <h4 className="widget-title">Recent Posts</h4>
                <div className="widget-post-bx">
                  <div className="widget-post clearfix">
                    <div className="dlab-post-media">
                      <Image
                        width={200}
                        height={143}
                        alt=""
                        src="/images/blog/recent-blog/pic1.jpg"
                      />
                    </div>
                    <div className="dlab-post-info">
                      <div className="dlab-post-meta">
                        <ul>
                          <li className="post-author">
                            By <a href="#">Jone</a>
                          </li>
                          <li className="post-comment">28</li>
                        </ul>
                      </div>
                      <div className="dlab-post-header">
                        <h6 className="post-title">
                          <a href="#">Title of first blog post entry</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="widget-post clearfix">
                    <div className="dlab-post-media">
                      <Image
                        width={200}
                        height={160}
                        alt=""
                        src="/images/blog/recent-blog/pic2.jpg"
                      />
                    </div>
                    <div className="dlab-post-info">
                      <div className="dlab-post-meta">
                        <ul>
                          <li className="post-author">
                            By <a href="#">Jone</a>
                          </li>
                          <li className="post-comment">28</li>
                        </ul>
                      </div>
                      <div className="dlab-post-header">
                        <h6 className="post-title">
                          <a href="#">Title of first blog post entry</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="widget-post clearfix">
                    <div className="dlab-post-media">
                      <Image
                        width={200}
                        height={160}
                        alt=""
                        src="/images/blog/recent-blog/pic3.jpg"
                      />
                    </div>
                    <div className="dlab-post-info">
                      <div className="dlab-post-meta">
                        <ul>
                          <li className="post-author">
                            By <a href="#">Jone</a>
                          </li>
                          <li className="post-comment">28</li>
                        </ul>
                      </div>
                      <div className="dlab-post-header">
                        <h6 className="post-title">
                          <a href="#">Title of first blog post entry</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Posts END*/}
            {/* Categories List */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 widget_categories">
                <h4 className="widget-title">Categories List</h4>
                <ul>
                  <li>
                    <a href="#">aciform</a> (1)
                  </li>
                  <li>
                    <a href="#">championship</a> (1)
                  </li>
                  <li>
                    <a href="#">chastening</a> (1)
                  </li>
                  <li>
                    <a href="#">clerkship</a> (1)
                  </li>
                  <li>
                    <a href="#">disinclination</a> (1)
                  </li>
                  <li>
                    <a href="#">disinfection</a> (1)
                  </li>
                  <li>
                    <a href="#">dispatch</a> (1)
                  </li>
                  <li>
                    <a href="#">echappee</a> (1)
                  </li>
                  <li>
                    <a href="#">Edge Case</a> (6)
                  </li>
                  <li>
                    <a href="#">enphagy</a> (1)
                  </li>
                </ul>
              </div>
            </div>
            {/* Categories List END */}
            {/* Tags */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 widget_tag_cloud">
                <h4 className="widget-title">Tags</h4>
                <div className="tagcloud">
                  <a href="#">Design</a>
                  <a href="#">User interface</a>
                  <a href="#">SEO</a>
                  <a href="#">WordPress</a>
                  <a href="#">Development</a>
                  <a href="#">Joomla</a>
                  <a href="#">Design</a>
                  <a href="#">User interface</a>
                  <a href="#">SEO</a>
                  <a href="#">WordPress</a>
                  <a href="#">Development</a>
                  <a href="#">Joomla</a>
                  <a href="#">Design</a>
                  <a href="#">User interface</a>
                  <a href="#">SEO</a>
                  <a href="#">WordPress</a>
                  <a href="#">Development</a>
                  <a href="#">Joomla</a>
                </div>
              </div>
            </div>
            {/* Tags END*/}
            {/* Contact us */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 widget_getintuch">
                <h4 className="widget-title">Contact us</h4>
                <ul>
                  <li>
                    <i className="ti-location-pin" />
                    <strong>address</strong> demo address #8901 Marmora Road Chi
                    Minh City, Vietnam
                  </li>
                  <li>
                    <i className="ti-mobile" />
                    <strong>phone</strong>
                    <a href="tel:+4733378901">0800-123456 </a> (24/7 Support
                    Line)
                    <br />+ (20) 1234 0078 (Fax)
                  </li>
                  <li>
                    <i className="ti-email" />
                    <strong>email</strong>info@demo.com
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact us END */}
            {/* Our services */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 widget_services">
                <h4 className="widget-title">Our services</h4>
                <ul>
                  <li>
                    <a href="#">Residential Cargo</a>
                  </li>
                  <li>
                    <a href="#">Office Cargo</a>
                  </li>
                  <li>
                    <a href="#">Wall Painting</a>
                  </li>
                  <li>
                    <a href="#">Window Cargo</a>
                  </li>
                  <li>
                    <a href="#">Commercial Cargo</a>
                  </li>
                  <li>
                    <a href="#">Cargo Cargo</a>
                  </li>
                  <li>
                    <a href="#">Water Tank Cargo</a>
                  </li>
                  <li>
                    <a href="#">Cargo Solutions</a>
                  </li>
                  <li>
                    <a href="#">Air Duct Cargo</a>
                  </li>
                  <li>
                    <a href="#">Seasonal Cargo</a>
                  </li>
                  <li>
                    <a href="#">Wodden Floor Cargo</a>
                  </li>
                  <li>
                    <a href="#">Office Cargo</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Our services END */}
            {/* Our services */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 widget_gallery">
                <h4 className="widget-title">Our Gallery</h4>
                <GallaryWrapper>
                  <ul id="lightgallery" className="lightgallery m-b0">
                    {galleryItems2.slice(0, 6).map((elm, i) => (
                      <li key={i}>
                        <div className="dlab-post-thum dlab-img-effect">
                          <span
                            className="check-km "
                            data-exthumbimage={elm.src}
                            data-src={elm.src}
                            title="Image 1 Title will come here"
                          >
                            <Image
                              alt=""
                              src={elm.src}
                              width="480"
                              height="430"
                            />
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>{" "}
                </GallaryWrapper>
              </div>
            </div>
            {/* Our services END */}
            {/* Archives List */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-1 widget_archive">
                <h4 className="widget-title">Archives List</h4>
                <ul>
                  <li>
                    <a href="#">May 2016</a>(1)
                  </li>
                  <li>
                    <a href="#">January 2013</a>(5)
                  </li>
                  <li>
                    <a href="#">March 2012</a>(5)
                  </li>
                  <li>
                    <a href="#">January 2012</a>(6)
                  </li>
                  <li>
                    <a href="#">March 2011</a>(1)
                  </li>
                  <li>
                    <a href="#">October 2010</a>(1)
                  </li>
                  <li>
                    <a href="#">September 2010</a>(2)
                  </li>
                  <li>
                    <a href="#">August 2010</a>(3)
                  </li>
                  <li>
                    <a href="#">July 2010</a>(1)
                  </li>
                  <li>
                    <a href="#">June 2010</a>(3)
                  </li>
                  <li>
                    <a href="#">May 2010</a>(1)
                  </li>
                  <li>
                    <a href="#">April 2010</a>(1)
                  </li>
                  <li>
                    <a href="#">March 2010</a>(1)
                  </li>
                  <li>
                    <a href="#">February 2010</a>(1)
                  </li>
                  <li>
                    <a href="#">January 2010</a>(1)
                  </li>
                  <li>
                    <a href="#">October 2009</a>(1)
                  </li>
                  <li>
                    <a href="#">September 2009</a>(1)
                  </li>
                  <li>
                    <a href="#">August 2009</a>(1)
                  </li>
                  <li>
                    <a href="#">July 2009</a>(1)
                  </li>
                  <li>
                    <a href="#">June 2009</a>(1)
                  </li>
                  <li>
                    <a href="#">May 2009</a>(1)
                  </li>
                </ul>
              </div>
            </div>
            {/* Archives List END*/}
            {/* Archives Dropdown */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-2 widget_archive">
                <h4 className="widget-title">Archives Dropdown</h4>
                <label
                  htmlFor="archives-dropdown--1"
                  className="screen-reader-text"
                >
                  Archives Dropdown
                </label>
                <select className="form-select form-select-lg type-2">
                  <option value="">Select Month</option>
                  <option value="date">May 2016 (1)</option>
                  <option value="date">January 2013 (5)</option>
                  <option value="date">March 2012 (5)</option>
                  <option value="date">January 2012 (6)</option>
                  <option value="date">March 2011 (1)</option>
                  <option value="date">October 2010 (1)</option>
                  <option value="date">September 2010 (2)</option>
                  <option value="date">August 2010 (3)</option>
                  <option value="date">July 2010 (1)</option>
                  <option value="date">June 2010 (3)</option>
                  <option value="date">May 2010 (1)</option>
                  <option value="date">April 2010 (1)</option>
                  <option value="date">March 2010 (1)</option>
                  <option value="date">February 2010 (1)</option>
                  <option value="date">January 2010 (1)</option>
                  <option value="date">October 2009 (1)</option>
                  <option value="date">September 2009 (1)</option>
                  <option value="date">August 2009 (1)</option>
                  <option value="date">July 2009 (1)</option>
                  <option value="date">June 2009 (1)</option>
                  <option value="date">May 2009 (1)</option>
                </select>
              </div>
            </div>
            {/* Archives Dropdown END */}
            {/* Calendar */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-3 widget_calendar">
                <h4 className="widget-title">Calendar</h4>
                <div className="calendar_wrap" id="calendar_wrap">
                  <table className="mb-0" id="wp-calendar">
                    <caption>May 2016</caption>
                    <thead>
                      <tr>
                        <th title="Monday" scope="col">
                          M
                        </th>
                        <th title="Tuesday" scope="col">
                          T
                        </th>
                        <th title="Wednesday" scope="col">
                          W
                        </th>
                        <th title="Thursday" scope="col">
                          T
                        </th>
                        <th title="Friday" scope="col">
                          F
                        </th>
                        <th title="Saturday" scope="col">
                          S
                        </th>
                        <th title="Sunday" scope="col">
                          S
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pad" colSpan={6} />
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td id="today">20</td>
                        <td>21</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>
                          <a href="#">29</a>
                        </td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>31</td>
                        <td colSpan={5} className="pad" />
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td id="prev" colSpan={3}>
                          <a href="#">« Jan</a>
                        </td>
                        <td className="pad" />
                        <td className="pad" id="next" colSpan={3} />
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            {/* Calendar END */}
            {/* Categories Dropdown */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-5">
                <h4 className="widget-title">Categories Dropdown</h4>
                <label htmlFor="cat" className="screen-reader-text">
                  Categories Dropdown
                </label>

                <select className="form-select form-select-lg type-2">
                  <option value={-1}>Select Category</option>
                  <option value={3} className="level-0">
                    aciform(1)
                  </option>
                  <option value={47} className="level-1">
                    sub(1)
                  </option>
                  <option value={4} className="level-0">
                    antiquarianism(1)
                  </option>
                  <option value={5} className="level-0">
                    arrangement(1)
                  </option>
                </select>
              </div>
            </div>
            {/* Categories Dropdown END*/}
            {/* Pages */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-6 widget_pages">
                <h4 className="widget-title">Pages</h4>
                <ul>
                  <li className="page_item">
                    <a href="#">Blog</a>
                  </li>
                  <li className="page_item">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="page_item">
                    <a href="#">Front Page</a>
                  </li>
                  <li className="page_item">
                    <a href="#">My Account</a>
                  </li>
                  <li className="page_item">
                    <a href="#">Sample Page</a>
                  </li>
                  <li className="page_item">
                    <a href="#">About The Tests</a>
                    <ul className="children">
                      <li className="page_item">
                        <a href="#">Page Image Alignment</a>
                      </li>
                      <li className="page_item">
                        <a href="#">Page Markup And Formatting</a>
                      </li>
                      <li className="page_item">
                        <a href="#">Clearing Floats</a>
                      </li>
                      <li className="page_item">
                        <a href="#">Page with comments</a>
                      </li>
                      <li className="page_item">
                        <a href="#">Page with comments disabled</a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_item">
                    <a href="#">Level 1</a>
                    <ul className="children">
                      <li className="page_item">
                        <a href="#">Level 2</a>
                        <ul className="children">
                          <li className="page_item">
                            <a href="#">Level 3</a>
                          </li>
                          <li className="page_item">
                            <a href="#">Level 3a</a>
                          </li>
                          <li className="page_item">
                            <a href="#">Level 3b</a>
                          </li>
                        </ul>
                      </li>
                      <li className="page_item">
                        <a href="#">Level 2a</a>
                      </li>
                      <li className="page_item">
                        <a href="#">Level 2b</a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_item">
                    <a href="#">Lorem Ipsum</a>
                  </li>
                  <li className="page_item">
                    <a href="#">Page A</a>
                  </li>
                  <li className="page_item">
                    <a href="#/">Page B</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Pages END */}
            {/* Meta */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-7 widget_meta">
                <h4 className="widget-title">Meta</h4>
                <ul>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Log in</a>
                  </li>
                  <li>
                    <a href="#">
                      Entries
                      <abbr title="Really Simple Syndication">RSS</abbr>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Comments
                      <abbr title="Really Simple Syndication">RSS</abbr>
                    </a>
                  </li>
                  <li>
                    <a href="#">WordPress.org</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Meta END */}
            {/* Recent Comments */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-8 widget_recent_comments">
                <h4 className="widget-title">Recent Comments</h4>
                <ul id="recentcomments">
                  <li className="recentcomments">
                    <span className="comment-author-link">
                      <a className="url" rel="external" href="#">
                        Mr WordPress
                      </a>
                    </span>
                    on
                    <a href="#">Hello world!</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">
                      <a className="url" rel="external" href="#">
                        Mr WordPress
                      </a>
                    </span>
                    on
                    <a href="#">Hello world!</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">
                      <a className="url" rel="external" href="#">
                        Mr WordPress
                      </a>
                    </span>
                    on
                    <a href="#">Hello world!</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">
                      <a className="url" rel="external" href="#">
                        Mr WordPress
                      </a>
                    </span>
                    on
                    <a href="#">Hello world!</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">
                      <a className="url" rel="external" href="#">
                        Mr WordPress
                      </a>
                    </span>
                    on
                    <a href="#">Hello world!</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">
                      <a className="url" rel="external" href="#">
                        Mr WordPress
                      </a>
                    </span>
                    on
                    <a href="#">Hello world!</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">
                      <a className="url" rel="external" href="#">
                        Mr WordPress
                      </a>
                    </span>
                    on
                    <a href="#">Hello world!</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Recent Comments END */}
            {/* Recent Posts */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-9 widget_recent_entries">
                <h4 className="widget-title">Recent Posts</h4>
                <ul>
                  <li>
                    <a href="#">Hello world!</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Recent Posts END */}
            {/* RSS */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-10 widget_rss">
                <h4 className="widget-title">RSS</h4>
                <ul>
                  <li>
                    <a href="#" className="rsswidget">
                      Sleek Pique
                    </a>
                    <span className="rss-date">May 12, 2016</span>
                    <div className="rssSummary">
                      Pique (pronounced “peek”) made its debut in the
                      WordPress.org repository this week. A spiffy scrolling
                      front-page […]
                    </div>
                    <cite>Kathryn P.</cite>
                  </li>
                  <li>
                    <a href="#" className="rsswidget">
                      Sleek Pique
                    </a>
                    <span className="rss-date">May 12, 2016</span>
                    <div className="rssSummary">
                      Pique (pronounced “peek”) made its debut in the
                      WordPress.org repository this week. A spiffy scrolling
                      front-page […]
                    </div>
                    <cite>Kathryn P.</cite>
                  </li>
                  <li>
                    <a href="#" className="rsswidget">
                      Sleek Pique
                    </a>
                    <span className="rss-date">May 12, 2016</span>
                    <div className="rssSummary">
                      Pique (pronounced “peek”) made its debut in the
                      WordPress.org repository this week. A spiffy scrolling
                      front-page […]
                    </div>
                    <cite>Kathryn P.</cite>
                  </li>
                </ul>
              </div>
            </div>
            {/* RSS END*/}
            {/* Search */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-11 widget_search">
                <h4 className="widget-title">Search</h4>
                <form
                  className="searchform"
                  id="searchform"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label htmlFor="s" className="screen-reader-text">
                      Search for:
                    </label>
                    <input type="text" id="s" name="s" defaultValue="" />
                    <input
                      type="submit"
                      defaultValue="Search"
                      id="searchsubmit"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* Search END */}
            {/* Text */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-12 widget_text">
                <h4 className="widget-title">Text</h4>
                <div className="textwidget">
                  <p>
                    <strong>Large image: Hand Coded</strong>
                    <br />
                    <Image
                      alt=""
                      src="/images/gallery/pic3.jpg"
                      width="480"
                      height="430"
                    />
                    <br />
                    <strong>Large image: linked in a caption</strong>
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <select className="form-select form-select-lg type-2">
                      <option value={0}>First</option>
                      <option value={1}>Second</option>
                      <option value={2}>Third</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
            {/* Text END */}
            {/* Nav Menu */}
            <div className="post card-container col-lg-4 col-md-6 col-sm-6">
              <div className="widget bg-white p-a20 monster-widget-placeholder-14 widget_nav_menu">
                <h4 className="widget-title">Nav Menu</h4>
                <div className="menu-testing-menu-container">
                  <ul className="menu" id="menu-testing-menu">
                    <li className="menu-item" id="menu-item-1046">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="#">Page Image Alignment</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Page Image Alignment</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Page Markup And Formatting</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Page Markup And Formatting</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#">Categories</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="#">Markup</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Post Formats</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Unpublished</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#">Depth</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="#">Level 01</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="#">Level 02</a>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <a href="#">Level 03</a>
                                  <ul className="sub-menu">
                                    <li className="menu-item">
                                      <a href="#">Level 04</a>
                                      <ul className="sub-menu">
                                        <li className="menu-item">
                                          <a href="#">Level 05</a>
                                          <ul className="sub-menu">
                                            <li className="menu-item">
                                              <a href="#">Level 06</a>
                                              <ul className="sub-menu">
                                                <li className="menu-item">
                                                  <a href="#">Level 07</a>
                                                  <ul className="sub-menu">
                                                    <li className="menu-item">
                                                      <a href="#">Level 08</a>
                                                      <ul className="sub-menu">
                                                        <li className="menu-item">
                                                          <a href="#">
                                                            Level 09
                                                          </a>
                                                          <ul className="sub-menu">
                                                            <li className="menu-item">
                                                              <a href="#">
                                                                Level 10
                                                              </a>
                                                            </li>
                                                          </ul>
                                                        </li>
                                                      </ul>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#">Advanced</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="#">Menu Title Attribute</a>
                        </li>
                        <li className="menu-menu">
                          <a href="#">Menu CSS Class</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">New Window / Tab</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#">Menu Description</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Nav Menu END */}
          </div>
          {/* widgets grid END */}
        </div>
      </div>
    </>
  );
}
