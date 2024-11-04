import Image from "next/image";

export default function About2() {
  return (
    <div className="section-full box-about-list">
      <div className="row spno">
        <div className="col-lg-6 col-md-12">
          <Image
            alt=""
            className="img-cover"
            src="/images/about/pic3.jpg"
            width="1000"
            height="674"
          />
        </div>
        <div className="col-lg-6 col-md-12 bg-primary">
          <div className="max-w700 m-auto p-tb50 p-lr20">
            <div className="text-white">
              <h2>
                We're thriving and building <br />
                better products
              </h2>
            </div>
            <div className="icon-bx-wraper m-b30 left">
              <div className="icon-md">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-factory"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">Material Engineering</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod..
                </p>
              </div>
            </div>
            <div className="icon-bx-wraper m-b30 left">
              <div className="icon-md">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-settings"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">Chemical Research</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod..
                </p>
              </div>
            </div>
            <div className="icon-bx-wraper left">
              <div className="icon-md">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-worker"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">Petroleum Engineering</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
