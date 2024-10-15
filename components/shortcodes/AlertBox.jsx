import React from "react";
import Link from "next/link";

export default function AlertBox() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Alert Box</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Alert Box</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* Breadcrumb row END */}
      <div className="bg-white alert-box-area">
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Alert box</h4>
                </div>
                {/* Alert box */}
                <div className="section-content box-sort-in m-b30">
                  <div className="alert alert-success">
                    <strong>Success!</strong> Indicates a successful or positive
                    action.
                  </div>
                  <div className="alert alert-info">
                    <strong>Info!</strong> Indicates a neutral informative
                    change or action.
                  </div>
                  <div className="alert alert-warning">
                    <strong>Warning!</strong> Indicates a warning that might
                    need attention.
                  </div>
                  <div className="alert alert-danger">
                    <strong>Danger!</strong> Indicates a dangerous or
                    potentially negative action.
                  </div>
                </div>
              </div>
            </div>
            {/* Alert box END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Alert box closable</h4>
                </div>
                {/* Alert box closable */}
                <div className="section-content box-sort-in m-b30">
                  <div className="alert alert-success">
                    <a
                      href="#"
                      className="close ti-close"
                      data-bs-dismiss="alert"
                      aria-label="close"
                    />
                    <strong>Success!</strong> This alert box could indicate a
                    successful or positive action.
                  </div>
                  <div className="alert alert-info">
                    <a
                      href="#"
                      className="close ti-close"
                      data-bs-dismiss="alert"
                      aria-label="close"
                    />
                    <strong>Info!</strong> This alert box could indicate a
                    neutral informative change or action.
                  </div>
                  <div className="alert alert-warning">
                    <a
                      href="#"
                      className="close ti-close"
                      data-bs-dismiss="alert"
                      aria-label="close"
                    />
                    <strong>Warning!</strong> This alert box could indicate a
                    warning that might need attention.
                  </div>
                  <div className="alert alert-danger">
                    <a
                      href="#"
                      className="close ti-close"
                      data-bs-dismiss="alert"
                      aria-label="close"
                    />
                    <strong>Danger!</strong> This alert box could indicate a
                    dangerous or potentially negative action.
                  </div>
                </div>
              </div>
            </div>
            {/* Alert box closable End */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Alert box sizing</h4>
                </div>
                {/* Alert box sizing */}
                <div className="section-content box-sort-in m-b30">
                  <div className="alert alert-success alert-sm">
                    <strong>Success!</strong> Indicates a successful or positive
                    action.
                  </div>
                  <div className="alert alert-info">
                    <strong>Info!</strong> Indicates a neutral informative
                    change or action.
                  </div>
                  <div className="alert alert-warning alert-lg">
                    <strong>Warning!</strong> Indicates a warning that might
                    need attention.
                  </div>
                  <div className="alert alert-danger alert-xl">
                    <strong>Danger!</strong> Indicates a dangerous or
                    potentially negative action.
                  </div>
                </div>
              </div>
            </div>
            {/* Alert box sizing End */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Alert box with icon</h4>
                </div>
                {/* Alert box with icon */}
                <div className="section-content box-sort-in m-b30">
                  <div className="alert alert-success">
                    <strong>
                      <i className="far fa-thumbs-up" /> Success!
                    </strong>
                    Indicates a successful or positive action.
                  </div>
                  <div className="alert alert-info">
                    <strong>
                      <i className="fas fa-info-circle" /> Info!
                    </strong>
                    Indicates a neutral informative change or action.
                  </div>
                  <div className="alert alert-warning">
                    <strong>
                      <i className="fas fa-exclamation-triangle" />
                      Warning!
                    </strong>
                    Indicates a warning that might need attention.
                  </div>
                  <div className="alert alert-danger">
                    <strong>
                      <i className="fas fa-times" /> Danger!
                    </strong>
                    Indicates a dangerous or potentially negative action.
                  </div>
                </div>
              </div>
            </div>
            {/* Alert box with icon End */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Alert box no rounded</h4>
                </div>
                {/* Alert box no rounded */}
                <div className="section-content box-sort-in m-b30">
                  <div className="alert alert-success no-radius">
                    <strong>Success!</strong> Indicates a successful or positive
                    action.
                  </div>
                  <div className="alert alert-info no-radius">
                    <strong>Info!</strong> Indicates a neutral informative
                    change or action.
                  </div>
                  <div className="alert alert-warning no-radius">
                    <strong>Warning!</strong> Indicates a warning that might
                    need attention.
                  </div>
                  <div className="alert alert-danger no-radius">
                    <strong>Danger!</strong> Indicates a dangerous or
                    potentially negative action.
                  </div>
                </div>
              </div>
            </div>
            {/* Alert box no rounded END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Alert box no background</h4>
                </div>
                {/* Alert box no background */}
                <div className="section-content box-sort-in m-b30">
                  <div className="alert alert-success no-bg">
                    <strong>Success!</strong> Indicates a successful or positive
                    action.
                  </div>
                  <div className="alert alert-info no-bg">
                    <strong>Info!</strong> Indicates a neutral informative
                    change or action.
                  </div>
                  <div className="alert alert-warning no-bg">
                    <strong>Warning!</strong> Indicates a warning that might
                    need attention.
                  </div>
                  <div className="alert alert-danger no-bg">
                    <strong>Danger!</strong> Indicates a dangerous or
                    potentially negative action.
                  </div>
                </div>
              </div>
            </div>
            {/* Alert box no background End */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Alert box with summery</h4>
                </div>
                {/* Alert box with summery */}
                <div className="section-content box-sort-in m-b30">
                  <div className="alert alert-danger">
                    <strong>
                      <i className="fas fa-exclamation-triangle" />
                      Danger!
                    </strong>
                    Indicates a dangerous or potentially negative action.
                    <ul className="list-angle-right">
                      <li>Please check your username.</li>
                      <li>Please your password.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Alert box with summery END */}
          </div>
        </div>
        {/* Left & right section  END */}
      </div>
    </>
  );
}
