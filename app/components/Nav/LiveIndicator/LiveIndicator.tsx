"use client";

import Link from "next/link";
import styles from "./liveIndicator.module.css";
import { useEffect, useState } from "react";

export default function LiveIndicator() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <Link
      href="/analytics"
      className={styles.container}
      style={{ right: `calc(var(--indicator-right) + ${scrollbarWidth}px)` }}
    >
      <span className={styles.dot} />
    </Link>
  );
}
