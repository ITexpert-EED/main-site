import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      className="hero-sec hero-section home-slider-14 scrollSpySection"
      id="home"
      style={{
        backgroundImage: 'url("/images/main-slider/slide14bg.jpg")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 relative">
            <div className="content-wrapper full-height">
              <div className="hero-content content-center">
                <h1 className="title style2">Auto Mobile industry</h1>
                <div className="description style2">
                  With 19+ years’ experience in combining traditions and
                  innovations, Arty creates settings to inspire the way people
                  live, learn, heal, work and play.
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
