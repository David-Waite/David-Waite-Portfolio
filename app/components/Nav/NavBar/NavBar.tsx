"use client";

import { useEffect, useRef } from "react";
import styles from "./navBar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_MAX = 70;
const NAV_MIN = 50;
const SCROLL_RANGE = 80; // px of scroll over which the nav collapses

export default function NavBar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / SCROLL_RANGE, 1);
      const height = NAV_MAX - (NAV_MAX - NAV_MIN) * progress;
      if (navRef.current) {
        navRef.current.style.height = `${height}px`;
        navRef.current.style.borderBottomColor = `rgba(0, 0, 0, ${0.06 * progress})`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} className={styles.container}>
      <Link href="/" className={styles.name}>
        David Waite
      </Link>
      <div className={styles.links}>
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
