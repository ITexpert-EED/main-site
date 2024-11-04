import React from "react";

export default function Facts() {
  return (
    <div
      className="section-full content-inner-1 overlay-black-dark about-8-service bg-img-fix"
      style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
    >
      <div className="container">
        <div className="section-head text-white text-center">
          <h2 className="title-box m-tb0 max-w800 m-auto">
            Amazing things happen to your business when we connect those dots of
            utility and value <span className="bg-primary" />
          </h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row text-white">
          <div className="col-lg-4 col-md-4 m-b30">
            <div className="icon-bx-wraper bx-style-1 p-a30 center">
              <div className="icon-lg text-white m-b20">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-factory" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte text-uppercase">Mechanical Works</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod..
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 m-b30">
            <div className="icon-bx-wraper bx-style-1 p-a30 center">
              <div className="icon-lg text-white m-b20">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-engineer" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte text-uppercase">
                  Power &amp; Energy
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod..
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 m-b30">
            <div className="icon-bx-wraper bx-style-1 p-a30 center">
              <div className="icon-lg text-white m-b20">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-factory-1" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte text-uppercase">
                  Petroleum Refinery
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choses-info text-white">
        <div className="container-fluid">
          <div className="row choses-info-content">
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn"
              data-wow-delay="0.2s"
            >
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="flaticon-alarm-clock m-r10" />
                <span className="counter">15</span>+
              </h2>
              <h4 className="font-weight-300 m-t0">Years in Business</h4>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn"
              data-wow-delay="0.4s"
            >
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="flaticon-worker m-r10" />
                <span className="counter">700</span>+
              </h2>
              <h4 className="font-weight-300 m-t0">Happy Clients</h4>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn"
              data-wow-delay="0.6s"
            >
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="flaticon-settings m-r10" />
                <span className="counter">50</span>+
              </h2>
              <h4 className="font-weight-300 m-t0">Technical Experts</h4>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn"
              data-wow-delay="0.8s"
            >
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="flaticon-presentation m-r10" />
                <span className="counter">200</span>+
              </h2>
              <h4 className="font-weight-300 m-t0">Apps Delivered</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
