import Projects from "./components/Nav/Home/Projects/Projects";
import styles from "./page.module.css";
import Image from "next/image";
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

      <select name="enquiring" id="enquiring">
        <option value="Entertainment">Projects</option>
        <option value="Studio/Recording">Works</option>
      </select>
      <Projects />
    </main>
  );
}
