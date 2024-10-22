"use client";
import { blogPosts5 } from "@/data/blogs";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Blogs() {
  return (
    <div
      className="section-full content-inner bg-white scrollSpySection"
      id="latestnews"
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Latest News</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
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
          modules={[Autoplay]}
          className="blog-carousel owl-carousel owl-btn-3 owl-btn-center-lr"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {blogPosts5.map((post, index) => (
            <SwiperSlide
              key={index}
              className="item wow bounceInUp"
              data-wow-duration="2s"
              data-wow-delay={post.delay}
            >
              <div className="blog-post blog-grid blog-rounded blog-effect1">
                <div className="dlab-post-media dlab-img-effect">
                  <a href="#">
                    <Image
                      src={post.imageUrl}
                      width={500}
                      height={357}
                      alt=""
                    />
                  </a>
                </div>
                <div className="dlab-info p-a20 border-1">
                  <div className="dlab-post-meta">
                    <ul>
                      <li className="post-date">
                        <strong>{post.date.day}</strong>{" "}
                        <span>{post.date.year}</span>
                      </li>
                      <li className="post-author">
                        By <a href="#">{post.author}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link href={`/blog-single/${post.title}`}>
                        {post.title}
                      </Link>
                    </h4>
                  </div>
                  <div className="dlab-post-text">
                    <p>{post.description}</p>
                  </div>
                  <div className="dlab-post-readmore">
                    <Link
                      href={`/blog-single/${post.title}`}
                      title="READ MORE"
                      rel="bookmark"
                      className="site-button btnhover19"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
