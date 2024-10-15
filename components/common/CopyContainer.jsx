"use client";

import { useState } from "react";

export default function CopyContainer({ code }) {
  const [isCopied, setIsCopied] = useState(false);
  function decodeHtmlEntities(encodedString) {
    if (typeof window != "undefined") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(encodedString, "text/html");
      return doc.documentElement.textContent;
    }
  }

  function copyText() {
    // Get the element with id="copyTarget"
    const copyTarget = document.getElementById("copyTarget");

    // Copy the innerText of the element to the clipboard
    navigator.clipboard
      .writeText(copyTarget.innerText)
      .then(() => {
        // Optionally, you can notify the user that the text was copied
        setIsCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }
  return (
    <>
      <div className="relative">
        <button
          id="copyButton"
          onClick={copyText}
          className={`btn ${isCopied ? "active" : ""}`}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
        <pre className="code-box" id="copyTarget">
          {decodeHtmlEntities(code)}
        </pre>
      </div>
    </>
  );
}
