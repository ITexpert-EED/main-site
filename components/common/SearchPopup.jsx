"use client";

import { toggleSearch } from "@/utlis/toggleSearch";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SearchPopup() {
  const pathname = usePathname();
  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById("quik-search-btn")
        ?.addEventListener("click", toggleSearch);
    }, 100);
    return () => {
      document
        .getElementById("quik-search-btn")
        ?.removeEventListener("click", toggleSearch);
    };
  }, [pathname]);

  return (
    <div className="dlab-quik-search" style={{ display: "block" }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          name="search"
          defaultValue=""
          type="text"
          className="form-control"
          placeholder="Type to search"
        />
        <span id="quik-search-remove" onClick={toggleSearch}>
          <i className="ti-close" />
        </span>
      </form>
    </div>
  );
}
