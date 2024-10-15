import React from "react";
import Link from "next/link";
export default function Pricing() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Pricing Table</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Pricing Table</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="bg-white pricing-table-box-area">
        {/* Left & right section start */}
        <div className="section-full bg-white content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Pricing table-1 Columns 3 with gap</h4>
                </div>
                {/* Pricing table-1 Columns 3 with gap */}
                <div className="section-content box-sort-in button-example m-t80">
                  <div className="pricingtable-row">
                    <div className="row max-w1000 m-auto">
                      <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                        <div className="pricingtable-wrapper style2 bg-white">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <h4 className="font-weight-300 m-t10 m-b0">
                                Basic
                              </h4>
                              <div className="pricingtable-bx">
                                <span>Free</span>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet adipiscing elit sed do
                              eiusmod tempors labore et dolore magna siad enim
                              aliqua
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
                                $ <span>29</span> / Per Installation
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet adipiscing elit sed do
                              eiusmod tempors labore et dolore magna siad enim
                              aliqua
                            </p>
                            <div className="m-t20">
                              <a
                                href="#"
                                className="site-button white radius-xl"
                              >
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
                              <h4 className="font-weight-300 m-t10 m-b0">
                                Extended
                              </h4>
                              <div className="pricingtable-bx">
                                $ <span>29</span> / Per Installation
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet adipiscing elit sed do
                              eiusmod tempors labore et dolore magna siad enim
                              aliqua
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
          </div>
          {/* Pricing table-1 Columns 3 with gap END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10">
          <i className="icon-dot c-square" />
        </div>
        <div className="section-full bg-white content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Pricing table-1 Columns 3 with gap</h4>
                </div>
                {/* Pricing table-1 Columns 3 with gap */}
                <div className="section-content box-sort-in button-example">
                  <div className="pricingtable-row">
                    <div className="row max-w1000 m-auto">
                      <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                        <div className="pricingtable-wrapper style1">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <div className="pricingtable-icon">
                                <i className="flaticon-factory" />
                              </div>
                              <h4 className="font-weight-300 m-t10 m-b0">
                                Starter
                              </h4>
                              <span className="pricingtable-bx text-primary">
                                $25
                              </span>
                              <span className="pricingtable-type">
                                Par Month
                              </span>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check text-primary" /> Full
                                Responsive
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" />
                                Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> With
                                Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> Easy
                                to customize
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> Many
                                Sortcodes
                              </li>
                            </ul>
                            <div className="m-t20">
                              <a
                                href="#"
                                className="site-button outline outline-2 button-md"
                              >
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                        <div className="pricingtable-wrapper style1">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <div className="pricingtable-icon">
                                <i className="flaticon-engineer" />
                              </div>
                              <h4 className="font-weight-300 m-t10 m-b0">
                                Professional
                              </h4>
                              <span className="pricingtable-bx text-primary">
                                $50
                              </span>
                              <span className="pricingtable-type">
                                Par Month
                              </span>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check text-primary" /> Full
                                Responsive
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" />
                                Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> With
                                Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> Easy
                                to customize
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> Many
                                Sortcodes
                              </li>
                            </ul>
                            <div className="m-t20 m-b5">
                              <a href="#" className="site-button button-md">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                        <div className="pricingtable-wrapper style1">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <div className="pricingtable-icon">
                                <i className="flaticon-factory-2" />
                              </div>
                              <h4 className="font-weight-300 m-t10 m-b0">
                                Enterprise
                              </h4>
                              <span className="pricingtable-bx text-primary">
                                $75
                              </span>
                              <span className="pricingtable-type">
                                Par Month
                              </span>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check text-primary" /> Full
                                Responsive
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" />
                                Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> With
                                Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> Easy
                                to customize
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> Many
                                Sortcodes
                              </li>
                            </ul>
                            <div className="m-t20">
                              <a
                                href="#"
                                className="site-button outline outline-2 button-md"
                              >
                                Sign Up
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
          </div>
          {/* Pricing table-1 Columns 3 with gap END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10">
          <i className="icon-dot c-square" />
        </div>
        {/* Left & right section start */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Pricing table-1 Columns 3 with gap</h4>
                </div>
                {/* Pricing table-1 Columns 3 with gap */}
                <div className="section-content box-sort-in button-example p-tb50">
                  <div className="pricingtable-row">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$10</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner pricingtable-highlight">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$12</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$18</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
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
          </div>
          {/* Pricing table-1 Columns 3 with gap END */}
        </div>
        <div className="dlab-divider bg-gray-dark tb10">
          <i className="icon-dot c-square" />
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix pricing-table-title text-center">
                  <h4>Pricing table-1 Columns 3 with no gap</h4>
                </div>
                {/* Pricing table-1 Columns 3 with no gap */}
                <div className="section-content box-sort-in button-example m-b10 p-t50">
                  <div className="pricingtable-row m-b30 p-lr15 no-col-gap">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$10</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner pricingtable-highlight">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$12</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$18</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
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
          </div>
          {/* Pricing table-1 Columns 3 with no gap END*/}
        </div>
        <div className="dlab-divider bg-gray-dark tb10">
          <i className="icon-dot c-square" />
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title pricing-table-title clearfix text-center">
                  <h4>Pricing table-1 Columns 4 with gap</h4>
                </div>
                {/* Pricing table-1 Columns 4 with gap */}
                <div className="section-content box-sort-in button-example p-tb30 pricing-table-col-gap">
                  <div className="pricingtable-row m-b30">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-3 m-t30">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$10</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 m-t30">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner pricingtable-highlight">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$12</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 m-t30">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$18</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 m-t30">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$23</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
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
          </div>
          {/* Pricing table-1 Columns 4 with gap END*/}
        </div>
        <div className="dlab-divider bg-gray-dark tb10">
          <i className="icon-dot c-square" />
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Pricing table-1 Columns 4 with no gap</h4>
                </div>
                {/* Pricing table-1 Columns 4 with no gap */}
                <div className="section-content box-sort-in button-example p-tb30">
                  <div className="pricingtable-row m-b30 p-lr15 no-col-gap">
                    <div className="row">
                      <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$10</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner pricingtable-highlight">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$12</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$18</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="pricingtable-wrapper">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <span className="pricingtable-bx">$23</span>
                              <span className="pricingtable-type">Month</span>
                            </div>
                            <div className="pricingtable-title bg-primary">
                              <h2>Basic</h2>
                            </div>
                            <ul className="pricingtable-features">
                              <li>
                                <i className="fas fa-check" /> Full Responsive
                              </li>
                              <li>
                                <i className="fas fa-check" /> Multi color theme
                              </li>
                              <li>
                                <i className="fas fa-check" /> With Bootstrap
                              </li>
                              <li>
                                <i className="fas fa-check" /> Easy to customize
                              </li>
                              <li>
                                <i className="fas fa-check" /> Many Sortcodes
                              </li>
                            </ul>
                            <div className="pricingtable-footer">
                              <a href="#" className="site-button">
                                Sign Up
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
          </div>
          {/* Pricing table-1 Columns 4 with no gap END */}
        </div>
        {/* Left & right section  END */}
      </div>
    </>
  );
}
