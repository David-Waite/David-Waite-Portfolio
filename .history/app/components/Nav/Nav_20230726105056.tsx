import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav>
      <Link href={"./about"}>About</Link>
      <Link href={"./contact"}>Say Gdat</Link>
    </nav>
  );
}
