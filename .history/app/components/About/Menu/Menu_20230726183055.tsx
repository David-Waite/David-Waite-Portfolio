import Image from "next/image";
import styles from "./menu.module.css";
export default function About() {
  return (
    <div className={styles.menu}>
      <div className={styles.about}>
        <div className={styles.aboutBackground}></div>
        <p>About</p>
      </div>
      <div>
        <p>Education</p>
      </div>
      <div className={styles.selected}>
        <p>Technologies</p>
      </div>
    </div>
  );
}
