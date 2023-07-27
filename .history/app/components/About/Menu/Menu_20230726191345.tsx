"use client";
import { CSSProperties, useState } from "react";
import styles from "./menu.module.css";
export default function Menu(props: { onClick: any; selected: any }) {
  const [selected, setSelected] = useState({
    about: true,
    education: false,
    technologies: false,
  });

  function handleClick(select: string) {
    setSelected(() => {
      return {
        about: select === "about" ? true : false,
        education: select === "education" ? true : false,
        technologies: select === "technologies" ? true : false,
      };
    });
  }

  const selectedBackground: any = {
    left: "0px",
  };
  const selectedP: any = {
    color: "white",
  };
  return (
    <div className={styles.menu}>
      <div
        className={`${styles.linkContainer} ${styles.about}`}
        onClick={() => handleClick("about")}
      >
        <div
          className={styles.aboutBackground}
          style={Object.assign(selected.about && selectedBackground)}
        ></div>
        <p style={Object.assign(selected.about && selectedP)}>About</p>
      </div>
      <br />
      <div
        className={`${styles.linkContainer} ${styles.education}`}
        onClick={() => handleClick("education")}
      >
        <div
          className={styles.educationBackground}
          style={Object.assign(selected.education && selectedBackground)}
        ></div>
        <p style={Object.assign(selected.education && selectedP)}>Education</p>
      </div>
      <br />
      <div
        className={`${styles.linkContainer} ${styles.technologies}`}
        onClick={() => handleClick("technologies")}
      >
        <div
          className={styles.technologiesBackground}
          style={Object.assign(selected.technologies && selectedBackground)}
        ></div>
        <p style={Object.assign(selected.technologies && selectedP)}>
          Technologies
        </p>
      </div>
    </div>
  );
}
