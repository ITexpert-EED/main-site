import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      className="hero-sec hero-section home-slider-14 scrollSpySection"
      id="home"
      style={{
        backgroundImage: 'url("/images/wa001.png")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 relative">
            <div className="content-wrapper full-height">
              <div className="hero-content content-center">
                <h1 className="title style1">
                  Electrical Control Panel Manufactures
                </h1>
                <div className="description style2">
                  Expert Engineers are a fast growing professionally managed
                  engineering company engaged in the manufacturing of custom
                  built low voltage Electrical Control Panels
                  switchboard/control panel catering the needs of building,
                  water, power and industrial sectors through its product to
                  empower and englighten the lives of people.
                </div>
                <Link href="/services-1">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
