"use client";

import Projects from "./components/Home/Projects/Projects";
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KP0WJ2LYPC" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-KP0WJ2LYPC');
        `}
      </Script>
      <div className={styles.headingContainer}>
        <h1>Hello, hello. I&apos;m David</h1>
        <p>
          I like to create clean and simple websites that gets the user to where
          they want to go without the clutter.
        </p>
      </div>

      <div className={styles.projectContainer}>
        <Projects />
      </div>
    </main>
  );
}
