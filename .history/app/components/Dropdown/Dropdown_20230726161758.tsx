"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  function toggleOpen() {
    console.log(open);
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
    <div className={styles.selectContainer}>
      <div className={styles.select} onClick={toggleOpen}>
        Projects <BiSolidDownArrow style={`${open && openSVGStyle}`} />
      </div>
      <div className={styles.dropdown} style={open ? closedStyle : openStyle}>
        Works
      </div>
    </div>
  );
}
