"use client";

import Link from "next/link";
import styles from "./liveIndicator.module.css";

export default function LiveIndicator() {

  return (
    <Link href="/analytics" className={styles.container}>
      <span className={styles.dot} />
    </Link>
  );
}
