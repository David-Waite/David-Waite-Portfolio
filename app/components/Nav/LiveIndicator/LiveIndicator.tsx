"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./liveIndicator.module.css";

export default function LiveIndicator() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = () => {
      fetch("/api/analytics/live")
        .then((res) => res.json())
        .then((data) => setCount(data.count));
    };

    fetchCount();
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link href="/analytics" className={styles.container}>
      <span className={styles.dot} />
      <span className={styles.label}>
        {count === null ? "..." : `${count} online`}
      </span>
    </Link>
  );
}
