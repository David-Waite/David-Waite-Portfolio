"use client";
import styles from "./menu.module.css";

export default function Menu(props: {
  onClick: any;
  selected: any;
  mobile: boolean;
}) {
  function handleClick(select: string) {
    props.onClick(select);
  }

  const selectedBackground: any = {
    left: "0px",
  };
  const selectedP: any = {
    color: "white",
  };

  return (
    <div
      className={`${styles.menu} ${
        props.mobile === true ? styles.moblie : styles.desktop
      }`}
      id="menu"
    >
      <a
        className={`${styles.linkContainer} ${styles.about}`}
        onClick={() => handleClick("about")}
      >
        <div
          className={styles.aboutBackground}
          style={Object.assign(props.selected.about && selectedBackground)}
        ></div>
        <p style={Object.assign(props.selected.about && selectedP)}>About</p>
      </a>
      <br />
      <a
        href="/about#aboutHeading"
        className={`${styles.linkContainer} ${styles.education}`}
        onClick={() => handleClick("education")}
      >
        <div
          className={styles.educationBackground}
          style={Object.assign(props.selected.education && selectedBackground)}
        ></div>
        <p style={Object.assign(props.selected.education && selectedP)}>
          Education
        </p>
      </a>
      <br />
      <a
        href="/about#aboutHeading"
        className={`${styles.linkContainer} ${styles.technologies}`}
        onClick={() => handleClick("technologies")}
      >
        <div
          className={styles.technologiesBackground}
          style={Object.assign(
            props.selected.technologies && selectedBackground
          )}
        ></div>
        <p style={Object.assign(props.selected.technologies && selectedP)}>
          Technologies
        </p>
      </a>
    </div>
  );
}
