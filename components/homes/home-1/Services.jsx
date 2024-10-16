import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Service() {
  return (
    <div className="content-block">
      {/* Content Section */}
      <div className="section-full">
        <div className="row spno about-industry">
          <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/our-work/oilgas/pic1.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title text-black">
                  <span>Mechanical</span> <br />
                  Works
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link
                  href={`/services-2`}
                  className="site-button outline outline-2 btnhover11"
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/our-work/oilgas/pic2.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-secondry text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Power &amp; </span> <br />
                  Energy.
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link
                  href={`/services-2`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/our-work/oilgas/pic3.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Petroleum </span> <br />
                  Refinery.
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link
                  href={`/services-2`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/our-work/oilgas/pic4.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Oil &amp; Gas </span> <br />
                  Industry.
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link
                  href={`/services-2`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 bg-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title text-black">
                  <span>Automative </span> <br />
                  Manufacturing.
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link
                  href={`/services-2`}
                  className="site-button outline outline-2 btnhover11"
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/our-work/oilgas/pic5.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Content Section End */}
    </div>
  );
}
