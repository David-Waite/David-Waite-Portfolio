import styles from "./navButton.module.css";

import Link from "next/link";

export default function NavButton() {
  return (
    <Link className={styles.container} href={"./contact"}>
      Say G&apos;day
    </Link>
  );
}
