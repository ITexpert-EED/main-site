"use client";

import { socialLinks } from "@/data/footerLinks";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="c-time-countdown">
        <div className="c-time-cell">
          <div className="c-time-value">{days.toString().padStart(2, "0")}</div>
          <div className="c-time-lavel">Days</div>
        </div>
        <div className="c-time-cell">
          <div className="c-time-value">
            {hours.toString().padStart(2, "0")}
          </div>
          <div className="c-time-lavel">Hours</div>
        </div>
        <div className="c-time-cell">
          <div className="c-time-value">
            {minutes.toString().padStart(2, "0")}
          </div>
          <div className="c-time-lavel">Minutes</div>
        </div>
        <div className="c-time-cell">
          <div className="c-time-value">
            {seconds.toString().padStart(2, "0")}
          </div>
          <div className="c-time-lavel">Seconds</div>
        </div>
      </div>
    );
  }
};
export default function CommingSoon1() {
  const [showCountdown, setshowCountdown] = useState(false);
  useEffect(() => {
    setshowCountdown(true);
  }, []);

  return (
    <div className="commingSoon-1">
      <div className="c-name">Industry</div>
      <div className="c-text1">LAUNCHING</div>
      <div className="c-text2">VERY SOON.</div>
      {showCountdown && (
        <Countdown
          date={
            new Date(
              Date.now() + Math.floor(Math.random() * 99) * 24 * 60 * 60 * 1000
            )
          }
          renderer={renderer}
        />
      )}
      <ul className="list-inline m-a0" style={{ marginTop: "auto" }}>
        {socialLinks.slice(0, 3).map((link, index) => (
          <React.Fragment key={index}>
            <li>
              <a href={link.href} className={`site-button circle `}>
                <i className={link.iconClass} />
              </a>
            </li>{" "}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
