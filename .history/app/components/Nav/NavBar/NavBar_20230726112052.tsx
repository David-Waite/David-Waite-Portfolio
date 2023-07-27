"use client";
import NavButton from "../NavButton/NavButton";
import styles from "./navBar.module.css";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function NavBar() {
  const currentRoute = usePathname();
  const page = currentRoute === "/" ? "home" : "about";

  return (
    <nav className={styles.container}>
      <Link href={`./${currentRoute === "/" ? "about" : "/"}`}>
        {currentRoute === "/" ? "About" : "Home"}
      </Link>
      <NavButton />
    </nav>
  );
}
