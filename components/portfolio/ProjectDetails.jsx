import React from "react";
import Image from "next/image";
export default function ProjectDetails({ projectItem }) {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-b30">
            <h2 className="text-black font-weight-600 m-b15">
              {projectItem.title}
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the when an printer took a galley of type and scrambled
              it to make.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the when an printer took a galley of type and scrambled
              it to make.
            </p>
            <div className="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-user" />
                  <strong>CLIENT</strong> Martin Stewart
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-location-pin" />
                  <strong>LOCATION</strong>London, UK
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-ruler-alt-2" />
                  <strong>SIZE</strong>1,200m<sup>2</sup>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-home" />
                  <strong>TYPE</strong>Residential Project
                </div>
              </div>
            </div>
            <h2 className="text-black font-weight-600 m-b15">Scoope Of Work</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the when an printer took a galley of type and scrambled
              it to make.
            </p>
            <div className="row">
              <div className="col-lg-12">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-factory" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Material Engineering</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-settings" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Chemical Research</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-worker" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Petroleum Engineering</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/about/pic3.jpg"
                  width="1000"
                  height="674"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/our-services/pic2.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/our-services/pic3.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/about/about2.jpg"
                  width="700"
                  height="479"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
