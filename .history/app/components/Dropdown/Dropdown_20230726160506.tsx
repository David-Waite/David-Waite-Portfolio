"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  const openStyle = {
    top: "-40px",
  };

  const closedStyle = {
    top: "-2px",
  };
  return (
    <div className={styles.selectContainer}>
      <div className={styles.select}>
        Projects <BiSolidDownArrow />
      </div>
      <div className={`${styles.dropdown} ${open ? openStyle : closedStyle}`}>
        Works
      </div>
    </div>
  );
}
