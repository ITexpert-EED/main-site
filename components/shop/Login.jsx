"use client";

import React from "react";

export default function Login() {
  return (
    <div className="section-full content-inner shop-account">
      {/* Product */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="font-weight-700 m-t0 m-b40">ALREADY REGISTERED?</h2>
          </div>
        </div>
        <div className="row dzseth">
          <div className="col-lg-6 col-md-6 m-b30">
            <div className="p-a30 border-1 seth">
              <div className="tab-content">
                <h4 className="font-weight-700">NEW CUSTOMER</h4>
                <p className="font-weight-600">
                  By creating an account with our store, you will be able to
                  move through the checkout process faster, store multiple
                  shipping addresses, view and track your orders in your account
                  and more.
                </p>
                <a className="site-button m-r5 button-lg radius-no" href="#">
                  CREATE AN ACCOUNT
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 m-b30">
            <div className="p-a30 border-1 seth">
              <div className="tab-content nav" role="tablist">
                <form
                  id="login"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="tab-pane col-12 p-a0 active show"
                  role="tabpanel"
                >
                  <h4 className="font-weight-700">LOGIN</h4>
                  <p className="font-weight-600">
                    If you have an account with us, please log in.
                  </p>
                  <div className="form-group">
                    <label className="font-weight-700">E-MAIL *</label>
                    <input
                      required=""
                      className="form-control"
                      placeholder="Your Email Id"
                      type="email"
                      name="dzName"
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-700">PASSWORD *</label>
                    <input
                      required=""
                      className="form-control"
                      placeholder="Type Password"
                      type="password"
                      name="dzName"
                    />
                  </div>
                  <div className="text-left">
                    <button className="site-button m-r5 button-lg radius-no">
                      login
                    </button>
                    <a
                      data-bs-toggle="tab"
                      href="#forgot-password"
                      className="m-l5"
                      aria-selected="false"
                      role="tab"
                      tabIndex={-1}
                    >
                      <i className="fas fa-unlock-alt" /> Forgot Password
                    </a>
                  </div>
                </form>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  id="forgot-password"
                  className="tab-pane fade col-12 p-a0"
                  role="tabpanel"
                >
                  <h4 className="font-weight-700">FORGET PASSWORD ?</h4>
                  <p className="font-weight-600">
                    We will send you an email to reset your password.
                  </p>
                  <div className="form-group">
                    <label className="font-weight-700">E-MAIL *</label>
                    <input
                      required=""
                      className="form-control"
                      placeholder="Your Email Id"
                      type="email"
                      name="dzName"
                    />
                  </div>
                  <div className="text-left">
                    <a
                      className="site-button outline gray button-lg radius-no active"
                      data-bs-toggle="tab"
                      href="#login"
                      aria-selected="true"
                      role="tab"
                    >
                      Back
                    </a>
                    <button className="site-button pull-right button-lg radius-no">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product END */}
    </div>
  );
}
