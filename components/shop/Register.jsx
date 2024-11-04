"use client";

import React from "react";

export default function Register() {
  return (
    <div className="section-full content-inner shop-account">
      {/* Product */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="font-weight-700 m-t0 m-b40">CREATE AN ACCOUNT</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 m-b30">
            <div className="p-a30 border-1 max-w500 m-auto">
              <div className="tab-content">
                <form
                  id="login"
                  className="tab-pane active"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h4 className="font-weight-700">PERSONAL INFORMATION</h4>
                  <p className="font-weight-600">
                    If you have an account with us, please log in.
                  </p>
                  <div className="form-group">
                    <label className="font-weight-700">First Name *</label>
                    <input
                      name="dzName"
                      required
                      className="form-control"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-700">Last Name *</label>
                    <input
                      name="dzName"
                      required
                      className="form-control"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-700">E-MAIL *</label>
                    <input
                      name="dzName"
                      required
                      className="form-control"
                      placeholder="Your Email Id"
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-700">PASSWORD *</label>
                    <input
                      name="dzName"
                      required
                      className="form-control"
                      placeholder="Type Password"
                      type="password"
                    />
                  </div>
                  <div className="text-left m-t15">
                    <button className="site-button button-lg radius-no outline outline-2 not-hover">
                      CREATE
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
