"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [hoverSVG, setHoverSVG] = useState(false);
  const [hover, setHover] = useState(false);

  const openStyle = {
    top: "-33px",
  };

  const closedStyle = {
    top: "4px",
  };

  const openSVGStyle = {
    transform: "rotate(180deg)",
  };

  const hoverSVGStyle = {
    color: "white",
  };

  return (
    <div
      className={styles.selectContainer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={styles.select}
        onMouseOver={() => setHoverSVG(true)}
        onMouseOut={() => setHoverSVG(false)}
      >
        Projects
        <BiSolidDownArrow
          style={Object.assign(
            hoverSVG && openSVGStyle,
            hoverSVG && hoverSVGStyle
          )}
        />
      </div>
      <div
        className={styles.dropdown}
        style={open ? closedStyle : hover === false ? openStyle : closedStyle}
      >
        Works
      </div>
    </div>
  );
}
