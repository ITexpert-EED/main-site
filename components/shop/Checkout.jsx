"use client";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
export default function Checkout() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();
  return (
    <div className="section-full content-inner">
      {/* Product */}
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()} className="shop-form">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-md-6 m-b30">
              <h4>Billing &amp; Shipping Address</h4>
              <div className="form-group">
                <select
                  className="form-select form-select-lg type-2"
                  aria-label="Default select example"
                >
                  <option value="">Åland Islands</option>
                  <option value="">Afghanistan</option>
                  <option value="">Albania</option>
                  <option value="">Algeria</option>
                  <option value="">Andorra</option>
                  <option value="">Angola</option>
                  <option value="">Anguilla</option>
                  <option value="">Antarctica</option>
                  <option value="">Antigua and Barbuda</option>
                  <option value="">Argentina</option>
                  <option value="">Armenia</option>
                  <option value="">Aruba</option>
                  <option value="">Australia</option>
                </select>
              </div>

              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc."
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Town / City"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State / County"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postcode / Zip"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <h6>
                <button
                  className="site-button-link"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#create-an-account"
                >
                  Create an account
                  <i className="far fa-arrow-alt-circle-down" />
                </button>
              </h6>
              <div id="create-an-account" className="collapse">
                <p>
                  Create an account by entering the information below. If you
                  are a returning customer please login at the top of the page.
                </p>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-md-6 m-b30">
              <h4 className="font-weight-600">
                <button
                  className="site-button-link"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#different-address"
                >
                  Ship to a different address
                  <i className="far fa-arrow-alt-circle-down" />
                </button>
              </h4>
              <div id="different-address" className="collapse">
                <p>
                  If you have shopped with us before, please enter your details
                  in the boxes below. If you are a new customer please proceed
                  to the Billing &amp; Shipping section.
                </p>
                <div className="form-group">
                  <select
                    className="form-select form-select-lg type-2"
                    aria-label="Default select example"
                  >
                    <option value="">Åland Islands</option>
                    <option value="">Afghanistan</option>
                    <option value="">Albania</option>
                    <option value="">Algeria</option>
                    <option value="">Andorra</option>
                    <option value="">Angola</option>
                    <option value="">Anguilla</option>
                    <option value="">Antarctica</option>
                    <option value="">Antigua and Barbuda</option>
                    <option value="">Argentina</option>
                    <option value="">Armenia</option>
                    <option value="">Aruba</option>
                    <option value="">Australia</option>
                  </select>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suite, unit etc."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Town / City"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State / County"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postcode / Zip"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <p>
                  Create an account by entering the information below. If you
                  are a returning customer please login at the top of the page.
                </p>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="dlab-divider bg-gray-dark text-gray-dark icon-center">
          <i className="fas fa-circle bg-white text-gray-dark" />
        </div>
        <div className="row">
          <div className="col-lg-6 m-b15">
            {cartProducts.length ? (
              <>
                <h4>Your Order</h4>
                <table className="table-bordered check-tbl">
                  <thead>
                    <tr>
                      <th>IMAGE</th>
                      <th>PRODUCT NAME</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((elm, i) => (
                      <tr key={i}>
                        <td>
                          <Image
                            alt=""
                            src={elm.imgSrc}
                            width="450"
                            height="514"
                          />
                        </td>
                        <td>
                          {elm.title} x {elm.quantity}
                        </td>
                        <td className="product-price">
                          ${(elm.discountedPrice * elm.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
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
          <div className="col-lg-6 m-b15">
            <form onSubmit={(e) => e.preventDefault()} className="shop-form">
              <h4>Order Total</h4>
              <table className="table-bordered check-tbl">
                <tbody>
                  <tr>
                    <td>Order Subtotal</td>
                    <td className="product-price">${totalPrice.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>Free Shipping</td>
                  </tr>
                  <tr>
                    <td>Coupon</td>
                    <td className="product-price">$28.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td className="product-price-total">
                      ${Math.max(0, totalPrice - 28).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h5>Payment Method</h5>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name on Card"
                />
              </div>
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
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Credit Card Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Card Verification Number"
                />
              </div>
              <div className="form-group">
                <button
                  className="site-button button-lg btn-block"
                  type="button"
                >
                  Place Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Product END */}
    </div>
  );
}
