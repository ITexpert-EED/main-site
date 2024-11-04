import React from "react";
import Link from "next/link";

export default function IconStyles() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Icon box style</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Icon box style</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* Breadcrumb row END */}
      <div className="bg-white">
        {/* content start */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>icon box style 1 aligh center</h4>
                </div>
                {/* icon box style 1 aligh center */}
                <div className="section-content box-sort-in button-example p-b0">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center">
                        <div className="icon-bx-sm bg-primary m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-headphone-alt" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center">
                        <div className="icon-bx-sm radius bg-primary m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-ruler-pencil" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center">
                        <div className="icon-bx-sm text-primary bg-white radius border-1 m-b20">
                          <a href="#" className="icon-cell text-primary">
                            <i className="ti-desktop" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center">
                        <div className="icon-lg text-primary m-b20">
                          <a href="#" className="icon-cell text-primary">
                            <i className="ti-face-smile" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                        <div className="icon-sm m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-headphone-alt" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Unique design
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam.
                          </p>
                          <a href="#" className="site-button">
                            Site Button
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                        <div className="icon-sm m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-ruler-pencil" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Make it Simple
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam.
                          </p>
                          <a href="#" className="site-button">
                            Site Button
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                        <div className="icon-sm m-b20">
                          <a href="#" className="icon-cell text-primary">
                            <i className="ti-desktop" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Different Layout
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam.
                          </p>
                          <a href="#" className="site-button">
                            Site Button
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box">
                        <div className="icon-sm m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-headphone-alt" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Unique design
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam.
                          </p>
                          <a href="#" className="site-button">
                            Site Button
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box">
                        <div className="icon-sm m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-ruler-pencil" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Make it Simple
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam.
                          </p>
                          <a href="#" className="site-button">
                            Site Button
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box">
                        <div className="icon-sm m-b20">
                          <a href="#" className="icon-cell text-primary">
                            <i className="ti-desktop" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Different Layout
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam.
                          </p>
                          <a href="#" className="site-button">
                            Site Button
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div
                        className="dlab-box-bg m-b30 box-hover"
                        style={{
                          backgroundImage: "url(/images/our-work/pic1.jpg)",
                        }}
                      >
                        <div className="icon-bx-wraper center p-lr20 p-tb30">
                          <div className="text-primary m-b30">
                            <span className="icon-cell icon-sm">
                              <i className="ti-ruler-pencil" />
                            </span>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">Unique design</h5>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and type setting industry.Lorem Ipsum is simply
                              dummy text.
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
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div
                        className="dlab-box-bg m-b30 box-hover"
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
                            <h5 className="dlab-tilte">Make it Simple</h5>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and type setting industry.Lorem Ipsum is simply
                              dummy text.
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
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div
                        className="dlab-box-bg m-b30 box-hover active"
                        style={{
                          backgroundImage: "url(/images/our-work/pic3.jpg)",
                        }}
                      >
                        <div className="icon-bx-wraper center p-lr20 p-tb30">
                          <div className="text-primary m-b30">
                            <span className="icon-cell icon-sm">
                              <i className="ti-brush-alt" />
                            </span>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">Different Layout</h5>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and type setting industry.Lorem Ipsum is simply
                              dummy text.
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
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div
                        className="dlab-box-bg m-b30 box-hover"
                        style={{
                          backgroundImage: "url(/images/our-work/pic4.jpg)",
                        }}
                      >
                        <div className="icon-bx-wraper center p-lr20 p-tb30">
                          <div className="text-primary m-b30">
                            <span className="icon-cell icon-sm">
                              <i className="ti-mouse-alt" />
                            </span>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">True Responsiveness</h5>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and type setting industry.Lorem Ipsum is simply
                              dummy text.
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
          {/* icon box style 1 aligh center END */}
        </div>
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>icon box style 1 aligh left</h4>
                </div>
                {/* icon box style 1 aligh left */}
                <div className="section-content box-sort-in button-example p-b0">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a20 left">
                        <div className="icon-bx-xs bg-primary m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-alarm-clock" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit elit nonummy dolor is euismod
                            end..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a20 left">
                        <div className="icon-bx-xs radius bg-primary">
                          <a href="#" className="icon-cell">
                            <i className="ti-agenda" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit elit nonummy dolor is euismod
                            end..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a20 left">
                        <div className="icon-bx-xs text-primary bg-white radius border-1">
                          <a href="#" className="icon-cell">
                            <i className="ti-desktop" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit elit nonummy dolor is euismod
                            end..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a20 left">
                        <div className="icon-sm text-primary m-b20">
                          <a href="#" className="icon-cell text-primary">
                            <i className="ti-world" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit elit nonummy dolor is euismod
                            end..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* icon box style 1 aligh left END */}
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>icon box style 1 aligh right</h4>
                </div>
                {/* icon box style 1 aligh right */}
                <div className="section-content box-sort-in button-example p-b0">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a20 right">
                        <div className="icon-bx-xs bg-primary m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-ruler-pencil" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit elit nonummy dolor is euismod
                            end..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a20 right">
                        <div className="icon-bx-xs radius bg-primary">
                          <a href="#" className="icon-cell">
                            <i className="ti-desktop" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit elit nonummy dolor is euismod
                            end..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a20 right">
                        <div className="icon-bx-xs text-primary bg-white radius border-1">
                          <a href="#" className="icon-cell">
                            <i className="ti-palette" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit elit nonummy dolor is euismod
                            end..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 p-a20 right">
                        <div className="icon-sm text-primary m-b20">
                          <a href="#" className="icon-cell text-primary">
                            <i className="ti-gift" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit elit nonummy dolor is euismod
                            end..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* icon box style 1 aligh right END */}
        </div>
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>icon box style 2 aligh center</h4>
                </div>
                {/* icon box style 2 aligh center */}
                <div className="section-content box-sort-in button-example p-b0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sms-6">
                      <div className="icon-bx-wraper bx-style-2 m-t40 m-b30 p-a30 center">
                        <div className="icon-bx-sm bg-primary m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-image" />
                          </a>
                        </div>
                        <div className="icon-content p-t40">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="icon-bx-wraper bx-style-2 m-t40 m-b30 p-a30 center">
                        <div className="icon-bx-sm radius bg-primary m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-bar-chart" />
                          </a>
                        </div>
                        <div className="icon-content p-t40">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="icon-bx-wraper bx-style-2 m-t40 m-b30 p-a30 center">
                        <div className="icon-bx-sm text-primary bg-white radius border-1 m-b20">
                          <a href="#" className="icon-cell text-primary">
                            <i className="ti-face-smile" />
                          </a>
                        </div>
                        <div className="icon-content p-t40">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* icon box style 2 aligh center END */}
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>icon box style 2 aligh left</h4>
                </div>
                {/* icon box style 2 aligh left */}
                <div className="section-content box-sort-in button-example p-b0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
                        <div className="icon-bx-sm bg-primary m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-face-smile" />
                          </a>
                        </div>
                        <div className="icon-content p-l40">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            sed diam nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
                        <div className="icon-bx-sm radius bg-primary">
                          <a href="#" className="icon-cell">
                            <i className="ti-write" />
                          </a>
                        </div>
                        <div className="icon-content p-l40">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            sed diam nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
                        <div className="icon-bx-sm text-primary bg-white radius border-1">
                          <a href="#" className="icon-cell text-primary">
                            <i className="ti-desktop" />
                          </a>
                        </div>
                        <div className="icon-content p-l40">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            sed diam nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* icon box style 2 aligh left END */}
        </div>
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>icon box style 2 aligh right</h4>
                </div>
                {/* icon box style 2 aligh right */}
                <div className="section-content box-sort-in p-a30 button-example p-b0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-bx-wraper bx-style-2 m-r40 m-b30 p-a30 right">
                        <div className="icon-bx-sm bg-primary m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-face-smile" />
                          </a>
                        </div>
                        <div className="icon-content p-r40">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            sed diam nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-bx-wraper bx-style-2 m-r40 m-b30 p-a30 right">
                        <div className="icon-bx-sm radius bg-primary">
                          <a href="#" className="icon-cell">
                            <i className="ti-calendar" />
                          </a>
                        </div>
                        <div className="icon-content p-r40">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            sed diam nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-bx-wraper bx-style-2 m-r40 m-b30 p-a30 right">
                        <div className="icon-bx-sm text-primary bg-white radius border-1">
                          <a href="#" className="icon-cell text-primary">
                            <i className="ti-printer" />
                          </a>
                        </div>
                        <div className="icon-content p-r40">
                          <h5 className="dlab-tilte text-uppercase">
                            Icon Box
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            sed diam nibh euismod..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* icon box style 2 aligh right END */}
        </div>
        {/* content END */}
      </div>
    </>
  );
}
