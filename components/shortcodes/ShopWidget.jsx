import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ShopWidget() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Shop Widgets</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Shop Widgets</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="section-full bg-white content-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item1.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a10">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30 item-style-1">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item2.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a10">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item3.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a10">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item4.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a10">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full bg-gray content-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item5.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30 item-style-1">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item6.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item7.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item8.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full bg-white content-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="dlab-box m-b30">
                <div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate">
                  <Image
                    alt=""
                    src="/images/product/item1.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="dlab-info-has p-a20 no-hover">
                    <a href="#" className="site-button button-sm m-b10">
                      Fashion
                    </a>
                    <h5>There are many variations.</h5>
                    <div className="dlab-post-meta text-white">
                      <ul>
                        <li className="post-date">
                          <i className="ti-calendar" />
                          <strong>10 Aug</strong>
                          <span> 2016</span>
                        </li>
                        <li className="post-author">
                          <i className="ti-user" />
                          By
                          <a href="#">demongo</a>
                        </li>
                        <li className="post-comment">
                          <i className="ti-comment-alt" />
                          <a href="#">0</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="dlab-box m-b30">
                <div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate">
                  <Image
                    alt=""
                    src="/images/product/item2.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="dlab-info-has p-a20 no-hover">
                    <a href="#" className="site-button button-sm red m-b10">
                      Fashion
                    </a>
                    <h5>There are many variations.</h5>
                    <div className="dlab-post-meta text-white">
                      <ul>
                        <li className="post-date">
                          <i className="ti-calendar" />
                          <strong>10 Aug</strong>
                          <span> 2016</span>
                        </li>
                        <li className="post-author">
                          <i className="ti-user" />
                          By
                          <a href="#">demongo</a>
                        </li>
                        <li className="post-comment">
                          <i className="ti-comment-alt" />
                          <a href="#">0</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="dlab-box m-b30">
                <div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate">
                  <Image
                    alt=""
                    src="/images/product/item3.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="dlab-info-has p-a20 no-hover">
                    <a href="#" className="site-button button-sm pink m-b10">
                      Fashion
                    </a>
                    <h5>There are many variations.</h5>
                    <div className="dlab-post-meta text-white">
                      <ul>
                        <li className="post-date">
                          <i className="ti-calendar" />
                          <strong>10 Aug</strong>
                          <span> 2016</span>
                        </li>
                        <li className="post-author">
                          <i className="ti-user" />
                          By
                          <a href="#">demongo</a>
                        </li>
                        <li className="post-comment">
                          <i className="ti-comment-alt" />
                          <a href="#">0</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full bg-gray">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 p-lr0">
              <div className="dlab-box">
                <div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate">
                  <Image
                    alt=""
                    src="/images/product/item12.jpg"
                    width="768"
                    height="556"
                  />
                  <div className="dlab-info-has p-a20 no-hover">
                    <a href="#" className="site-button button-sm m-b10">
                      Fashion
                    </a>
                    <h5>There are many variations.</h5>
                    <div className="dlab-post-meta text-white">
                      <ul>
                        <li className="post-date">
                          <i className="ti-calendar" />
                          <strong>10 Aug</strong>
                          <span> 2016</span>
                        </li>
                        <li className="post-author">
                          <i className="ti-user" />
                          By
                          <a href="#">demongo</a>
                        </li>
                        <li className="post-comment">
                          <i className="ti-comment-alt" />
                          <a href="#">0</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 p-lr0">
              <div className="dlab-box">
                <div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate">
                  <Image
                    alt=""
                    src="/images/product/item11.jpg"
                    width="768"
                    height="556"
                  />
                  <div className="dlab-info-has p-a20 no-hover">
                    <a href="#" className="site-button button-sm red m-b10">
                      Fashion
                    </a>
                    <h5>There are many variations.</h5>
                    <div className="dlab-post-meta text-white">
                      <ul>
                        <li className="post-date">
                          <i className="ti-calendar" />
                          <strong>10 Aug</strong>
                          <span> 2016</span>
                        </li>
                        <li className="post-author">
                          <i className="ti-user" />
                          By
                          <a href="#">demongo</a>
                        </li>
                        <li className="post-comment">
                          <i className="ti-comment-alt" />
                          <a href="#">0</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 p-lr0">
              <div className="dlab-box">
                <div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate">
                  <Image
                    alt=""
                    src="/images/product/item10.jpg"
                    width="768"
                    height="556"
                  />
                  <div className="dlab-info-has p-a20 no-hover">
                    <a href="#" className="site-button button-sm pink m-b10">
                      Fashion
                    </a>
                    <h5>There are many variations.</h5>
                    <div className="dlab-post-meta text-white">
                      <ul>
                        <li className="post-date">
                          <i className="ti-calendar" />
                          <strong>10 Aug</strong>
                          <span> 2016</span>
                        </li>
                        <li className="post-author">
                          <i className="ti-user" />
                          By
                          <a href="#">demongo</a>
                        </li>
                        <li className="post-comment">
                          <i className="ti-comment-alt" />
                          <a href="#">0</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full bg-white content-inner-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <h4>Top Rated</h4>
              <div className="dlab-separator bg-primary" />
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item1.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item2.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item3.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item4.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <h4>Recent Item</h4>
              <div className="dlab-separator bg-primary" />
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item5.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item1.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item2.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item3.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <h4>Popular Item</h4>
              <div className="dlab-separator bg-primary" />
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item4.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item5.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item1.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item2.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <h4>New Item</h4>
              <div className="dlab-separator bg-primary" />
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item3.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item4.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item5.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
              <div className="item-widgets-box">
                <div className="item-widgets-left">
                  <Image
                    alt=""
                    src="/images/product/thumb/item1.jpg"
                    width="250"
                    height="294"
                  />
                </div>
                <div className="item-widgets-body text-black">
                  <h6 className="item-title text-uppercase font-weight-500 m-t0">
                    <a href="#">Product Title</a>
                  </h6>
                  <ul className="item-review text-yellow-light">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <h6 className="item-price m-b0">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full bg-gray content-inner text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 m-b30">
              <div className="item-add text-white">
                <Image
                  alt=""
                  src="/images/product/item12.jpg"
                  width="768"
                  height="556"
                />
                <div className="add-box">
                  <div className="dis-block">
                    <h5>SUMMER SALE</h5>
                    <h2>UP TO 50% OFF</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 m-b30">
              <div className="item-add text-white">
                <Image
                  alt=""
                  src="/images/product/item11.jpg"
                  width="768"
                  height="556"
                />
                <div className="add-box">
                  <div className="dis-block">
                    <h5>SUMMER SALE</h5>
                    <h2>UP TO 50% OFF</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full bg-white content-inner text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 m-b30">
              <div className="item-add text-black add-style-2 bg-gray">
                <Image
                  alt=""
                  src="/images/product/item12.jpg"
                  width="768"
                  height="556"
                />
                <div className="add-box">
                  <div className="dis-block">
                    <h5>SUMMER SALE</h5>
                    <h2>UP TO 50% OFF</h2>
                    <a
                      className="site-button radius-xl outline outline-2 black"
                      href="#"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 m-b30">
              <div className="item-add text-black add-style-2 bg-gray">
                <Image
                  alt=""
                  src="/images/product/item11.jpg"
                  width="768"
                  height="556"
                />
                <div className="add-box">
                  <div className="dis-block">
                    <h5>SUMMER SALE</h5>
                    <h2>UP TO 50% OFF</h2>
                    <a
                      className="site-button radius-xl outline outline-2 black"
                      href="#"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full p-t50 p-b20 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="icon-bx-wraper left shop-service-info m-b30">
                <div className="icon-md text-black radius">
                  <a href="#" className="icon-cell text-black">
                    <i className="fas fa-gift" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">Free shipping on orders $60+</h5>
                  <p>
                    Order more than 60$ and you will get free shippining
                    Worldwide. More info.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="icon-bx-wraper left shop-service-info m-b30">
                <div className="icon-md text-black radius">
                  <a href="#" className="icon-cell text-black">
                    <i className="fas fa-plane" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">Worldwide delivery</h5>
                  <p>
                    We deliver to the following countries: USA, Canada, Europe,
                    Australia
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="icon-bx-wraper left shop-service-info m-b30">
                <div className="icon-md text-black radius">
                  <a href="#" className="icon-cell text-black">
                    <i className="fas fa-history" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">60 days money back guranty!</h5>
                  <p>
                    Not happy with our product, feel free to return it, we will
                    refund 100% your money!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full bg-gray content-inner text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 m-b20">
              <div className="item-box">
                <div className="item-img outline-hv">
                  <Image
                    alt=""
                    src="/images/product/item9.jpg"
                    width="450"
                    height="514"
                  />
                </div>
                <div className="item-info text-left text-black p-tb10">
                  <h4 className="item-title font-weight-500 m-b10">
                    <a href="#">The Best Shop Was Created</a>
                  </h4>
                  <div className="dlab-post-meta text-gray">
                    <ul>
                      <li className="post-date">
                        <i className="ti-calendar" />
                        <strong>10 Aug</strong>
                        <span> 2016</span>
                      </li>
                      <li className="post-author">
                        <i className="ti-user" />
                        By
                        <a href="#">demongo</a>
                      </li>
                      <li className="post-comment">
                        <i className="ti-comment-alt" />
                        <a href="#">0</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 m-b20">
              <div className="item-box">
                <div className="item-img outline-hv">
                  <Image
                    alt=""
                    src="/images/product/item4.jpg"
                    width="450"
                    height="514"
                  />
                </div>
                <div className="item-info text-left text-black p-tb10">
                  <h4 className="item-title font-weight-500 m-b10">
                    <a href="#">The Best Shop Was Created</a>
                  </h4>
                  <div className="dlab-post-meta text-gray">
                    <ul>
                      <li className="post-date">
                        <i className="ti-calendar" />
                        <strong>10 Aug</strong>
                        <span> 2016</span>
                      </li>
                      <li className="post-author">
                        <i className="ti-user" />
                        By
                        <a href="#">demongo</a>
                      </li>
                      <li className="post-comment">
                        <i className="ti-comment-alt" />
                        <a href="#">0</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 m-b20">
              <div className="item-box">
                <div className="item-img outline-hv">
                  <Image
                    alt=""
                    src="/images/product/item2.jpg"
                    width="450"
                    height="514"
                  />
                </div>
                <div className="item-info text-left text-black p-tb10">
                  <h4 className="item-title font-weight-500 m-b10">
                    <a href="#">The Best Shop Was Created</a>
                  </h4>
                  <div className="dlab-post-meta text-gray">
                    <ul>
                      <li className="post-date">
                        <i className="ti-calendar" />
                        <strong>10 Aug</strong>
                        <span> 2016</span>
                      </li>
                      <li className="post-author">
                        <i className="ti-user" />
                        By
                        <a href="#">demongo</a>
                      </li>
                      <li className="post-comment">
                        <i className="ti-comment-alt" />
                        <a href="#">0</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full p-t50 p-b20 bg-black-light text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="icon-bx-wraper left shop-service-info m-b30">
                <div className="icon-md text-white radius">
                  <a href="#" className="icon-cell text-white">
                    <i className="fas fa-gift" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">Free shipping on orders $60+</h5>
                  <p>
                    Order more than 60$ and you will get free shippining
                    Worldwide. More info.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="icon-bx-wraper left shop-service-info m-b30">
                <div className="icon-md text-white radius">
                  <a href="#" className="icon-cell text-white">
                    <i className="fas fa-plane" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">Worldwide delivery</h5>
                  <p>
                    We deliver to the following countries: USA, Canada, Europe,
                    Australia
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="icon-bx-wraper left shop-service-info m-b30">
                <div className="icon-md text-white radius">
                  <a href="#" className="icon-cell text-white">
                    <i className="fas fa-history" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">60 days money back guranty!</h5>
                  <p>
                    Not happy with our product, feel free to return it, we will
                    refund 100% your money!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full bg-gray content-inner-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item1.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in no-bg tb left">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-left text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30 item-style-1">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item2.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in no-bg tb top right">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item3.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in no-bg tb right">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item4.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in no-bg tb top">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item8.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in left">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-left text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30 item-style-1">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item7.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in top right">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item6.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in right">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item5.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in top">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item8.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in center">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-left text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30 item-style-1">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item7.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in full no-bg">
                    <div className="center p-lr40">
                      <a
                        href="#"
                        className="site-button radius-xl m-b10 btn-block"
                      >
                        <i className="ti-shopping-cart" /> Add To Cart
                      </a>
                      <a href="#" className="site-button radius-xl btn-block">
                        <i className="ti-heart" /> Wishlist
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item6.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in full">
                    <div className="center p-lr40">
                      <a
                        href="#"
                        className="site-button radius-xl m-b10 btn-block"
                      >
                        <i className="ti-shopping-cart" /> Add To Cart
                      </a>
                      <a href="#" className="site-button radius-xl btn-block">
                        <i className="ti-heart" /> Wishlist
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-box m-b30">
                <div className="item-img">
                  <Image
                    alt=""
                    src="/images/product/item5.jpg"
                    width="450"
                    height="514"
                  />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a20 bg-white">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <a href="#">Product Title</a>
                  </h6>
                  <h4 className="item-price">
                    <del>$232</del> <span className="text-primary">$192</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full bg-white content-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 m-b30">
              <div className="item-add add-style-3">
                <Image
                  alt=""
                  src="/images/product/item11.jpg"
                  width="768"
                  height="556"
                />
                <div className="add-box">
                  <div className="m-auto add-box-in text-black">
                    <h5>CLEARANCE SALES</h5>
                    <h2>GET UP TO 20% OFF</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 m-b30">
              <div className="item-add add-style-3">
                <Image
                  alt=""
                  src="/images/product/item10.jpg"
                  width="768"
                  height="556"
                />
                <div className="add-box">
                  <div className="m-auto add-box-in black text-white">
                    <h5>CLEARANCE SALES</h5>
                    <h2>GET UP TO 20% OFF</h2>
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
