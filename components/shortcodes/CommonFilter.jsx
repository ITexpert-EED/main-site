"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import GallaryWrapper from "../common/GallaryWrapper";

const filterOptions = [
  { filter: "*", label: "All" },
  { filter: ".nature", label: "Nature" },
  { filter: ".fashion", label: "Fashion" },
  { filter: ".woman", label: "Woman" },
  { filter: ".man", label: "Man" },
  { filter: ".animal", label: "Animal" },
  { filter: ".pet", label: "Pet" },
];

const galleryItems = [
  {
    src: "/images/gallery/filters/pic1.jpg",
    filterClass: "nature",
    title: "Image 1 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic2.jpg",
    filterClass: "animal",
    title: "Image 2 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic3.jpg",
    filterClass: "animal",
    title: "Image 3 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic4.jpg",
    filterClass: "fashion",
    title: "Image 4 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic5.jpg",
    filterClass: "nature",
    title: "Image 5 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic6.jpg",
    filterClass: "woman",
    title: "Image 6 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic7.jpg",
    filterClass: "man",
    title: "Image 7 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic8.jpg",
    filterClass: "nature",
    title: "Image 8 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic9.jpg",
    filterClass: "man",
    title: "Image 9 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic10.jpg",
    filterClass: "fashion",
    title: "Image 10 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic11.jpg",
    filterClass: "woman",
    title: "Image 11 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic12.jpg",
    filterClass: "animal pet",
    title: "Image 12 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic13.jpg",
    filterClass: "woman",
    title: "Image 13 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic14.jpg",
    filterClass: "animal pet",
    title: "Image 14 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic15.jpg",
    filterClass: "animal",
    title: "Image 15 Title will come here",
  },
  {
    src: "/images/gallery/filters/pic16.jpg",
    filterClass: "fashion",
    title: "Image 16 Title will come here",
  },
];

export default function CommonFilter({ btnClass = "", filterStyle = 1 }) {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".card-container",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h3
            className={`m-t0 m-b20 ${
              [2, 4, 8, 12, 14, 16, 18].includes(filterStyle)
                ? "text-white"
                : ""
            }`}
          >
            Filters Style {filterStyle}
          </h3>
          <div
            className={`site-filters clearfix m-b20 ${
              [1, 2].includes(filterStyle) ? "style1" : ""
            } ${filterStyle == 2 ? "white" : ""}  `}
          >
            <ul className={`filters${filterStyle}`} data-bs-toggle="buttons">
              {filterOptions.map((item, index) => (
                <React.Fragment key={index}>
                  <li
                    onClick={() => updateCategory(item.filter)}
                    className={`btn ${
                      currentFilter == item.filter ? "active" : ""
                    } `}
                  >
                    <input type="radio" />
                    <a href="#" className={btnClass}>
                      <span>{item.label}</span>
                    </a>
                  </li>{" "}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="clearfix">
        <ul
          id="masonry1"
          className="dlab-gallery-listing gallery-grid-8 gallery text-center sp10"
          ref={isotopContainer}
        >
          <GallaryWrapper>
            {galleryItems.map((item, index) => (
              <li
                key={index}
                // data-src={item.src}
                className={`card-container m-b10 col-lg-6 ${item.filterClass}`}
              >
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <Image src={item.src} alt="" width={800} height={650} />
                  <div className="overlay-bx">
                    <div className="overlay-icon">
                      <span
                        data-exthumbimage={item.src}
                        data-src={item.src}
                        className="check-km"
                        title={item.title}
                      >
                        <i className="ti-zoom-in icon-bx-xs" />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </GallaryWrapper>
        </ul>
      </div>
    </div>
  );
}
