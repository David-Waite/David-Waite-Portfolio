import styles from "./navButton.module.css";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <Link href={"./about"}>About</Link>
    </nav>
  );
}
