"use client";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
export default function ShopCart() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();
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
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  return (
    <div className="section-full content-inner">
      {/* Product */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {cartProducts.length ? (
              <div className="table-responsive">
                <table className="table check-tbl">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Product name</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Close</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((elm, i) => (
                      <tr key={i} className="alert">
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
                        <div className="quantity btn-quantity max-w80">
                          <div className="input-group bootstrap-touchspin">
                            <span
                              className="input-group-addon bootstrap-touchspin-prefix"
                              style={{ display: "none" }}
                            />
                            <input
                              id="demo_vertical3"
                              type="number"
                              value={elm.quantity}
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
                                  setQuantity(elm.id, elm.quantity + 1)
                                }
                              >
                                <i className="ti-plus" />
                              </button>
                              <button
                                className="btn btn-default bootstrap-touchspin-down"
                                type="button"
                                onClick={() =>
                                  setQuantity(elm.id, elm.quantity - 1)
                                }
                              >
                                <i className="ti-minus" />
                              </button>
                            </span>
                          </div>
                        </div>

                        <td className="product-item-totle">
                          ${(elm.discountedPrice * elm.quantity).toFixed(2)}
                        </td>
                        <td className="product-item-close">
                          <a
                            onClick={() => removeItem(elm.id)}
                            className="ti-close"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="row mb-5 gap-3 align-items-center">
                <div className="col-6">Your cart is empty</div>
                <div className="col-5">
                  <Link href={"/shop"}>
                    <button className="site-button" type="button">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-b15">
            <form onSubmit={(e) => e.preventDefault()} className="shop-form">
              <h5>Calculate Shipping</h5>
              <div className="form-group">
                <select
                  className="form-select form-select-lg type-2"
                  aria-label="Default select example"
                >
                  <option value="">Credit Card Type</option>
                  <option value="">Another option</option>
                  <option value="">A option</option>
                  <option value="">Potato</option>
                </select>
              </div>

              <div className="row">
                <div className="form-group col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Credit Card Number"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Verification Number"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coupon Code"
                />
              </div>
              <div className="form-group">
                <button className="site-button" type="button">
                  Apply Coupon
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 m-b15">
            <h5>Cart Subtotal</h5>
            <table className="table-bordered check-tbl">
              <tbody>
                <tr>
                  <td>Order Subtotal</td>
                  <td>${totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free Shipping</td>
                </tr>
                <tr>
                  <td>Coupon</td>
                  <td>$28.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>${Math.max(0, totalPrice - 28).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <div className="form-group">
              <button className="site-button" type="button">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Product END */}
    </div>
  );
}
