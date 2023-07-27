"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [hoverSVG, setHoverSVG] = useState(false);
  const [hover, setHover] = useState(false);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  const openStyle = {
    top: "-40px",
  };

  const closedStyle = {
    top: "-2px",
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
        onClick={toggleOpen}
        onMouseOver={() => setHoverSVG(true)}
        onMouseOut={() => setHoverSVG(false)}
      >
        Projects
        <BiSolidDownArrow
          style={Object.assign(open && openSVGStyle, hoverSVG && hoverSVGStyle)}
        />
      </div>
      <div
        className={styles.dropdown}
        style={open ? closedStyle : hover ? openStyle : closedStyle}
      >
        Works
      </div>
    </div>
  );
}
