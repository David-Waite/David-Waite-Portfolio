"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);
  return null;
}
import NavButton from "../NavButton/NavButton";
import styles from "./navBar.module.css";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <Link href={"./about"}>About</Link>
      <NavButton />
    </nav>
  );
}
