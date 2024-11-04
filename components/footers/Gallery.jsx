"use client";
import { galleryItems3 } from "@/data/gallery";

import Image from "next/image";
import React from "react";

import GallaryWrapper from "../common/GallaryWrapper";

export default function GalleryComponent() {
  return (
    <ul className="lightgallery">
      <GallaryWrapper>
        {galleryItems3.map((item, i) => (
          <li key={i} className="img-effect2">
            <span
              data-exthumbimage={item.src}
              data-src={item.src}
              className="check-km"
              title={item.title}
            >
              <Image alt="" src={item.src} width="100" height="90" />
            </span>
          </li>
        ))}{" "}
      </GallaryWrapper>
    </ul>
  );
}
