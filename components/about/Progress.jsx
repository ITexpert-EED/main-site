import Image from "next/image";

export default function Progress() {
  return (
    <div className="section-full about-progress">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-12 bg-white">
            <div className="max-w700 m-auto content-inner">
              <div className="section-head">
                <h2 className="title">
                  We provide the exceptional service we'd want to experience
                  ourselves
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
              </div>
              <div className="about-progress-box">
                <h6 className="text-primary">
                  Web Development
                  <span className="progress-num pull-right">85%</span>
                </h6>
                <div className="about-progress-bar bg-gray-dark">
                  <div
                    className="about-progress bg-primary wow slideInLeft"
                    data-wow-delay="0.2s"
                    data-wow-duration="2s"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
              <div className="about-progress-box">
                <h6 className="text-primary">
                  Web Designer
                  <span className="progress-num pull-right">80%</span>
                </h6>
                <div className="about-progress-bar bg-gray-dark">
                  <div
                    className="about-progress bg-primary wow slideInLeft"
                    data-wow-delay="0.4s"
                    data-wow-duration="2s"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
              <div className="about-progress-box">
                <h6 className="text-primary">
                  Performance
                  <span className="progress-num pull-right">75%</span>
                </h6>
                <div className="about-progress-bar bg-gray-dark">
                  <div
                    className="about-progress bg-primary wow slideInLeft"
                    data-wow-delay="0.6s"
                    data-wow-duration="2s"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 p-a0">
            <Image
              alt=""
              className="img-cover"
              src="/images/about/pic5.jpg"
              width="1000"
              height="674"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
