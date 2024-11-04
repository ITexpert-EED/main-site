import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Animations() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Animation Effects</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Animation Effects</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* Breadcrumb row END */}
      <div className="bg-white">
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="animation-effects">
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounce fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">Bounce</h4>
                            <p className="m-b5">Bounce Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounce fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">Bounce</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounce fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">Bounce</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow flash fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">flash</h4>
                            <p className="m-b5">flash Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow flash fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">flash</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow flash fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">flash</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow pulse fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">pulse</h4>
                            <p className="m-b5">pulse Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow pulse fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">pulse</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow pulse fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">pulse</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rubberBand fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rubberBand</h4>
                            <p className="m-b5">rubberBand Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rubberBand fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">rubberBand</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rubberBand fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rubberBand</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow shake fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">shake</h4>
                            <p className="m-b5">shake Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow shake fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">shake</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow shake fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">shake</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow headShake fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">headShake</h4>
                            <p className="m-b5">headShake Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow headShake fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">headShake</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow headShake fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">headShake</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow swing fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">swing</h4>
                            <p className="m-b5">swing Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow swing fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">swing</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow swing fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">swing</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow tada fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">tada</h4>
                            <p className="m-b5">tada Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow tada fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">tada</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow tada fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">tada</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow wobble fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">wobble</h4>
                            <p className="m-b5">wobble Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow wobble fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">wobble</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow wobble fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">wobble</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow jello fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">jello</h4>
                            <p className="m-b5">jello Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow jello fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">jello</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow jello fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">jello</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow jackInTheBox fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">jackInTheBox</h4>
                            <p className="m-b5">
                              jackInTheBox Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow jackInTheBox fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        jackInTheBox
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow jackInTheBox fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">jackInTheBox</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceIn fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceIn</h4>
                            <p className="m-b5">bounceIn Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceIn fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">bounceIn</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceIn fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceIn</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceInDown fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceInDown</h4>
                            <p className="m-b5">
                              bounceInDown Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceInDown fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        bounceInDown
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceInDown fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceInDown</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceInLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceInLeft</h4>
                            <p className="m-b5">
                              bounceInLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceInLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        bounceInLeft
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceInLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceInLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceInRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceInRight</h4>
                            <p className="m-b5">
                              bounceInRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceInRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        bounceInRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceInRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceInRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceInUp fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceInUp</h4>
                            <p className="m-b5">bounceInUp Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceInUp fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">bounceInUp</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceInUp fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceInUp</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceOut fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceOut</h4>
                            <p className="m-b5">bounceOut Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceOut fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">bounceOut</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceOut fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceOut</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceOutDown fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceOutDown</h4>
                            <p className="m-b5">
                              bounceOutDown Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceOutDown fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        bounceOutDown
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceOutDown fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceOutDown</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceOutLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceOutLeft</h4>
                            <p className="m-b5">
                              bounceOutLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceOutLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        bounceOutLeft
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceOutLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceOutLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceOutRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceOutRight</h4>
                            <p className="m-b5">
                              bounceOutRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceOutRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        bounceOutRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceOutRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceOutRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow bounceOutUp fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">bounceOutUp</h4>
                            <p className="m-b5">
                              bounceOutUp Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow bounceOutUp fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">bounceOutUp</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow bounceOutUp fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">bounceOutUp</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeIn fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeIn</h4>
                            <p className="m-b5">fadeIn Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeIn fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeIn</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeIn fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeIn</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeInDown fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeInDown</h4>
                            <p className="m-b5">fadeInDown Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeInDown fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeInDown</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeInDown fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeInDown</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeInDownBig fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeInDownBig</h4>
                            <p className="m-b5">
                              fadeInDownBig Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeInDownBig fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        fadeInDownBig
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeInDownBig fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeInDownBig</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeInLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeInLeft</h4>
                            <p className="m-b5">fadeInLeft Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeInLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeInLeft</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeInLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeInLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeInLeftBig fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeInLeftBig</h4>
                            <p className="m-b5">
                              fadeInLeftBig Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeInLeftBig fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        fadeInLeftBig
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeInLeftBig fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeInLeftBig</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeInRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeInRight</h4>
                            <p className="m-b5">
                              fadeInRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeInRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeInRight</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeInRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeInRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeInRightBig fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeInRightBig</h4>
                            <p className="m-b5">
                              fadeInRightBig Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeInRightBig fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        fadeInRightBig
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeInRightBig fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeInRightBig</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeInUp fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeInUp</h4>
                            <p className="m-b5">fadeInUp Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeInUp fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeInUp</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeInUp fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeInUp</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeInUpBig fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeInUpBig</h4>
                            <p className="m-b5">
                              fadeInUpBig Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeInUpBig fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeInUpBig</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeInUpBig fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeInUpBig</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeOut fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeOut</h4>
                            <p className="m-b5">fadeOut Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeOut fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeOut</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeOut fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeOut</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeOutDown fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeOutDown</h4>
                            <p className="m-b5">
                              fadeOutDown Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeOutDown fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeOutDown</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeOutDown fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeOutDown</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeOutDownBig fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeOutDownBig</h4>
                            <p className="m-b5">
                              fadeOutDownBig Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeOutDownBig fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        fadeOutDownBig
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeOutDownBig fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeOutDownBig</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeOutLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeOutLeft</h4>
                            <p className="m-b5">
                              fadeOutLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeOutLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeOutLeft</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeOutLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeOutLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeOutLeftBig fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeOutLeftBig</h4>
                            <p className="m-b5">
                              fadeOutLeftBig Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeOutLeftBig fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        fadeOutLeftBig
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeOutLeftBig fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeOutLeftBig</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeOutRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeOutRight</h4>
                            <p className="m-b5">
                              fadeOutRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeOutRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        fadeOutRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeOutRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeOutRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeOutRightBig fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeOutRightBig</h4>
                            <p className="m-b5">
                              fadeOutRightBig Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeOutRightBig fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        fadeOutRightBig
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeOutRightBig fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeOutRightBig</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeOutUp fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeOutUp</h4>
                            <p className="m-b5">fadeOutUp Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeOutUp fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">fadeOutUp</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeOutUp fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeOutUp</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow fadeOutUpBig fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">fadeOutUpBig</h4>
                            <p className="m-b5">
                              fadeOutUpBig Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow fadeOutUpBig fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        fadeOutUpBig
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow fadeOutUpBig fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">fadeOutUpBig</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow flipInX fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">flipInX</h4>
                            <p className="m-b5">flipInX Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow flipInX fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">flipInX</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow flipInX fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">flipInX</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow flipInY fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">flipInY</h4>
                            <p className="m-b5">flipInY Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow flipInY fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">flipInY</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow flipInY fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">flipInY</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow flipOutX fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">flipOutX</h4>
                            <p className="m-b5">flipOutX Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow flipInY fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">flipOutX</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow flipInY fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">flipOutX</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow flipOutY fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">flipOutY</h4>
                            <p className="m-b5">flipOutY Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow flipOutY fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">flipOutY</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow flipOutY fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">flipOutY</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow lightSpeedIn fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">lightSpeedIn</h4>
                            <p className="m-b5">
                              lightSpeedIn Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow lightSpeedIn fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        lightSpeedIn
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow lightSpeedIn fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">lightSpeedIn</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow lightSpeedOut fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">lightSpeedOut</h4>
                            <p className="m-b5">
                              lightSpeedOut Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow lightSpeedOut fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        lightSpeedOut
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow lightSpeedOut fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">lightSpeedOut</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateIn fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateIn</h4>
                            <p className="m-b5">rotateIn Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateIn fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">rotateIn</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateIn fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateIn</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateInDownLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateInDownLeft</h4>
                            <p className="m-b5">
                              rotateInDownLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateInDownLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateInDownLeft
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateInDownLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateInDownLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateInDownRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateInDownRight</h4>
                            <p className="m-b5">
                              rotateInDownRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateInDownRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateInDownRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateInDownRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateInDownRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateInDownRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateInDownRight</h4>
                            <p className="m-b5">
                              rotateInDownRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateInDownRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateInDownRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateInDownRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateInDownRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateInUpLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateInUpLeft</h4>
                            <p className="m-b5">
                              rotateInUpLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateInUpLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateInUpLeft
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateInUpLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateInUpLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateInUpRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateInUpRight</h4>
                            <p className="m-b5">
                              rotateInUpRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateInUpRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateInUpRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateInUpRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateInUpRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateOut fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateOut</h4>
                            <p className="m-b5">rotateOut Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateOut fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">rotateOut</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateOut fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateOut</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateOutDownLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateOutDownLeft</h4>
                            <p className="m-b5">
                              rotateOutDownLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateOutDownLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateOutDownLeft
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateOutDownLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateOutDownLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateOutDownRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateOutDownRight</h4>
                            <p className="m-b5">
                              rotateOutDownRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateOutDownRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateOutDownRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateOutDownRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateOutDownRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateOutUpLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateOutUpLeft</h4>
                            <p className="m-b5">
                              rotateOutUpLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateOutUpLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateOutUpLeft
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateOutUpLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateOutUpLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateOutUpRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateOutUpRight</h4>
                            <p className="m-b5">
                              rotateOutUpRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateOutUpRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateOutUpRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateOutUpRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateOutUpRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rotateOutUpRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rotateOutUpRight</h4>
                            <p className="m-b5">
                              rotateOutUpRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rotateOutUpRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        rotateOutUpRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rotateOutUpRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rotateOutUpRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow hinge fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">hinge</h4>
                            <p className="m-b5">hinge Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow hinge fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">hinge</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow hinge fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">hinge</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rollIn fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rollIn</h4>
                            <p className="m-b5">rollIn Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rollIn fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">rollIn</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rollIn fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rollIn</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow rollOut fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">rollOut</h4>
                            <p className="m-b5">rollOut Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow rollOut fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">rollOut</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow rollOut fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">rollOut</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomIn fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomIn</h4>
                            <p className="m-b5">zoomIn Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomIn fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomIn</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomIn fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomIn</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomInDown fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomInDown</h4>
                            <p className="m-b5">zoomInDown Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomInDown fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomInDown</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomInDown fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomInDown</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomInLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomInLeft</h4>
                            <p className="m-b5">zoomInLeft Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomInLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomInLeft</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomInLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomInLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomInLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomInLeft</h4>
                            <p className="m-b5">zoomInLeft Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomInLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomInLeft</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomInLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomInLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomInRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomInRight</h4>
                            <p className="m-b5">
                              zoomInRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomInRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomInRight</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomInRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomInRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomInUp fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomInUp</h4>
                            <p className="m-b5">zoomInUp Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomInUp fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomInUp</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomInUp fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomInUp</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomOut fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomOut</h4>
                            <p className="m-b5">zoomOut Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomOut fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomOut</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomOut fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomOut</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomOutDown fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomOutDown</h4>
                            <p className="m-b5">
                              zoomOutDown Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomOutDown fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomOutDown</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomOutDown fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomOutDown</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomOutLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomOutLeft</h4>
                            <p className="m-b5">
                              zoomOutLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomOutLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomOutLeft</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomOutLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomOutLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomOutLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomOutLeft</h4>
                            <p className="m-b5">
                              zoomOutLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomOutLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomOutLeft</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomOutLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomOutLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomOutRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomOutRight</h4>
                            <p className="m-b5">
                              zoomOutRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomOutRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        zoomOutRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomOutRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomOutRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow zoomOutUp fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">zoomOutUp</h4>
                            <p className="m-b5">zoomOutUp Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow zoomOutUp fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">zoomOutUp</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow zoomOutUp fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">zoomOutUp</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow slideInDown fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">slideInDown</h4>
                            <p className="m-b5">
                              slideInDown Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow slideInDown fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">slideInDown</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow slideInDown fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">slideInDown</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow slideInLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">slideInLeft</h4>
                            <p className="m-b5">
                              slideInLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow slideInLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">slideInLeft</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow slideInLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">slideInLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow slideInRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">slideInRight</h4>
                            <p className="m-b5">
                              slideInRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow slideInRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        slideInRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow slideInRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">slideInRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow slideInUp fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">slideInUp</h4>
                            <p className="m-b5">slideInUp Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow slideInUp fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">slideInUp</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow slideInUp fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">slideInUp</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow slideOutDown fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">slideOutDown</h4>
                            <p className="m-b5">
                              slideOutDown Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow slideOutDown fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        slideOutDown
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow slideOutDown fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">slideOutDown</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow slideOutLeft fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">slideOutLeft</h4>
                            <p className="m-b5">
                              slideOutLeft Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow slideOutLeft fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        slideOutLeft
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow slideOutLeft fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">slideOutLeft</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow slideOutRight fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">slideOutRight</h4>
                            <p className="m-b5">
                              slideOutRight Animation Effects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow slideOutRight fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        slideOutRight
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow slideOutRight fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">slideOutRight</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dzseth">
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box img-hvr-content-style-1 no-hover wow slideOutUp fly-box-ho"
                    data-wow-delay="0.3s"
                  >
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect no-hover">
                      <Image
                        className="img-cover"
                        alt=""
                        src="/images/our-work/pic1.jpg"
                        width="700"
                        height="500"
                      />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white">
                            <h4 className="m-b5">slideOutUp</h4>
                            <p className="m-b5">slideOutUp Animation Effects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="icon-bx-wraper bx-style-1 bg-white p-a30 center wow slideOutUp fly-box-ho seth"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-sm radius bg-primary text-white m-b20">
                      <a href="#" className="icon-cell">
                        <i className="ti-ruler-pencil" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">slideOutUp</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 m-b30">
                  <div
                    className="dlab-box-bg active wow slideOutUp fly-box-ho seth"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: "url(/images/our-work/pic2.jpg)",
                    }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b30">
                        <span className="icon-cell icon-sm">
                          <i className="ti-heart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte m-b10">slideOutUp</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.Lorem Ipsum is simply dummy
                          text.
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-btn text-center">
                      <a href="#" className="site-button btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
