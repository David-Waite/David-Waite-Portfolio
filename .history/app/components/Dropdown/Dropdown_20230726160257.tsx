"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.selectContainer}>
      <div className={styles.select}>
        Projects <BiSolidDownArrow />
      </div>
      <div className={styles.dropdown}>Works</div>
    </div>
  );
}
