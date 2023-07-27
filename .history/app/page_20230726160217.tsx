import Dropdown from "./components/Dropdown/Dropdown";
import Projects from "./components/Nav/Home/Projects/Projects";
import styles from "./page.module.css";
import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headingContainer}>
        <h1>Hello, hello. I&apos;m David</h1>
        <p>
          I like to create simple clean websites that gets the user to where
          they wanna go without the clutter.
        </p>
      </div>
      <label htmlFor="enquiring"></label>
      <Dropdown />
      <Projects />
    </main>
  );
}
