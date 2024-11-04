"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { posts3 } from "@/data/blogs";
import { footerLinks, socialLinks } from "@/data/footerLinks";
export default function Footer2() {
  return (
    <footer className="site-footer style2">
      {/* Footer Info */}
      <div
        className="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.6s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                <div className="icon-content">
                  <h5 className="dlab-tilte">
                    <span className="icon-sm">
                      <i className="ti-location-pin" />
                    </span>
                    Company Address
                  </h5>
                  <p className="op7">
                    Demo address #8901 Marmora Road Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                <div className="icon-content">
                  <h5 className="dlab-tilte">
                    <span className="icon-sm">
                      <i className="ti-email" />
                    </span>
                    E-mail
                  </h5>
                  <p className="m-b0 op7">
                    <a href="mailto:someone@example.com">info@example.com</a>
                  </p>
                  <p className="op7">
                    <a href="mailto:someone@example.com">company@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                <div className="icon-content">
                  <h5 className="dlab-tilte">
                    <span className="icon-sm">
                      <i className="ti-mobile" />
                    </span>
                    Phone Numbers
                  </h5>
                  <p className="m-b0 op7">
                    Mobile : <a href="tel:+4733378901">+00 234 678 9012</a>
                  </p>
                  <p className="op7">
                    Phone : <a href="tel:+4733378901">+0 1234 5678 90</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                <div className="icon-content">
                  <h5 className="dlab-tilte">
                    <span className="icon-sm">
                      <i className="ti-alarm-clock" />
                    </span>
                    Office Hours
                  </h5>
                  <p className="m-b0 op7">Mon To Sat - 08.00-18.00</p>
                  <p className="op7">Sunday - Close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Info End */}
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="widget widget_about">
                <div className="footer-logo logo-dark">
                  <Link href={`/`}>
                    <img
                      alt=""
                      src="/images/logo.png"
                      width="258"
                      height="75"
                    />
                  </Link>
                </div>
                <p>
                  Industry Lorem Ipsum has been the industry's standard dummy
                  text ever since the when an printer took a galley of type and
                  scrambled it to make.
                </p>
                <div className="widget widget_getintuch">
                  <ul>
                    <li>
                      <i className="ti-location-pin" /> demo address #8901
                      Marmora Road Chi Minh City, Vietnam
                    </li>
                    <li>
                      <i className="ti-mobile" />
                      <a href="tel:+4733378901">0800-123456 </a> (24/7 Support
                      Line)
                    </li>
                    <li>
                      <i className="ti-email" />
                      <a href="mailto:someone@example.com">info@example.com</a>
                    </li>
                  </ul>
                </div>
                <ul className="list-inline m-a0">
                  {socialLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <li>
                        <a
                          href={link.href}
                          className={`site-button-link button-md ${link.className}`}
                        >
                          <i className={link.iconClass} />
                        </a>
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget">
                <h4 className="footer-title">Usefull Link</h4>
                <ul className="list-2">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="widget">
                <h4 className="footer-title mb-2">Newsletter</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="subscribe-form m-b20 m-t30">
                  <form
                    className="dzSubscribe"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="dzSubscribeMsg" />
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        className="form-control radius-no"
                        placeholder="Your Email Address"
                        type="email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button radius-no"
                        >
                          SEND
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget recent-posts-entry">
                <h4 className="footer-title">Recent Post</h4>
                <div className="widget-post-bx">
                  {posts3.map((post, index) => (
                    <div className="widget-post clearfix" key={index}>
                      <div className="dlab-post-media">
                        <Image
                          width={post.imageWidth}
                          height={post.imageHeight}
                          alt=""
                          src={post.imageSrc}
                        />
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-date">
                              <strong>{post.date}</strong>
                            </li>
                            <li className="post-author">
                              By <a href="#">{post.author}</a>
                            </li>
                          </ul>
                        </div>
                        <div className="dlab-post-header">
                          <h6 className="post-title">
                            <Link
                              href={`/blog-single-left-sidebar/${post.title}`}
                            >
                              {post.title}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Top End */}
    </footer>
  );
}
