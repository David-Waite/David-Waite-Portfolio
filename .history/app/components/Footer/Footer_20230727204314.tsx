import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.main}>
      <p>ABN: 83 626 560 303</p>
      <p>
        copyright © David Waite, 2023.
        <br /> All rights reserved.
      </p>
    </div>
  );
}
