"use client";
import NavButton from "../NavButton/NavButton";
import styles from "./navBar.module.css";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function NavBar() {
  const currentRoute = usePathname();

  return (
    <nav className={styles.container}>
      <Link
        className={styles.link}
        href={`./${currentRoute === "/" ? "about" : "/"}`}
      >
        {currentRoute === "/" ? "About" : "Home"}
      </Link>

      {currentRoute !== "/contact" && <NavButton />}
    </nav>
  );
}
