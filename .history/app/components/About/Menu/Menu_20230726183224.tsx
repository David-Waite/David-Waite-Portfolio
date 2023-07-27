import styles from "./menu.module.css";
export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.about}>
        <div className={styles.aboutBackground}></div>
        <p>About</p>
      </div>
      <div className={styles.about}>
        <p className={styles.aboutBackground}>Education</p>
      </div>
      <div className={styles.selected}>
        <p>Technologies</p>
      </div>
    </div>
  );
}
