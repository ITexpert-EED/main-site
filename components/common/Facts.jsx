import React from "react";

export default function Facts() {
  return (
    <div
      className="section-full content-inner overlay-black-dark bg-img-fix"
      style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
    >
      <div className="container">
        <div className="section-content text-center text-white">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
              <div className="counter-style-5">
                <div className="">
                  <span className="counter">6810</span>
                </div>
                <span className="counter-text">Passionate Employee</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
              <div className="counter-style-5">
                <div className="">
                  <span className="counter">4060</span>
                </div>
                <span className="counter-text">Modern Factory</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
              <div className="counter-style-5">
                <div className="">
                  <span className="counter">3164</span>
                </div>
                <span className="counter-text">Factory in Worldwide</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
              <div className="counter-style-5">
                <div className="">
                  <span className="counter">1852</span>
                </div>
                <span className="counter-text">International Awards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
