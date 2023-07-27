import styles from "./navButton.module.css";

import Link from "next/link";

export default function NavButton() {
  return (
    <nav className={styles.container}>
      <Link href={"./about"}>Contact</Link>
    </nav>
  );
}
