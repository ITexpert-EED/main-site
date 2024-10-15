import React from "react";

export default function Pagination() {
  return (
    <>
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
    </>
  );
}
