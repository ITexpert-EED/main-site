import React from "react";
import Link from "next/link";

export default function Dividers() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Devider</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Devider</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="bg-white">
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Dividers with height</h4>
                </div>
                {/* Dividers with height */}
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers height 1px</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider bg-gray-dark">
                    <i className="icon-dot c-square" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers height 2px</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-2px bg-gray-dark">
                    <i className="icon-dot c-square" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers height 3px</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-3px bg-gray-dark">
                    <i className="icon-dot c-square" />
                  </div>
                </div>
                <div className="m-b0">
                  <h5 className="text-uppercase">Dividers height 4px</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-4px bg-gray-dark">
                    <i className="icon-dot c-square" />
                  </div>
                </div>
              </div>
            </div>
            {/* Dividers with height END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray tb10">
          <i className="icon-dot c-square" />
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Dividers with colors</h4>
                </div>
                {/* Dividers with colors */}
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers bg primary</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider bg-primary">
                    <i className="icon-dot c-square" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers bg red</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-2px bg-red">
                    <i className="icon-dot c-square" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers bg green</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-3px bg-green">
                    <i className="icon-dot c-square" />
                  </div>
                </div>
                <div className="m-b0">
                  <h5 className="text-uppercase">Dividers bg black</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-4px bg-black">
                    <i className="icon-dot c-square" />
                  </div>
                </div>
              </div>
            </div>
            {/* Dividers with colors END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray tb10">
          <i className="icon-dot c-square" />
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Dividers with circle</h4>
                </div>
                {/* Dividers with circle */}
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers circle left</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider bg-gray-dark text-gray-dark icon-left">
                    <i className="fas fa-circle" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers circle right</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider bg-gray-dark text-gray-dark icon-right">
                    <i className="fas fa-circle" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers circle center</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider bg-gray-dark text-gray-dark icon-center">
                    <i className="fas fa-circle bg-white text-gray-dark" />
                  </div>
                </div>
              </div>
            </div>
            {/* Dividers with circle END */}
          </div>
        </div>
        <div className="dlab-divider bg-gray tb10">
          <i className="icon-dot c-square" />
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Dividers with icon</h4>
                </div>
                {/* Dividers with icon */}
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers circle left</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-2px bg-gray-dark text-gray-dark icon-left">
                    <i className="far fa-thumbs-up bg-gray-dark text-white" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers circle right</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-2px bg-gray-dark text-gray-dark icon-right">
                    <i className="ti-user bg-gray-dark text-white" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers circle center</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-2px bg-gray-dark text-gray-dark icon-center">
                    <i className="fas fa-truck bg-gray-dark text-white" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">
                    Dividers circle left primary
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-2px bg-primary icon-left">
                    <i className="far fa-thumbs-up bg-primary text-white" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">
                    Dividers circle right black
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-2px bg-black icon-right">
                    <i className="ti-user bg-black text-white" />
                  </div>
                </div>
                <div className="m-b10">
                  <h5 className="text-uppercase">Dividers circle center red</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic
                  </p>
                  <div className="dlab-divider divider-2px bg-red icon-center">
                    <i className="fas fa-truck bg-red text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Dividers with icon END */}
          </div>
          {/* content END */}
        </div>
        {/* Content END*/}
      </div>
    </>
  );
}
