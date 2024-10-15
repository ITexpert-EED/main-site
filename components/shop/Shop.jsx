"use client";
import Image from "next/image";
import { products } from "@/data/products";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import React from "react";
export default function Shop() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <div className="section-full content-inner">
      {/* Product */}
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className={`item-box m-b10 ${product.styleClass}`}>
                <div className="item-img">
                  <Image alt="" src={product.imgSrc} width="450" height="514" />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a
                          className={
                            isAddedToCartProducts(product.id) ? "added" : ""
                          }
                          onClick={() => addProductToCart(product.id)}
                        >
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a10">
                  <h6 className="item-title font-weight-500">
                    <Link href={`/shop-product-details/${product.title}`}>
                      {product.title}
                    </Link>
                  </h6>
                  <ul className="item-review">
                    {[...Array(5)].map((_, i) => (
                      <React.Fragment key={i}>
                        <li>
                          <i
                            className={
                              i + 1 < product.rating
                                ? "fas fa-star text-yellow"
                                : i + 0.5 == product.rating
                                ? "fas fa-star-half-alt text-yellow"
                                : "far fa-star"
                            }
                          />
                        </li>{" "}
                      </React.Fragment>
                    ))}
                  </ul>
                  <h4 className="item-price">
                    <del>${product.price}</del>{" "}
                    <span className="text-primary">
                      ${product.discountedPrice}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Product END */}
    </div>
  );
}
