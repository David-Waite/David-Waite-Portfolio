"use client";
import styles from "./menu.module.css";

export default function Footer() {
  return (
    <div
      className={`${styles.menu} ${
        props.mobile === true ? styles.moblie : styles.desktop
      }`}
      id="menu"
    ></div>
  );
}
