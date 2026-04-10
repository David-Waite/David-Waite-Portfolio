"use client";

import styles from "./navBar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <div className={styles.links}>
        <Link href="/" className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}>
          Home
        </Link>
        <Link href="/about" className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}>
          About
        </Link>
        <Link href="/contact" className={`${styles.navButton} ${pathname === "/contact" ? styles.navButtonActive : ""}`}>
          Say G&apos;day
        </Link>
      </div>
    </nav>
  );
}
