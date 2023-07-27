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
    setSelected(() => {
      return {
        about: select === "about" ? true : false,
        education: select === "education" ? true : false,
        technologies: select === "technologies" ? true : false,
      };
    });
  }
  console.log(selected.about);

  const selectedBackground = {
    left: "0px",
  };
  const selectedP = {
    color: "white",
  };
  return (
    <div className={styles.menu}>
      <div
        className={`${styles.linkContainer} ${styles.about}`}
        onClick={() => handleClick("about")}
      >
        <div className={styles.aboutBackground}></div>
        <p>About</p>
      </div>
      <br />
      <div
        className={`${styles.linkContainer} ${styles.education}`}
        onClick={() => handleClick("education")}
      >
        <div className={styles.educationBackground}></div>
        <p>Education</p>
      </div>
      <br />
      <div
        className={`${styles.linkContainer} ${styles.technologies}`}
        onClick={() => handleClick("technologies")}
      >
        <div className={styles.technologiesBackground}></div>
        <p style={selected.technologies === true ? selectedP : ""}>
          Technologies
        </p>
      </div>
    </div>
  );
}
