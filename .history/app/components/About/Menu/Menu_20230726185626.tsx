"use client";
import { CSSProperties, useState } from "react";
import styles from "./menu.module.css";
export default function Menu() {
  const [selected, setSelected] = useState({
    about: true,
    education: false,
    technologies: false,
  });

  const selectedBackground: any = {
    left: "0",
  };
  const selectedP: any = {
    color: "white",
  };
  return (
    <div className={styles.menu}>
      <div className={`${styles.linkContainer} ${styles.about}`}>
        <div
          className={styles.aboutBackground}
          style={selected && selectedBackground}
        ></div>
        <p style={selected.about && selectedP}>About</p>
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
