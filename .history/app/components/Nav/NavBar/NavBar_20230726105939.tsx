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
