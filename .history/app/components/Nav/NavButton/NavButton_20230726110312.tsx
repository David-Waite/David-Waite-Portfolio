import styles from "./navButton.module.css";

import Link from "next/link";

export default function NavButton() {
  return (
    <Link className={styles.container} href={"./about"}>
      Contact
    </Link>
  );
}
