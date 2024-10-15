import React from "react";
import Link from "next/link";
export default function Tabs() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Tabs</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Tabs</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="bg-white tabs-box-area">
        {/* Left & right section start */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Tabs defult</h4>
                </div>
                {/* tabs defult */}
                <div className="section-content box-sort-in button-example p-t10 p-b30 tabs-site-button">
                  <div className="dlab-tabs">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-1"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head">Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-1">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-1">
                          <i className="fas fa-cog" />
                          <span className="title-head">developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-1" className="tab-pane active">
                        <p className="m-b0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                      <div id="graphic-design-1" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-1" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tabs defult End */}
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs content border</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30 tabs-site-button">
                  <div className="dlab-tabs border">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-2"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-2">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-2">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-2" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-2" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-2" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs with background nav</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs bg-tabs">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-3"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-3">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-3">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-3" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-3" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-3" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs content border &amp; background nav</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs border bg-tabs">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-4"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-4">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-4">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-4" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-4" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-4" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs with background nav</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs border-top bg-tabs">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-5"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-5">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-5">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-5" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-5" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-5" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs content border &amp; background nav</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs border-top border bg-tabs">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-6"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-6">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-6">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-6" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-6" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-6" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Pricing table-1 Columns 3 with gap</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs vertical">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-7"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-7">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-7">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-7" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-7" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-7" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs nav left &amp; content border</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs vertical border">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-8"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-8">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-8">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-8" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-8" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-8" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs nav left &amp; backgound tabs</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs bg-tabs vertical">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-9"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-9">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-9">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-9" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-9" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-9" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs nav left &amp; content border</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs bg-tabs vertical border">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-10"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-10">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-10">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-10" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-10" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-10" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs nav right</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs vertical right">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-11"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-11">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-11">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-11" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-11" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-11" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs nav right &amp; content border</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs vertical right border">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-12"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-12">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-12">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-12" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-12" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-12" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs nav right</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs bg-tabs vertical right">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-13"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-13">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-13">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-13" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-13" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-13" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dlab-divider bg-gray-dark tb10" />
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>tabs nav right &amp; content border</h4>
                </div>
                <div className="section-content box-sort-in button-example p-t10 p-b30">
                  <div className="dlab-tabs bg-tabs vertical right border">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-bs-toggle="tab"
                          href="#web-design-14"
                          className="active"
                        >
                          <i className="ti-world" />
                          <span className="title-head"> Web design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#graphic-design-14">
                          <i className="ti-image" />
                          <span className="title-head">Graphic Design</span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#developement-14">
                          <i className="fas fa-cog" />
                          <span className="title-head"> developement</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-14" className="tab-pane active">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Web design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="graphic-design-14" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Graphic Design lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Praesent Suspendisse et justo. mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                      <div id="developement-14" className="tab-pane">
                        <p className="m-b0">
                          <strong>
                            <em>
                              Developement lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit.
                            </em>
                          </strong>
                          <br />
                          Commyolk Suspendisse et justo. Praesent mattis augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Left & right section  END */}
      </div>
    </>
  );
}
