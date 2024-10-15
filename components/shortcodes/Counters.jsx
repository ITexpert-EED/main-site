import { counterData, facts2 } from "@/data/facts";
import React from "react";
import Counter from "../common/Counter";
import Link from "next/link";

export default function Counters() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Counters</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Counters</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* content start */}
      <div className="content">
        <div className="section-full content-inner bg-white bg-img-fix">
          <div className="container">
            <div className="section-content">
              <div className="row">
                {facts2.map((elm, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30"
                  >
                    <div className="counter-style-1">
                      <div className="">
                        <span className="counter">
                          <Counter max={elm.number} />
                        </span>
                      </div>
                      <span className="counter-text">{elm.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-gray">
          <div className="container">
            <div className="section-content">
              <div className="row">
                {facts2.map((elm, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30"
                  >
                    <div className="counter-style-1">
                      <div className="">
                        <i className={`icon ${elm.iconClass} text-primary`} />
                        <span className="counter">
                          <Counter max={elm.number} />
                        </span>
                      </div>
                      <span className="counter-text">{elm.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-white bg-img-fix">
          <div className="container">
            <div className="section-content">
              <div className="row">
                {facts2.map((elm, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30"
                  >
                    <div className="m-b30 dlab-box text-center counter-style-2">
                      <div className="icon-lg">
                        <i className={elm.iconClass} />
                      </div>
                      <div className="counter text-primary m-b5">
                        <Counter max={elm.number} />
                      </div>
                      <span className="counter-text">{elm.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-full overlay-black-dark bg-img-fix text-white content-inner"
          style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
        >
          <div className="container">
            <div className="section-content">
              <div className="row">
                {facts2.map((elm, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30"
                  >
                    <div className="m-b30 dlab-box text-center counter-style-2">
                      <div className="icon-lg">
                        <i className={elm.iconClass} />
                      </div>
                      <div className="counter text-blue m-b5">
                        <Counter max={elm.number} />
                      </div>
                      <span className="counter-text">{elm.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-white bg-img-fix">
          <div className="container">
            <div className="section-content">
              <div className="row">
                {facts2.map((elm, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30"
                  >
                    <div className="counter-style-1">
                      <div className="">
                        <span className="counter text-blue">
                          <Counter max={elm.number} />
                        </span>
                      </div>
                      <span className="counter-text">{elm.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-full overlay-black-dark bg-img-fix text-white content-inner"
          style={{ backgroundImage: "url(/images/background/bg2.jpg)" }}
        >
          <div className="container">
            <div className="section-content">
              <div className="row">
                {counterData.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30"
                  >
                    <div className="dis-tbl m-auto">
                      <div
                        className={`m-b30 dis-tbl-cell dlab-box text-center counter-style-3 rounded text-${item.color}`}
                      >
                        <div className={`counter text-${item.color} m-b5`}>
                          <Counter max={item.count} />
                        </div>
                        <span className="counter-text text-white">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-white bg-img-fix text-center">
          <div className="container">
            <div className="section-content">
              <div className="row">
                {facts2.map((elm, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30"
                  >
                    <div className="counter-style-4">
                      <div className="">
                        <span className="counter">
                          <Counter max={elm.number} />
                        </span>
                      </div>
                      <span className="counter-text">{elm.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
