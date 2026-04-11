"use client";

import Image from "next/image";
import styles from "./About.module.css";

import { useState } from "react";
import Menu from "./Menu/Menu";

const BLUR_URL =
  "data:image/webp;base64,UklGRlwYAABXRUJQVlA4WAoAAAAgAAAAZAAAZAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADY=";

export default function AboutMain() {
  const [selected, setSelected] = useState({
    about: true,
    education: false,
    technologies: false,
  });

  function handleClick(select: string) {
    setSelected({
      about: select === "about",
      education: select === "education",
      technologies: select === "technologies",
    });
  }

  const AboutText = (
    <>
      <h1>G&apos;day, I&apos;m David.</h1>
      <p className={styles.description}>
        I&apos;m a Melbourne-based front-end engineer currently working at
        Independent Automation, where I build real-time graphical tools, WebGL
        renderers, and design systems. I specialise in bridging the gap between
        stakeholder vision and functional software — with a strong focus on UX,
        clean UI, and high-performance code.
      </p>
      <p className={styles.description}>
        I believe great software requires equal parts engineering discipline and
        design intent. I push hard on both.
      </p>
    </>
  );

  const EducationText = (
    <>
      <h1>Education</h1>
      <ul className={`${styles.description} ${styles.descriptionList}`}>
        <li>
          <strong>Bachelor of Computer Science</strong> — Software Development Major
          <br />
          Swinburne University of Technology, 2022–2025
        </li>
        <li>
          <strong>Diploma of Information Technology</strong> — Front-end Web Development
          <br />
          Swinburne University of Technology, 2021–2022
        </li>
      </ul>
    </>
  );

  const TechnologiesText = (
    <>
      <h1>What I&apos;m comfortable with</h1>
      <ul className={`${styles.description} ${styles.descriptionList}`}>
        <div className={styles.skillList}>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Vue.js</li>
          <li>React Native</li>
          <li>Node.js</li>
          <li>WebGL</li>
          <li>Figma</li>
          <li>Python</li>
          <li>Java</li>
          <li>SQL</li>
          <li>AWS</li>
          <li>IoT</li>
          <li>UX Design</li>
          <li>Git</li>
        </div>
      </ul>
    </>
  );

  let textContent;
  if (selected.about) textContent = AboutText;
  if (selected.education) textContent = EducationText;
  if (selected.technologies) textContent = TechnologiesText;

  return (
    <main className={styles.container}>

      {/* ── Desktop layout ── */}
      <div className={styles.desktopLayout}>
        <Menu selected={selected} onClick={handleClick} mobile={false} />
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <div className={styles.paragraphContainer}>{textContent}</div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/logo.webp"
                fill
                alt="David"
                priority
                placeholder="blur"
                blurDataURL={BLUR_URL}
              />
            </div>
            <div className={styles.desktopLinks}>
              <a href="https://github.com/David-Waite" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/davidwaite1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/davidwaitedev/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className={styles.mobileLayout}>
        <div className={styles.mobileHeader}>
          <div className={styles.mobileImageContainer}>
            <Image
              src="/logo.webp"
              fill
              alt="David"
              priority
              placeholder="blur"
              blurDataURL={BLUR_URL}
            />
          </div>
          <div className={styles.mobileLinkRow}>
            <a href="https://github.com/David-Waite" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/davidwaite1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/davidwaitedev/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <hr className={styles.mobileDivider} />

        <section className={styles.mobileSection}>
          <h1>G&apos;day, I&apos;m David.</h1>
          <p>
            I&apos;m a Melbourne-based front-end engineer currently working at
            Independent Automation, where I build real-time graphical tools, WebGL
            renderers, and design systems. I specialise in bridging the gap between
            stakeholder vision and functional software — with a strong focus on UX,
            clean UI, and high-performance code.
          </p>
          <p>
            I believe great software requires equal parts engineering discipline and
            design intent. I push hard on both.
          </p>
        </section>

        <hr className={styles.mobileDivider} />

        <section className={styles.mobileSection}>
          <span className={styles.sectionLabel}>Education</span>
          <ul className={styles.mobileList}>
            <li>
              <strong>Bachelor of Computer Science</strong> — Software Development Major
              <br />
              Swinburne University of Technology, 2022–2025
            </li>
            <li>
              <strong>Diploma of Information Technology</strong> — Front-end Web Development
              <br />
              Swinburne University of Technology, 2021–2022
            </li>
          </ul>
        </section>

        <hr className={styles.mobileDivider} />

        <section className={styles.mobileSection}>
          <span className={styles.sectionLabel}>Technologies</span>
          <div className={styles.mobileTechGrid}>
            {[
              "TypeScript","React","Next.js","Vue.js","React Native",
              "Node.js","WebGL","Figma","Python","Java",
              "SQL","AWS","IoT","UX Design","Git",
            ].map((tech) => (
              <span key={tech} className={styles.techPill}>{tech}</span>
            ))}
          </div>
        </section>
      </div>

    </main>
  );
}
