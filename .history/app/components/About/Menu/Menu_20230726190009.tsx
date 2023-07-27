"use client";
import { CSSProperties, useState } from "react";
import styles from "./menu.module.css";
export default function Menu() {
  const [selected, setSelected] = useState({
    about: true,
    education: false,
    technologies: false,
  });

  function handleClick(select: string) {
    setSelected({
      about: select === "about",
      education: select === "education",
      technologies: select === "technologies",
    });
  }

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
          style={selected.about && selectedBackground}
          onClick={() => handleClick("about")}
        ></div>
        <p style={selected.about && selectedP}>About</p>
      </div>
      <br />
      <div className={`${styles.linkContainer} ${styles.education}`}>
        <div
          onClick={() => handleClick("education")}
          className={styles.educationBackground}
          style={selected.education && selectedBackground}
        ></div>
        <p style={selected.education && selectedP}>Education</p>
      </div>
      <br />
      <div className={`${styles.linkContainer} ${styles.technologies}`}>
        <div
          onClick={() => handleClick("technologies")}
          className={styles.technologiesBackground}
          style={selected.technologies && selectedBackground}
        ></div>
        <p style={selected.technologies && selectedP}>Technologies</p>
      </div>
    </div>
  );
}
