import styles from "./menu.module.css";
export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={`${styles.linkContainer} ${styles.about}`}>
        <div className={styles.aboutBackground}></div>
        <p>About</p>
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.educationBackground}></div>
        <p>Education</p>
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.technologiesBackground}></div>
        <p>Technologies</p>
      </div>
    </div>
  );
}
