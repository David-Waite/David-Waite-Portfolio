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
      <label htmlFor="enquiring">
        <span>I am enquiring about*</span>
      </label>

      <select name="enquiring" id="enquiring" required disabled={disabled}>
        <option
          selected={enquiry === "entertainment" ? true : false}
          value="Entertainment"
        >
          Entertainment
        </option>
        <option
          selected={enquiry === "studio" ? true : false}
          value="Studio/Recording"
        >
          Studio/Recording
        </option>
        <option
          selected={enquiry === "accompaniment" ? true : false}
          value="Accompaniment"
        >
          Accompaniment
        </option>
        <option value="Other">Other</option>
      </select>
      <Projects />
    </main>
  );
}
