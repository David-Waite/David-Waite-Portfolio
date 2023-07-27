import styles from "./nav.module.css";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <Link href={"./about"}>About</Link>
      <Link href={"./contact"}>Say Gdat</Link>
    </nav>
  );
}
