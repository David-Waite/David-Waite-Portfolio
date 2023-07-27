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
      <div className={styles.projects}>
        <div>
          <div>
            <Image src="/Edable.jpg" fill={true} />
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
