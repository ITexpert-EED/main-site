import React from "react";
import Image from "next/image";
import { services10 } from "@/data/services";
import Link from "next/link";
export default function Service() {
  return (
    <div
      className="section-full content-inner bg-gray scrollSpySection"
      id="services"
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Our Services</h2>
          <p>
            Our company offers a range of services including turnkey electrical
            and mechanical projects, bus bar trunking, and automation for load,
            energy, and building management. We also provide solutions in SCADA
            systems, water works, borewell automation, pumps, valves, energy
            audits, and testing services.
          </p>
        </div>
        <div className="row">
          {services10.map((service, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 m-b30 wow ${service.animation}`}
              data-wow-duration="2s"
              data-wow-delay={service.delay}
            >
              <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                <div className="icon-lg m-b20">
                  <Link
                    href={`/services-details/${service.title}`}
                    className="icon-cell"
                  >
                    <Image
                      alt={service.title}
                      src={service.imgSrc}
                      width={70}
                      height={70}
                    />
                  </Link>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte text-uppercase">{service.title}</h5>
                  <p>{service.description}</p>
                  <Link
                    href={`/services-details/${service.title}`}
                    className="site-button btnhover19"
                  >
                    Know more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
