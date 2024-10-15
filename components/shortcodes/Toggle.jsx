import React from "react";
import Link from "next/link";
export default function Toggle() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Toggles</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Toggles</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="bg-white">
        {/* Left & right section start */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Toggles Bg Primary</h4>
                </div>
                {/* BG Primary Color */}
                {/* Accordion Bg Primary */}
                <div className="box-sort-in m-b30">
                  <div
                    className="dlab-accordion space toggle primary"
                    id="accodion1"
                  >
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseOne1"
                            className="collapsed"
                          >
                            1. Before you get started
                          </a>
                        </h6>
                      </div>
                      <div id="collapseOne1" className="acod-body collapse">
                        <div className="acod-content">
                          Web design lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseTwo1"
                            className="collapsed"
                          >
                            2. Versatile hosting plans and pricing
                          </a>
                        </h6>
                      </div>
                      <div id="collapseTwo1" className="acod-body collapse">
                        <div className="acod-content">
                          Graphic design lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseThree1"
                            className="collapsed"
                          >
                            3. Compatibility with premium plugins
                          </a>
                        </h6>
                      </div>
                      <div id="collapseThree1" className="acod-body collapse">
                        <div className="acod-content">
                          Developement lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray tb10">
          <i className="icon-dot c-square" />
        </div>
        {/* Accordion Bg Primary END */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Toggles Bg Gradient</h4>
                </div>
                {/* BG Primary Color */}
                {/* Accordion Bg Primary */}
                <div className="box-sort-in m-b30">
                  <div
                    className="dlab-accordion toggle bg-title gradient-2"
                    id="accordion3"
                  >
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseOne3"
                            className="collapsed"
                          >
                            1. Before you get started
                          </a>
                        </h6>
                      </div>
                      <div id="collapseOne3" className="acod-body collapse">
                        <div className="acod-content">
                          Web design lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseTwo3"
                            className="collapsed"
                          >
                            2. Versatile hosting plans and pricing
                          </a>
                        </h6>
                      </div>
                      <div id="collapseTwo3" className="acod-body collapse">
                        <div className="acod-content">
                          Graphic design lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseThree3"
                            className="collapsed"
                          >
                            3. Compatibility with premium plugins
                          </a>
                        </h6>
                      </div>
                      <div id="collapseThree3" className="acod-body collapse">
                        <div className="acod-content">
                          Developement lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray tb10">
          <i className="icon-dot c-square" />
        </div>
        {/* Accordion Bg Primary END */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Toggles No Bg</h4>
                </div>
                {/* BG Primary Color */}
                {/* Accordion Bg Primary */}
                <div className="box-sort-in m-b30">
                  <div className="dlab-accordion toggle space" id="accordion7">
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseOne7"
                            className="collapsed"
                          >
                            1. Before you get started
                          </a>
                        </h6>
                      </div>
                      <div id="collapseOne7" className="acod-body collapse">
                        <div className="acod-content">
                          Web design lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseTwo7"
                            className="collapsed"
                          >
                            2. Versatile hosting plans and pricing
                          </a>
                        </h6>
                      </div>
                      <div id="collapseTwo7" className="acod-body collapse">
                        <div className="acod-content">
                          Graphic design lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseThree7"
                            className="collapsed"
                          >
                            3. Compatibility with premium plugins
                          </a>
                        </h6>
                      </div>
                      <div id="collapseThree7" className="acod-body collapse">
                        <div className="acod-content">
                          Developement lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray tb10">
          <i className="icon-dot c-square" />
        </div>
        {/* Accordion Bg Primary END */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Toggles No Cover</h4>
                </div>
                {/* BG Primary Color */}
                {/* Accordion Bg Primary */}
                <div className="box-sort-in m-b30">
                  <div
                    className="dlab-accordion toggle border-bottom no-border no-cover"
                    id="accordion14"
                  >
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseOne14"
                            className="collapsed"
                          >
                            1. Before you get started
                          </a>
                        </h6>
                      </div>
                      <div id="collapseOne14" className="acod-body collapse">
                        <div className="acod-content">
                          Web design lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.Claritas est
                          etiam processus. ipsum dolor sit amet, consectetuer
                          adipiscing
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseTwo14"
                            className="collapsed"
                          >
                            2. Versatile hosting plans and pricing
                          </a>
                        </h6>
                      </div>
                      <div id="collapseTwo14" className="acod-body collapse">
                        <div className="acod-content">
                          Graphic design lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseThree14"
                            className="collapsed"
                          >
                            3. Compatibility with premium plugins
                          </a>
                        </h6>
                      </div>
                      <div id="collapseThree14" className="acod-body collapse">
                        <div className="acod-content">
                          Developement lorem ipsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordion Bg Primary END */}
          </div>
        </div>
        {/* Left & right section  END */}
      </div>
    </>
  );
}
