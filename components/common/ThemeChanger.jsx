"use client";

import { skins } from "@/data/layoutOptions";
import { homeItems } from "@/data/menu";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

export default function ThemeChanger() {
  const pathname = usePathname();

  const [currentSkins, setCurrentSkins] = useState(skins[0]);

  const handlecurrentSkins = (val) => {
    setCurrentSkins(val);
  };

  // Example: Translate to Spanish

  useEffect(() => {
    setTimeout(() => {
      currentSkins.logoSelector.forEach((elm, i) => {
        document.querySelectorAll(elm).forEach((el, i2) => {
          if (el.src) {
            el.setAttribute("src", currentSkins.logoImage[i]);
          }
        });
      });
      document.body.setAttribute(
        "data-theme-color",
        `${currentSkins.colorTheme}`
      );
      document.getElementById("loading-area").style.display = "none";
    });
  }, [currentSkins, pathname]);
  useEffect(() => {
    const item = homeItems.filter((el) => el.href == pathname)[0];
    if (item) {
      handlecurrentSkins(
        skins.filter((el) => el.colorTheme == item.colorTheme)[0]
      );
    } else {
      handlecurrentSkins(skins[0]);
    }
  }, [pathname]);

  return <></>;
}
