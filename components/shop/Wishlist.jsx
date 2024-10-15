"use client";
import Image from "next/image";
import { products } from "@/data/products";
import { useContextElement } from "@/context/Context";
import { useRef } from "react";
export default function Wishlist() {
  const inputRefs = useRef([]);
  const {
    cartProducts,
    setCartProducts,

    isAddedToCartProducts,
  } = useContextElement();
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.id == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  const addProductToCart = (index, id) => {
    if (!cartProducts.filter((elm) => elm.id == id)[0]) {
      const item = {
        ...products.filter((elm) => elm.id == id)[0],
        quantity: inputRefs.current[index].value / 1,
      };
      setCartProducts((pre) => [...pre, item]);

      // openCart();
    }
  };

  const updateQuantity = (i, value) => {
    if (value >= 1) {
      inputRefs.current[i].value = value;
    }
  };
  return (
    <div className="section-full content-inner">
      {/* Product */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table check-tbl">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Product name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Add to cart</th>
                    <th>Close</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 6).map((elm, index) => (
                    <tr key={index} className="alert">
                      <td className="product-item-img">
                        <Image
                          alt=""
                          src={elm.imgSrc}
                          width="250"
                          height="294"
                        />
                      </td>
                      <td className="product-item-name">{elm.title}</td>
                      <td className="product-item-price">
                        ${elm.discountedPrice.toFixed(2)}
                      </td>
                      <td className="product-item-quantity">
                        <div className="quantity btn-quantity max-w80">
                          {isAddedToCartProducts(elm.id) ? (
                            <div className="input-group bootstrap-touchspin">
                              <span
                                className="input-group-addon bootstrap-touchspin-prefix"
                                style={{ display: "none" }}
                              />
                              <input
                                type="number"
                                ref={(el) => (inputRefs.current[index] = el)}
                                value={
                                  cartProducts.filter(
                                    (el) => el.id == elm.id
                                  )[0].quantity
                                }
                                min={1}
                                onChange={(e) =>
                                  setQuantity(elm.id, e.target.value / 1)
                                }
                                name="demo_vertical2"
                                className="form-control"
                                style={{ display: "block" }}
                              />
                              <span
                                className="input-group-addon bootstrap-touchspin-postfix"
                                style={{ display: "none" }}
                              />
                              <span className="input-group-btn-vertical">
                                <button
                                  className="btn btn-default bootstrap-touchspin-up"
                                  type="button"
                                  onClick={() =>
                                    setQuantity(
                                      elm.id,
                                      cartProducts.filter(
                                        (el) => el.id == elm.id
                                      )[0].quantity + 1
                                    )
                                  }
                                >
                                  <i className="ti-plus" />
                                </button>
                                <button
                                  className="btn btn-default bootstrap-touchspin-down"
                                  type="button"
                                  onClick={() =>
                                    setQuantity(
                                      elm.id,
                                      cartProducts.filter(
                                        (el) => el.id == elm.id
                                      )[0].quantity - 1
                                    )
                                  }
                                >
                                  <i className="ti-minus" />
                                </button>
                              </span>
                            </div>
                          ) : (
                            <div className="input-group bootstrap-touchspin">
                              <span
                                className="input-group-addon bootstrap-touchspin-prefix"
                                style={{ display: "none" }}
                              />
                              <input
                                type="number"
                                defaultValue={1}
                                ref={(el) => (inputRefs.current[index] = el)}
                                name="demo_vertical2"
                                onChange={(e) =>
                                  updateQuantity(index, e.target.value / 1)
                                }
                                min={1}
                                className="form-control"
                                style={{ display: "block" }}
                              />
                              <span
                                className="input-group-addon bootstrap-touchspin-postfix"
                                style={{ display: "none" }}
                              />
                              <span className="input-group-btn-vertical">
                                <button
                                  className="btn btn-default bootstrap-touchspin-up"
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      index,
                                      inputRefs.current[index].value / 1 + 1
                                    )
                                  }
                                >
                                  <i className="ti-plus" />
                                </button>
                                <button
                                  className="btn btn-default bootstrap-touchspin-down"
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      index,
                                      inputRefs.current[index].value / 1 - 1
                                    )
                                  }
                                >
                                  <i className="ti-minus" />
                                </button>
                              </span>
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="product-item-totle">
                        <a
                          className="site-button"
                          onClick={() => addProductToCart(index, elm.id)}
                        >
                          {isAddedToCartProducts(elm.id)
                            ? "Already Added"
                            : "Add To Cart"}
                        </a>
                      </td>
                      <td className="product-item-close">
                        <a
                          href="#"
                          data-bs-dismiss="alert"
                          aria-label="close"
                          className="ti-close"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Product END */}
    </div>
  );
}
