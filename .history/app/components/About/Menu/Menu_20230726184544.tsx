"use client";
import styles from "./menu.module.css";
export default function Menu() {
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
