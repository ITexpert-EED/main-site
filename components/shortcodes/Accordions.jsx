import Link from "next/link";
import React from "react";

export default function Accordions() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Accordians</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Accordians</li>
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
              {/* BG Primary Color */}
              {/* Accordion Bg Primary */}
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Basic Accordion</h4>
                </div>
                <div
                  className="dlab-accordion box-sort-in m-b30 space active-bg accdown1"
                  id="accordion001"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse1"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion001"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          className="collapsed"
                          aria-expanded="false"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse2"
                      className="acod-body collapse"
                      data-bs-parent="#accordion001"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          className="collapsed"
                          aria-expanded="false"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse3"
                      className="acod-body collapse"
                      data-bs-parent="#accordion001"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Accordion Bg Primary END */}
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        {/* Left & right section start */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              {/* BG Primary Color */}
              {/* Accordion Bg Primary */}
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Basic Accordion</h4>
                </div>
                <div
                  className="dlab-accordion box-sort-in m-b30 space active-bg"
                  id="accordion002"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse4"
                        >
                          <i className="ti-user m-r10" /> 1. Before you get
                          started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse4"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion002"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse5"
                          className="collapsed"
                        >
                          <i className="ti-ruler-pencil m-r10" /> 2. Versatile
                          hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse5"
                      className="acod-body collapse"
                      data-bs-parent="#accordion002"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse6"
                          className="collapsed"
                        >
                          <i className="ti-settings m-r10" /> 3. Compatibility
                          with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse6"
                      className="acod-body collapse"
                      data-bs-parent="#accordion002"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Accordion Bg Primary END */}
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              {/* BG Gradient Color */}
              {/* Accordion Bg Primary */}
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Accordion Bg Gradient 1</h4>
                </div>
                <div
                  className="dlab-accordion box-sort-in m-b30 gradient-2 space"
                  id="accordion003"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse7"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse7"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion003"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse8"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse8"
                      className="acod-body collapse"
                      data-bs-parent="#accordion003"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse9"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse9"
                      className="acod-body collapse"
                      data-bs-parent="#accordion003"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Accordion Bg Gradient 2</h4>
                </div>
                <div
                  className="dlab-accordion box-sort-in m-b30 gradient-1 space"
                  id="accordion004"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse10"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse10"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion004"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse11"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse11"
                      className="acod-body collapse"
                      data-bs-parent="#accordion004"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse12"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse12"
                      className="acod-body collapse"
                      data-bs-parent="#accordion004"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordion Bg Primary END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Accordion Bg Primary Active Bg</h4>
                </div>
                <div
                  className="dlab-accordion box-sort-in m-b30 primary space active-bg"
                  id="accordion005"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse13"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse13"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion005"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse14"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse14"
                      className="acod-body collapse"
                      data-bs-parent="#accordion005"
                    >
                      <div className="acod-content">
                        Graphic design aorem apsum dolor sit amet, adipiscing
                        elit, sed diam nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Claritas est etiam
                        processus. ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.Claritas est etiam
                        processus.
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse15"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse15"
                      className="acod-body collapse"
                      data-bs-parent="#accordion005"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordion Bg Primary END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Defult Accordion</h4>
                </div>
                {/* Defult Accordion END */}
                <div
                  className="dlab-accordion box-sort-in m-b30 green"
                  id="accordion006"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse16"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse16"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion006"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse17"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse17"
                      className="acod-body collapse"
                      data-bs-parent="#accordion006"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse18"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse18"
                      className="acod-body collapse"
                      data-bs-parent="#accordion006"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Rounded Accordion</h4>
                </div>
                {/* Rounded Accordion */}
                <div
                  className="dlab-accordion box-sort-in rounded yellow m-b30"
                  id="accordion007"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse19"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse19"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion007"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse20"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse20"
                      className="acod-body collapse"
                      data-bs-parent="#accordion007"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse21"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse21"
                      className="acod-body collapse"
                      data-bs-parent="#accordion007"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Rounded Accordion END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Defult Accordion</h4>
                </div>
                {/* Defult Accordion */}
                <div
                  className="dlab-accordion box-sort-in red bg-title m-b30"
                  id="accordion008"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse22"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse22"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion008"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse23"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse23"
                      className="acod-body collapse"
                      data-bs-parent="#accordion008"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse24"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse24"
                      className="acod-body collapse"
                      data-bs-parent="#accordion008"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Defult Accordion END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Rounded Accordion</h4>
                </div>
                {/* Rounded Accordion */}
                <div
                  className="dlab-accordion box-sort-in bg-title primary no-cover m-b30"
                  id="accordion009"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse25"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse25"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion009"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse26"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse26"
                      className="acod-body collapse"
                      data-bs-parent="#accordion009"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse27"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse27"
                      className="acod-body collapse"
                      data-bs-parent="#accordion009"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Rounded Accordion END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Defult Accordion</h4>
                </div>
                <div
                  className="dlab-accordion box-sort-in space m-b30 gradient-2"
                  id="accordion0010"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse28"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse28"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion0010"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse29"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse29"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0010"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse30"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse30"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0010"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Defult Accordion END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Rounded Accordion</h4>
                </div>
                {/* Rounded Accordion */}
                <div
                  className="dlab-accordion box-sort-in space bg-title m-b30 gradient-1"
                  id="accordion0011"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse31"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse31"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion0011"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse32"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse32"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0011"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse33"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse33"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0011"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Rounded Accordion END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Defult Accordion</h4>
                </div>
                {/* Defult Accordion */}
                <div
                  className="dlab-accordion box-sort-in space m-b30"
                  id="accordion0012"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse34"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse34"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion0012"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse35"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse35"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0012"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse36"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse36"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0012"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Defult Accordion END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Rounded Accordion</h4>
                </div>
                {/* Rounded Accordion */}
                <div
                  className="dlab-accordion box-sort-in space bg-title no-cover m-b30 blue acco-sm"
                  id="accordion0013"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse37"
                          data-bs-parent="#accordion110"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse37"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion0013"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse38"
                          className="collapsed"
                          data-bs-parent="#accordion110"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse38"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0013"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse39"
                          className="collapsed"
                          data-bs-parent="#accordion110"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse39"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0013"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Rounded Accordion END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Rounded Accordion</h4>
                </div>
                {/* Rounded Accordion */}
                <div
                  className="dlab-accordion box-sort-in space bg-title no-cover m-b30 blue acco-lg"
                  id="accordion0014"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse40"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse40"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion0014"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse41"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse41"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0014"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse42"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse42"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0014"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Rounded Accordion END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Rounded Accordion</h4>
                </div>
                {/* Rounded Accordion */}
                <div
                  className="dlab-accordion box-sort-in space bg-title no-cover m-b30 blue acco-xl"
                  id="accordion0015"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse43"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse43"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion0015"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse44"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse44"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0015"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse45"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse45"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0015"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Rounded Accordion END */}
          </div>
        </div>
        {/* Left & right section  END */}
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Defult Accordion</h4>
                </div>
                {/* Defult Accordion END */}
                <div
                  className="dlab-accordion box-sort-in m-b30 no-gap"
                  id="accordion0016"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target="#collapse46"
                        >
                          1. Before you get started
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse46"
                      className="acod-body collapse show"
                      data-bs-parent="#accordion0016"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse47"
                          className="collapsed"
                        >
                          2. Versatile hosting plans and pricing
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse47"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0016"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h6 className="acod-title">
                        <a
                          href="#"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#collapse48"
                          className="collapsed"
                        >
                          3. Compatibility with premium plugins
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse48"
                      className="acod-body collapse"
                      data-bs-parent="#accordion0016"
                    >
                      <div className="acod-content">
                        <p>
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                        <p className="m-b0">
                          Web design aorem apsum dolor sit amet, adipiscing
                          elit, sed diam nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Claritas est etiam
                          processus. ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.Claritas est etiam processus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
