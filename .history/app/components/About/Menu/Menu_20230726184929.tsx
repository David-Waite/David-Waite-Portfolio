"use client";
import { useState } from "react";
import styles from "./menu.module.css";
export default function Menu() {
  const [selected, setSelected] = useState({
    about: "selected",
    education: "unselected",
    technologies: "unselected",
  });
  return (
    <div className={styles.menu}>
      <div className={`${styles.linkContainer} ${styles.about}`}>
        <div className={styles.aboutBackground}></div>
        <p>About</p>
      </div>
      <br />
      <div className={`${styles.linkContainer} ${styles.education}`}>
        <div className={styles.educationBackground}></div>
        <p>Education</p>
      </div>
      <br />
      <div className={`${styles.linkContainer} ${styles.technologies}`}>
        <div className={styles.technologiesBackground}></div>
        <p>Technologies</p>
      </div>
    </div>
  );
}
