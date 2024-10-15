import React from "react";
import Image from "next/image";
export default function ServiceDetails({ serviceItem }) {
  return (
    <div className="section-full content-inner">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="widget sidebar-widget ext-sidebar-menu widget_nav_menu">
              <ul className="menu">
                <li>
                  <a href="#">all services</a>
                </li>
                <li className="active">
                  <a href="#">engine diagnostics</a>
                </li>
                <li>
                  <a href="#">lube oil and filters</a>
                </li>
                <li>
                  <a href="#">belts and hoses</a>
                </li>
                <li>
                  <a href="#">air conditioning</a>
                </li>
                <li>
                  <a href="#">brake repair</a>
                </li>
                <li>
                  <a href="#">tire and wheel services</a>
                </li>
              </ul>
            </div>
            <div className="widget">
              <div className="download-file">
                <h4 className="title">Get your brochures</h4>
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <div className="text">Company Brochures</div>
                      <i className="fas fa-download" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <div className="text">Company Info</div>
                      <i className="fas fa-download" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7 m-b30">
            <div className="row">
              <div className="col-lg-6 col-md-12 m-b30">
                <div className="dlab-box">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/about/pic6.jpg"
                        width="600"
                        height="800"
                      />
                    </a>
                  </div>
                  <div className="dlab-info m-t30">
                    <h4 className="dlab-title m-t0">
                      <a href="#">{serviceItem.title}</a>
                    </h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="dlab-box">
                  <div className="dlab-media m-b30 p-b5">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-services/pic2.jpg"
                        width="500"
                        height="357"
                      />
                    </a>
                  </div>
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/our-services/pic3.jpg"
                        width="500"
                        height="357"
                      />
                    </a>
                  </div>
                  <div className="dlab-info m-t30">
                    <h4 className="dlab-title m-t0">
                      <a href="#">From Start To finish</a>
                    </h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
