import React from "react";
import Link from "next/link";
export default function Pagination() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Pagination</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Pagination</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="bg-white">
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h4>Pagination Style</h4>
                {/* Alert box */}
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx primary clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded-sm clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded-sm primary clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded primary clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" />
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx primary clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" />
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded primary clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx primary clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx primary clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="next pull-right">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx gray clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx gray clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <h4>Pagination Size</h4>
                {/* Alert box */}
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx pagination-sm clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx pagination-lg clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx pagination-sm primary clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx clearfix primary">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx pagination-lg clearfix primary">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded pagination-sm clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded pagination-lg clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded pagination-sm primary clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded clearfix primary">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded pagination-lg clearfix primary">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in pagination-sm m-b15">
                  <div className="pagination-bx rounded-sm clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="next pull-right">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx primary rounded clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="next pull-right">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-content box-sort-in m-b15">
                  <div className="pagination-bx rounded pagination-lg clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">
                          <i className="ti-arrow-left" /> Prev
                        </a>
                      </li>
                      <li className="next pull-right">
                        <a href="#">
                          Next <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Alert box END */}
          </div>
        </div>
        {/* Left & right section  END */}
      </div>
    </>
  );
}
