"use client";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Autoplay from "lightgallery/plugins/autoplay";
import Shaire from "lightgallery/plugins/share";
import Hash from "lightgallery/plugins/hash";
import lgZoom from "lightgallery/plugins/zoom";

export default function GallaryWrapper({ children }) {
  return (
    <>
      <LightGallery
        exThumbImage="data-exthumbimage"
        selector={"[data-src]"}
        speed={500}
        plugins={[lgThumbnail, lgZoom, Autoplay, Shaire, Hash]}
      >
        {children}
      </LightGallery>
    </>
  );
}
