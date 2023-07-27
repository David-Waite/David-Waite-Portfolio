import styles from "./dropdown.module.css";
import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
export default function Dropdown() {
  return (
    <div className={styles.selectContainer}>
      <div className={styles.select}>
        Projects <BiSolidDownArrow />
      </div>
      <div className={styles.dropdown}>Works</div>
    </div>
  );
}
