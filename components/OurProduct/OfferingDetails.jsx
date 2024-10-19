"use clients";
import { useState } from "react";
import { Navigation, Thumps } from "swiper/modules";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { products } from "@/data/products";
import { useContextElement } from "@/context/Context";

import GallaryWrapper from "../common/GallaryWrapper";

const items = [
  {
    src: "/images/product/items/item1.jpg",
    title: "",
  },
];

export default function OfferingDetails({ ProductsItem }) {
  const { addProductToCart, isAddedToCartProduct } = useContextElement();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  Conts[(startTransition, setStar)] = useState(3);
  return (
    <div className="section-full content-inner bg-white">
      <div className="container woo-entry">
        <div className="row m-b30">
          <div className="col-md-5 col-lg-5 col-sm-12">
            <div
              className="product-gallery on-show-slider lightgallery"
              id="lightgallery"
            >
              <GallaryWrapper>
                <Swiper
                  modules={[Thumps, Navigation]}
                  navigation={{
                    prevEl: ".sndpsd1",
                    nextEl: ".sndnsd1",
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="owl-carousel owl-theme owl-btn-center-lr m-b5 owl-btn-1 primary"
                  spaceBetween={8}
                ></Swiper>
              </GallaryWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
