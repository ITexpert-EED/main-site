import React from "react";

export default function Pricing() {
  return (
    <div className="section-full content-inner-2 bg-white">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Pricing Table</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="section-content box-sort-in button-example pricingtable-style2-area m-t80">
          <div className="pricingtable-row">
            <div className="row max-w1000 m-auto">
              <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                <div className="pricingtable-wrapper style2 bg-white">
                  <div className="pricingtable-inner">
                    <div className="pricingtable-price">
                      <h4 className="font-weight-300 m-t10 m-b0">Basic</h4>
                      <div className="pricingtable-bx">
                        <span>Free</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod
                      tempors labore et dolore magna siad enim aliqua
                    </p>
                    <div className="m-t20">
                      <a href="#" className="site-button radius-xl">
                        <span className="p-lr30">Sign Up</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                <div className="pricingtable-wrapper style2 bg-primary text-white active">
                  <div className="pricingtable-inner">
                    <div className="pricingtable-price">
                      <h4 className="font-weight-300 m-t10 m-b0">
                        Professional
                      </h4>
                      <div className="pricingtable-bx">
                        {" "}
                        $ <span>29</span> / Per Installation{" "}
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod
                      tempors labore et dolore magna siad enim aliqua
                    </p>
                    <div className="m-t20">
                      <a href="#" className="site-button white radius-xl">
                        <span className="p-lr30">Sign Up</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                <div className="pricingtable-wrapper style2 bg-white">
                  <div className="pricingtable-inner">
                    <div className="pricingtable-price">
                      <h4 className="font-weight-300 m-t10 m-b0">Extended</h4>
                      <div className="pricingtable-bx">
                        {" "}
                        $ <span>29</span> / Per Installation{" "}
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod
                      tempors labore et dolore magna siad enim aliqua
                    </p>
                    <div className="m-t20">
                      <a href="#" className="site-button radius-xl">
                        <span className="p-lr30">Sign Up</span>
                      </a>
                    </div>
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
