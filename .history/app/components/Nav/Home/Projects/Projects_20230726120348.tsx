import styles from "./projects.module.css";
import Image from "next/image";
export default function Projects() {
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
        <div className={styles.projectContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/Edable.jpg"
              fill={true}
              alt="Edable homePage"
              objectFit="contain"
            />
            <div className={styles.text}>
              <h2>https://www.edable.org.au/</h2>
              <p>
                A charity working on employing and educating in the field of
                autism
              </p>
            </div>
          </div>
        </div>
        <div className={styles.projectContainer}></div>
        <div className={styles.projectContainer}></div>
        <div className={styles.projectContainer}></div>
        <div className={styles.projectContainer}></div>
      </div>
    </main>
  );
}
