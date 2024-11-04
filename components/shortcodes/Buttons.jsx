import React from "react";
import Link from "next/link";

export default function Buttons() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Buttons</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Buttons</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* Breadcrumb row END */}
      <div className="text-center">
        {/* Left & right section start */}
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Basic Buttons</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button className="btn btn-secondary" type="button">
                    Default
                  </button>{" "}
                  <button className="btn btn-primary" type="button">
                    Primary
                  </button>{" "}
                  <button className="btn btn-success" type="button">
                    Success
                  </button>{" "}
                  <button className="btn btn-info" type="button">
                    Info
                  </button>{" "}
                  <button className="btn btn-warning" type="button">
                    Warning
                  </button>{" "}
                  <button className="btn btn-danger" type="button">
                    Danger
                  </button>{" "}
                  <button className="btn btn-link" type="button">
                    Link
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-black-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Basic Buttons Outline</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button className="btn btn-outline-secondary" type="button">
                    Default
                  </button>{" "}
                  <button className="btn btn-outline-primary" type="button">
                    Primary
                  </button>{" "}
                  <button className="btn btn-outline-success" type="button">
                    Success
                  </button>{" "}
                  <button className="btn btn-outline-info" type="button">
                    Info
                  </button>{" "}
                  <button className="btn btn-outline-warning" type="button">
                    Warning
                  </button>{" "}
                  <button className="btn btn-outline-danger" type="button">
                    Danger
                  </button>{" "}
                  <button className="btn btn-outline-link" type="button">
                    Link
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Basic Buttons Size</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button type="button" className="btn btn-primary btn-lg">
                    Large button
                  </button>{" "}
                  <button type="button" className="btn btn-secondary btn-lg">
                    Large button
                  </button>{" "}
                  <button type="button" className="btn btn-primary">
                    Large button
                  </button>{" "}
                  <button type="button" className="btn btn-secondary">
                    Large button
                  </button>{" "}
                  <button type="button" className="btn btn-primary btn-sm">
                    Large button
                  </button>{" "}
                  <button type="button" className="btn btn-secondary btn-sm">
                    Large button
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-full content-inner bg-gray bg-img-fix overlay-black-dark"
          style={{ backgroundImage: "url(/images/background/bg2.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Basic Buttons Size</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Block level button
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg btn-block"
                  >
                    Block level button
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Basic Buttons Radio</h4>
                </div>
                <div className="section-content box-sort-in m-b30">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      defaultChecked
                    />{" "}
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio1"
                    >
                      Radio 1
                    </label>{" "}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio2"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio2"
                    >
                      Radio 2
                    </label>{" "}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio3"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio3"
                    >
                      Radio 3
                    </label>{" "}
                  </div>{" "}
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio1"
                      id="btnradio4"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-danger"
                      htmlFor="btnradio4"
                    >
                      Radio 1
                    </label>{" "}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio1"
                      id="btnradio5"
                    />
                    <label
                      className="btn btn-outline-danger"
                      htmlFor="btnradio5"
                    >
                      Radio 2
                    </label>{" "}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio1"
                      id="btnradio6"
                    />
                    <label
                      className="btn btn-outline-danger"
                      htmlFor="btnradio6"
                    >
                      Radio 3
                    </label>{" "}
                  </div>{" "}
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio2"
                      id="btnradio7"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-warning"
                      htmlFor="btnradio7"
                    >
                      Radio 1
                    </label>{" "}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio2"
                      id="btnradio8"
                    />
                    <label
                      className="btn btn-outline-warning"
                      htmlFor="btnradio8"
                    >
                      Radio 2
                    </label>{" "}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio2"
                      id="btnradio9"
                    />
                    <label
                      className="btn btn-outline-warning"
                      htmlFor="btnradio9"
                    >
                      Radio 3
                    </label>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-black-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Basic Buttons Checkbox</h4>
                </div>
                <div className="section-content box-sort-in m-b30">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck1"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btncheck1"
                    >
                      Checkbox 1
                    </label>{" "}
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck2"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btncheck2"
                    >
                      Checkbox 2
                    </label>{" "}
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck3"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btncheck3"
                    >
                      Checkbox 3
                    </label>{" "}
                  </div>{" "}
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck4"
                    />
                    <label
                      className="btn btn-outline-danger"
                      htmlFor="btncheck4"
                    >
                      Checkbox 1
                    </label>{" "}
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck5"
                    />
                    <label
                      className="btn btn-outline-danger"
                      htmlFor="btncheck5"
                    >
                      Checkbox 2
                    </label>{" "}
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck6"
                    />
                    <label
                      className="btn btn-outline-danger"
                      htmlFor="btncheck6"
                    >
                      Checkbox 3
                    </label>{" "}
                  </div>{" "}
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck7"
                    />
                    <label
                      className="btn btn-outline-warning"
                      htmlFor="btncheck7"
                    >
                      Checkbox 1
                    </label>{" "}
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck8"
                    />
                    <label
                      className="btn btn-outline-warning"
                      htmlFor="btncheck8"
                    >
                      Checkbox 2
                    </label>{" "}
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck9"
                    />
                    <label
                      className="btn btn-outline-warning"
                      htmlFor="btncheck9"
                    >
                      Checkbox 3
                    </label>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Button Pramary &amp; Secondry</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button className="site-button m-r15" type="button">
                    Site Button
                  </button>{" "}
                  <button className="site-button-secondry" type="button">
                    Site Button secondry
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-black-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Theme Button Size</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button className="site-button button-xl m-r15" type="button">
                    Button extra large
                  </button>{" "}
                  <button className="site-button button-lg m-r15" type="button">
                    Button large
                  </button>{" "}
                  <button className="site-button m-r15" type="button">
                    Button medium
                  </button>{" "}
                  <button className="site-button button-sm m-r15" type="button">
                    Button samll
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Button Color</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button className="site-button black m-r15" type="button">
                    Black
                  </button>{" "}
                  <button className="site-button gray m-r15" type="button">
                    Gray
                  </button>{" "}
                  <button className="site-button pink m-r15" type="button">
                    Pink
                  </button>{" "}
                  <button className="site-button blue m-r15" type="button">
                    Blue
                  </button>{" "}
                  <button className="site-button green m-r15" type="button">
                    Green
                  </button>{" "}
                  <button className="site-button orange m-r15" type="button">
                    Orange
                  </button>{" "}
                  <button className="site-button red m-r15" type="button">
                    Red
                  </button>{" "}
                  <button className="site-button brown m-r15" type="button">
                    Brown
                  </button>{" "}
                  <button className="site-button yellow m-r15" type="button">
                    Yellow
                  </button>{" "}
                  <button className="site-button purple m-r15" type="button">
                    Purpal
                  </button>{" "}
                  <button className="site-button white m-r15" type="button">
                    white
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-full content-inner bg-gray bg-img-fix overlay-black-dark"
          style={{ backgroundImage: "url(/images/background/bg3.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Theme Buttons with rounded corner</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button black radius-xl m-r15"
                    type="button"
                  >
                    Black
                  </button>{" "}
                  <button
                    className="site-button gray radius-xl m-r15"
                    type="button"
                  >
                    Gray
                  </button>{" "}
                  <button
                    className="site-button pink radius-xl m-r15"
                    type="button"
                  >
                    Pink
                  </button>{" "}
                  <button
                    className="site-button blue radius-xl m-r15"
                    type="button"
                  >
                    Blue
                  </button>{" "}
                  <button
                    className="site-button green radius-xl m-r15"
                    type="button"
                  >
                    Green
                  </button>{" "}
                  <button
                    className="site-button orange radius-xl m-r15"
                    type="button"
                  >
                    Orange
                  </button>{" "}
                  <button
                    className="site-button red radius-xl m-r15"
                    type="button"
                  >
                    Red
                  </button>{" "}
                  <button
                    className="site-button brown radius-xl m-r15"
                    type="button"
                  >
                    Brown
                  </button>{" "}
                  <button
                    className="site-button yellow radius-xl m-r15"
                    type="button"
                  >
                    Yellow
                  </button>{" "}
                  <button
                    className="site-button purple radius-xl m-r15"
                    type="button"
                  >
                    Purpal
                  </button>{" "}
                  <button
                    className="site-button white radius-xl m-r15"
                    type="button"
                  >
                    white
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Buttons with Gradient</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button black gradient m-r15"
                    type="button"
                  >
                    Black
                  </button>{" "}
                  <button
                    className="site-button gray gradient m-r15"
                    type="button"
                  >
                    Gray
                  </button>{" "}
                  <button
                    className="site-button pink gradient m-r15"
                    type="button"
                  >
                    Pink
                  </button>{" "}
                  <button
                    className="site-button blue gradient m-r15"
                    type="button"
                  >
                    Blue
                  </button>{" "}
                  <button
                    className="site-button green gradient m-r15"
                    type="button"
                  >
                    Green
                  </button>{" "}
                  <button
                    className="site-button orange gradient m-r15"
                    type="button"
                  >
                    Orange
                  </button>{" "}
                  <button
                    className="site-button red gradient m-r15"
                    type="button"
                  >
                    Red
                  </button>{" "}
                  <button
                    className="site-button brown gradient m-r15"
                    type="button"
                  >
                    Brown
                  </button>{" "}
                  <button
                    className="site-button yellow gradient m-r15"
                    type="button"
                  >
                    Yellow
                  </button>{" "}
                  <button
                    className="site-button purple gradient m-r15"
                    type="button"
                  >
                    Purpal
                  </button>{" "}
                  <button
                    className="site-button white gradient m-r15"
                    type="button"
                  >
                    white
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-full content-inner bg-img-fix overlay-black-dark"
          style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Theme Buttons with sharp corner</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button black radius-no m-r15"
                    type="button"
                  >
                    Black
                  </button>{" "}
                  <button
                    className="site-button gray radius-no m-r15"
                    type="button"
                  >
                    Gray
                  </button>{" "}
                  <button
                    className="site-button pink radius-no m-r15"
                    type="button"
                  >
                    Pink
                  </button>{" "}
                  <button
                    className="site-button blue radius-no m-r15"
                    type="button"
                  >
                    Blue
                  </button>{" "}
                  <button
                    className="site-button green radius-no m-r15"
                    type="button"
                  >
                    Green
                  </button>{" "}
                  <button
                    className="site-button orange radius-no m-r15"
                    type="button"
                  >
                    Orange
                  </button>{" "}
                  <button
                    className="site-button red radius-no m-r15"
                    type="button"
                  >
                    Red
                  </button>{" "}
                  <button
                    className="site-button brown radius-no m-r15"
                    type="button"
                  >
                    Brown
                  </button>{" "}
                  <button
                    className="site-button yellow radius-no m-r15"
                    type="button"
                  >
                    Yellow
                  </button>{" "}
                  <button
                    className="site-button purple radius-no m-r15"
                    type="button"
                  >
                    Purpal
                  </button>{" "}
                  <button
                    className="site-button white radius-no m-r15"
                    type="button"
                  >
                    white
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Buttons with icons</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button className="site-button black m-r5" type="button">
                    <span className="site-button-inr">
                      Black <i className="far fa-arrow-alt-circle-right" />
                    </span>
                  </button>{" "}
                  <button className="site-button gray m-r5" type="button">
                    <span className="site-button-inr">
                      Gray <i className="fas fa-dollar-sign" />
                    </span>
                  </button>{" "}
                  <button className="site-button pink m-r5" type="button">
                    <span className="site-button-inr">
                      Pink <i className="ti-email" />
                    </span>
                  </button>{" "}
                  <button className="site-button blue m-r5" type="button">
                    <span className="site-button-inr">
                      Blue <i className="fas fa-gavel" />
                    </span>
                  </button>{" "}
                  <button className="site-button green m-r5" type="button">
                    <span className="site-button-inr">
                      Green <i className="fab fa-joomla" />
                    </span>
                  </button>{" "}
                  <button className="site-button orange m-r5" type="button">
                    <span className="site-button-inr">
                      Orange <i className="fas fa-key" />
                    </span>
                  </button>{" "}
                  <button className="site-button red m-r5" type="button">
                    <span className="site-button-inr">
                      Red <i className="fas fa-umbrella" />
                    </span>
                  </button>{" "}
                  <button className="site-button brown m-r5" type="button">
                    <span className="site-button-inr">
                      Brown <i className="fas fa-random" />
                    </span>
                  </button>{" "}
                  <button className="site-button yellow m-r5" type="button">
                    <span className="site-button-inr">
                      Yellow <i className="far fa-image" />
                    </span>
                  </button>{" "}
                  <button className="site-button white m-r5" type="button">
                    <span className="site-button-inr">
                      white <i className="ti-user" />
                    </span>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-black-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Theme Buttons with Outline 1PX</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button outline black m-r15"
                    type="button"
                  >
                    Black
                  </button>{" "}
                  <button
                    className="site-button outline gray m-r15"
                    type="button"
                  >
                    Gray
                  </button>{" "}
                  <button
                    className="site-button outline pink m-r15"
                    type="button"
                  >
                    Pink
                  </button>{" "}
                  <button
                    className="site-button outline blue m-r15"
                    type="button"
                  >
                    Blue
                  </button>{" "}
                  <button
                    className="site-button outline green m-r15"
                    type="button"
                  >
                    Green
                  </button>{" "}
                  <button
                    className="site-button outline orange m-r15"
                    type="button"
                  >
                    Orange
                  </button>{" "}
                  <button
                    className="site-button outline red m-r15"
                    type="button"
                  >
                    Red
                  </button>{" "}
                  <button
                    className="site-button outline brown m-r15"
                    type="button"
                  >
                    Brown
                  </button>{" "}
                  <button
                    className="site-button outline yellow m-r15"
                    type="button"
                  >
                    Yellow
                  </button>{" "}
                  <button
                    className="site-button outline purple m-r15"
                    type="button"
                  >
                    Purpal
                  </button>{" "}
                  <button
                    className="site-button outline white m-r15"
                    type="button"
                  >
                    white
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Buttons with Outline 2PX</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button outline outline-2 black m-r15"
                    type="button"
                  >
                    Black
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 gray m-r15"
                    type="button"
                  >
                    Gray
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 pink m-r15"
                    type="button"
                  >
                    Pink
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 blue m-r15"
                    type="button"
                  >
                    Blue
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 green m-r15"
                    type="button"
                  >
                    Green
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 orange m-r15"
                    type="button"
                  >
                    Orange
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 red m-r15"
                    type="button"
                  >
                    Red
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 brown m-r15"
                    type="button"
                  >
                    Brown
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 yellow m-r15"
                    type="button"
                  >
                    Yellow
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 purple m-r15"
                    type="button"
                  >
                    Purpal
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 white m-r15"
                    type="button"
                  >
                    white
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-black-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Theme Buttons with Outline Radius</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button outline outline-2 black m-r15 radius-xl"
                    type="button"
                  >
                    Black
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 gray m-r15 radius-xl"
                    type="button"
                  >
                    Gray
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 pink m-r15 radius-xl"
                    type="button"
                  >
                    Pink
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 blue m-r15 radius-xl"
                    type="button"
                  >
                    Blue
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 green m-r15 radius-xl"
                    type="button"
                  >
                    Green
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 orange m-r15 radius-xl"
                    type="button"
                  >
                    Orange
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 red m-r15 radius-xl"
                    type="button"
                  >
                    Red
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 brown m-r15 radius-xl"
                    type="button"
                  >
                    Brown
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 yellow m-r15 radius-xl"
                    type="button"
                  >
                    Yellow
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 purple m-r15 radius-xl"
                    type="button"
                  >
                    Purpal
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 white m-r15 radius-xl"
                    type="button"
                  >
                    white
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Buttons Link</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <a href="#" className="site-button-link white m-r15">
                    White
                  </a>
                  <a href="#" className="site-button-link black m-r15">
                    Black
                  </a>
                  <a href="#" className="site-button-link gray m-r15">
                    Gray
                  </a>
                  <a href="#" className="site-button-link pink m-r15">
                    Pink
                  </a>
                  <a href="#" className="site-button-link blue m-r15">
                    Blue
                  </a>
                  <a href="#" className="site-button-link green m-r15">
                    Green
                  </a>
                  <a href="#" className="site-button-link orange m-r15">
                    Orange
                  </a>
                  <a href="#" className="site-button-link red m-r15">
                    Red
                  </a>
                  <a href="#" className="site-button-link brown m-r15">
                    Brown
                  </a>
                  <a href="#" className="site-button-link yellow m-r15">
                    Yellow
                  </a>
                  <a href="#" className="site-button-link purple m-r15">
                    Purple
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-black-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Theme Buttons Dropdown</h4>
                </div>
                <div className="section-content box-sort-in m-b30">
                  <div className="btn-group m-t10 m-l10">
                    <button
                      type="button"
                      className="site-button dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Primary <i className="" />
                    </button>{" "}
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group m-t10 m-l10">
                    <button
                      type="button"
                      className="site-button red dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Primary <i className="" />
                    </button>{" "}
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group m-t10 m-l10">
                    <button
                      type="button"
                      className="site-button yellow dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Primary <i className="" />
                    </button>{" "}
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group m-t10 m-l10">
                    <button
                      type="button"
                      className="site-button pink dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Primary <i className="" />
                    </button>{" "}
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group m-t10 m-l10">
                    <button type="button" className="btn btn-primary">
                      Primary
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="" />
                    </button>{" "}
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /btn-group */}
                  <div className="btn-group m-t10 m-l10">
                    <button type="button" className="btn btn-secondary">
                      Secondary
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="" />
                    </button>{" "}
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /btn-group */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Buttons Box Shadow</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button outline outline-2 black m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Black
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 gray m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Gray
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 pink m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Pink
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 blue m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Blue
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 green m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Green
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 orange m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Orange
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 red m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Red
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 brown m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Brown
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 yellow m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Yellow
                  </button>{" "}
                  <button
                    className="site-button outline outline-2 purple m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Purpal
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-black-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Theme Buttons Box Shadow</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button black m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Black
                  </button>{" "}
                  <button
                    className="site-button gray m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Gray
                  </button>{" "}
                  <button
                    className="site-button pink m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Pink
                  </button>{" "}
                  <button
                    className="site-button blue m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Blue
                  </button>{" "}
                  <button
                    className="site-button green m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Green
                  </button>{" "}
                  <button
                    className="site-button orange m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Orange
                  </button>{" "}
                  <button
                    className="site-button red m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Red
                  </button>{" "}
                  <button
                    className="site-button brown m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Brown
                  </button>{" "}
                  <button
                    className="site-button yellow m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Yellow
                  </button>{" "}
                  <button
                    className="site-button purple m-r15 radius-xl box-shadow"
                    type="button"
                  >
                    Purpal
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Buttons Box Shadow</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button black m-r15 box-shadow"
                    type="button"
                  >
                    Black
                  </button>{" "}
                  <button
                    className="site-button gray m-r15 box-shadow"
                    type="button"
                  >
                    Gray
                  </button>{" "}
                  <button
                    className="site-button pink m-r15 box-shadow"
                    type="button"
                  >
                    Pink
                  </button>{" "}
                  <button
                    className="site-button blue m-r15 box-shadow"
                    type="button"
                  >
                    Blue
                  </button>{" "}
                  <button
                    className="site-button green m-r15 box-shadow"
                    type="button"
                  >
                    Green
                  </button>{" "}
                  <button
                    className="site-button orange m-r15 box-shadow"
                    type="button"
                  >
                    Orange
                  </button>{" "}
                  <button
                    className="site-button red m-r15 box-shadow"
                    type="button"
                  >
                    Red
                  </button>{" "}
                  <button
                    className="site-button brown m-r15 box-shadow"
                    type="button"
                  >
                    Brown
                  </button>{" "}
                  <button
                    className="site-button yellow m-r15 box-shadow"
                    type="button"
                  >
                    Yellow
                  </button>{" "}
                  <button
                    className="site-button purple m-r15 box-shadow"
                    type="button"
                  >
                    Purpal
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-black-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Theme Buttons Circle Small</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button black m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="far fa-star" />
                  </button>{" "}
                  <button
                    className="site-button gray m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="far fa-chart-bar" />
                  </button>{" "}
                  <button
                    className="site-button pink m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="fas fa-bars" />
                  </button>{" "}
                  <button
                    className="site-button blue m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="fas fa-bell" />
                  </button>{" "}
                  <button
                    className="site-button green m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="ti-comment-alt" />
                  </button>{" "}
                  <button
                    className="site-button orange m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="far fa-clock" />
                  </button>{" "}
                  <button
                    className="site-button red m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="fas fa-cloud-download-alt" />
                  </button>{" "}
                  <button
                    className="site-button brown m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="far fa-gem" />
                  </button>{" "}
                  <button
                    className="site-button yellow m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="far fa-folder-open" />
                  </button>{" "}
                  <button
                    className="site-button purple m-r15 circle-sm box-shadow"
                    type="button"
                  >
                    <i className="far fa-lightbulb" />
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Buttons Circle Middle</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button black m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="far fa-star" />
                  </button>{" "}
                  <button
                    className="site-button gray m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="far fa-chart-bar" />
                  </button>{" "}
                  <button
                    className="site-button pink m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="fas fa-bars" />
                  </button>{" "}
                  <button
                    className="site-button blue m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="fas fa-bell" />
                  </button>{" "}
                  <button
                    className="site-button green m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="ti-comment-alt" />
                  </button>{" "}
                  <button
                    className="site-button orange m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="far fa-clock" />
                  </button>{" "}
                  <button
                    className="site-button red m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="fas fa-cloud-download-alt" />
                  </button>{" "}
                  <button
                    className="site-button brown m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="far fa-gem" />
                  </button>{" "}
                  <button
                    className="site-button yellow m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="far fa-folder-open" />
                  </button>{" "}
                  <button
                    className="site-button purple m-r15 circle box-shadow"
                    type="button"
                  >
                    <i className="far fa-lightbulb" />
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-black-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix text-white">
                  <h4>Theme Buttons Circle Large</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button black m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="far fa-star" />
                  </button>{" "}
                  <button
                    className="site-button gray m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="far fa-chart-bar" />
                  </button>{" "}
                  <button
                    className="site-button pink m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="fas fa-bars" />
                  </button>{" "}
                  <button
                    className="site-button blue m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="fas fa-bell" />
                  </button>{" "}
                  <button
                    className="site-button green m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="ti-comment-alt" />
                  </button>{" "}
                  <button
                    className="site-button orange m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="far fa-clock" />
                  </button>{" "}
                  <button
                    className="site-button red m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="fas fa-cloud-download-alt" />
                  </button>{" "}
                  <button
                    className="site-button brown m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="far fa-gem" />
                  </button>{" "}
                  <button
                    className="site-button yellow m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="far fa-folder-open" />
                  </button>{" "}
                  <button
                    className="site-button purple m-r15 circle-lg box-shadow"
                    type="button"
                  >
                    <i className="far fa-lightbulb" />
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Buttons Social</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button-link facebook m-r15 hover"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button-link google-plus m-r15 hover"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button-link linkedin m-r15 hover"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button-link instagram m-r15 hover"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button-link twitter m-r15 hover"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button-link youtube m-r15 hover"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button-link whatsapp m-r15 hover"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button-link facebook m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button-link google-plus m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button-link linkedin m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button-link instagram m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button-link twitter m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button-link youtube m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button-link whatsapp m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 circle-sm"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 circle-sm"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 circle-sm"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 circle-sm"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 circle-sm"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 circle-sm"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 circle-sm"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 circle"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 circle"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 circle"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 circle"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 circle"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 circle"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 circle"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 circle-lg"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 circle-lg"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 circle-lg"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 circle-lg"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 circle-lg"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 circle-lg"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 circle-lg"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 button-sm"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" /> Facebook
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 button-sm"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" /> Google Plus
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 button-sm"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" /> Linkedin
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 button-sm"
                    type="button"
                  >
                    <i className="fab fa-instagram" /> Instagram
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 button-sm"
                    type="button"
                  >
                    <i className="fab fa-twitter" /> Twitter
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 button-sm"
                    type="button"
                  >
                    <i className="fab fa-youtube" /> Youtube
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 button-sm"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" /> Whatsapp
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button className="site-button facebook m-r15" type="button">
                    <i className="fab fa-facebook-f" /> Facebook
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" /> Google Plus
                  </button>{" "}
                  <button className="site-button linkedin m-r15" type="button">
                    <i className="fab fa-linkedin-in" /> Linkedin
                  </button>{" "}
                  <button className="site-button instagram m-r15" type="button">
                    <i className="fab fa-instagram" /> Instagram
                  </button>{" "}
                  <button className="site-button twitter m-r15" type="button">
                    <i className="fab fa-twitter" /> Twitter
                  </button>{" "}
                  <button className="site-button youtube m-r15" type="button">
                    <i className="fab fa-youtube" /> Youtube
                  </button>{" "}
                  <button className="site-button whatsapp m-r15" type="button">
                    <i className="fab fa-whatsapp" /> Whatsapp
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 sharp-sm"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 sharp-sm"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 sharp-sm"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 sharp-sm"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 sharp-sm"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 sharp-sm"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 sharp-sm"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 sharp"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 sharp"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 sharp"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 sharp"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 sharp"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 sharp"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 sharp"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 sharp-lg"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 sharp-lg"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 sharp-lg"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 sharp-lg"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 sharp-lg"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 sharp-lg"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 sharp-lg"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 post card-container">
                <div className="sort-title clearfix">
                  <h4>Theme Buttons Social Outline</h4>
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 circle-sm outline"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 circle outline"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 circle outline"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 circle outline"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 circle outline"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 circle outline"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 circle outline"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 circle outline"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 circle-lg outline"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 circle-lg outline"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 circle-lg outline"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 circle-lg outline"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 circle-lg outline"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 circle-lg outline"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 circle-lg outline"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 outline button-sm"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" /> Facebook
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 outline button-sm"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" /> Google Plus
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 outline button-sm"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" /> Linkedin
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 outline button-sm"
                    type="button"
                  >
                    <i className="fab fa-instagram" /> Instagram
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 outline button-sm"
                    type="button"
                  >
                    <i className="fab fa-twitter" /> Twitter
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 outline button-sm"
                    type="button"
                  >
                    <i className="fab fa-youtube" /> Youtube
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 outline button-sm"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" /> Whatsapp
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 outline"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" /> Facebook
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 outline"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" /> Google Plus
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 outline"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" /> Linkedin
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 outline"
                    type="button"
                  >
                    <i className="fab fa-instagram" /> Instagram
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 outline"
                    type="button"
                  >
                    <i className="fab fa-twitter" /> Twitter
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 outline"
                    type="button"
                  >
                    <i className="fab fa-youtube" /> Youtube
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 outline"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" /> Whatsapp
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 sharp-sm outline"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 sharp-sm outline"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 sharp-sm outline"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 sharp-sm outline"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 sharp-sm outline"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 sharp-sm outline"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 sharp-sm outline"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 sharp outline"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 sharp outline"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 sharp outline"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 sharp outline"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 sharp outline"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 sharp outline"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 sharp outline"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
                <div className="section-content box-sort-in button-example m-b30">
                  <button
                    className="site-button facebook m-r15 sharp-lg outline"
                    type="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>{" "}
                  <button
                    className="site-button google-plus m-r15 sharp-lg outline"
                    type="button"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>{" "}
                  <button
                    className="site-button linkedin m-r15 sharp-lg outline"
                    type="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>{" "}
                  <button
                    className="site-button instagram m-r15 sharp-lg outline"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>{" "}
                  <button
                    className="site-button twitter m-r15 sharp-lg outline"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>{" "}
                  <button
                    className="site-button youtube m-r15 sharp-lg outline"
                    type="button"
                  >
                    <i className="fab fa-youtube" />
                  </button>{" "}
                  <button
                    className="site-button whatsapp m-r15 sharp-lg outline"
                    type="button"
                  >
                    <i className="fab fa-whatsapp" />
                  </button>{" "}
                </div>
              </div>
            </div>
            {/* Buttons END */}
          </div>
          {/* Left & right section  END */}
        </div>
      </div>
    </>
  );
}
