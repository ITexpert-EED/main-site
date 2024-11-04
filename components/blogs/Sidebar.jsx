"use client";

import { posts2 } from "@/data/blogs";
import { galleryItems3 } from "@/data/gallery";
import Image from "next/image";
import Link from "next/link";

import GallaryWrapper from "../common/GallaryWrapper";
export default function Sidebar() {
  return (
    <aside className="side-bar sticky-top">
      <div className="widget">
        <h5 className="widget-title style-1">Search</h5>
        <div className="search-bx style-1">
          <form role="search" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input
                name="text"
                className="form-control"
                placeholder="Enter your keywords..."
                type="text"
              />
              <span className="input-group-btn">
                <button type="submit" className="fas fa-search text-primary" />
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="widget recent-posts-entry">
        <h5 className="widget-title style-1">Recent Posts</h5>
        <div className="widget-post-bx">
          {posts2.map((post, index) => (
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
                    <Link href={`/blog-single-left-sidebar/${post.title}`}>
                      {post.title}
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="widget widget-newslatter">
        <h5 className="widget-title style-1">Newsletter</h5>
        <div className="news-box">
          <p>Enter your e-mail and subscribe to our newsletter.</p>
          <form className="dzSubscribe" onSubmit={(e) => e.preventDefault()}>
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
      <div className="widget widget_gallery gallery-grid-4">
        <h5 className="widget-title style-1">Our Gallery</h5>

        <ul id="lightgallery" className="lightgallery">
          <GallaryWrapper>
            {galleryItems3.slice(0, 8).map((item, i) => (
              <li
                data-exthumbimage={item.src}
                data-src={item.src}
                title={item.title}
                key={i}
                className="img-effect2"
              >
                <span className="check-km">
                  <Image alt="" src={item.src} width="100" height="90" />
                </span>
              </li>
            ))}{" "}
          </GallaryWrapper>
        </ul>
      </div>
      <div className="widget widget_archive">
        <h5 className="widget-title style-1">Categories List</h5>
        <ul>
          <li>
            <a href="#">Electronic Materials</a>
          </li>
          <li>
            <a href="#">Auto Parts</a>
          </li>
          <li>
            <a href="#">Building Management</a>
          </li>
          <li>
            <a href="#">Power Systems</a>
          </li>
          <li>
            <a href="#">Power &amp; Energy</a>
          </li>
        </ul>
      </div>
      <div className="widget widget-project">
        <h5 className="widget-title style-1">Our Project</h5>
        <div className="widget-project-box owl-none owl-loaded owl-theme owl-carousel dots-style-1 owl-dots-black-full">
          <div className="item">
            <Image
              alt=""
              src="/images/our-services/pic1.jpg"
              width="500"
              height="357"
            />
          </div>
          <div className="item">
            <Image
              alt=""
              src="/images/our-services/pic2.jpg"
              width="500"
              height="357"
            />
          </div>
          <div className="item">
            <Image
              alt=""
              src="/images/our-services/pic3.jpg"
              width="500"
              height="357"
            />
          </div>
        </div>
      </div>
      <div className="widget widget_tag_cloud radius">
        <h5 className="widget-title style-1">Tags</h5>
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
    </aside>
  );
}
