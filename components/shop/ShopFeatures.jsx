import React from "react";

export default function ShopFeatures() {
  return (
    <div className="section-full p-t50 p-b20 bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className="icon-bx-wraper left shop-service-info m-b30">
              <div className="icon-md text-black radius">
                <a href="#" className="icon-cell text-white">
                  <i className="fas fa-gift" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte">Free shipping on orders $60+</h5>
                <p>
                  Order more than 60$ and you will get free shippining
                  Worldwide. More info.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="icon-bx-wraper left shop-service-info m-b30">
              <div className="icon-md text-black radius">
                <a href="#" className="icon-cell text-white">
                  <i className="fas fa-plane" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte">Worldwide delivery</h5>
                <p>
                  We deliver to the following countries: USA, Canada, Europe,
                  Australia
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="icon-bx-wraper left shop-service-info m-b30">
              <div className="icon-md text-black radius">
                <a href="#" className="icon-cell text-white">
                  <i className="fas fa-history" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte">60 days money back guranty!</h5>
                <p>
                  Not happy with our product, feel free to return it, we will
                  refund 100% your money!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
