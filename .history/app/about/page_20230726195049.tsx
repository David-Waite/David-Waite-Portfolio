"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Menu from "../components/About/Menu/Menu";
import { useState } from "react";

export default function About() {
  const [selected, setSelected] = useState({
    about: true,
    education: false,
    technologies: false,
  });

  function handleClick(select: string) {
    setSelected(() => {
      return {
        about: select === "about" ? true : false,
        education: select === "education" ? true : false,
        technologies: select === "technologies" ? true : false,
      };
    });
  }

  const AboutText = (
    <>
      <h1>G&apos;day I&apos;m David</h1>
      <p className={styles.description}>
        I was born and raised in rural Australia. Never having internet at home
        growing up I always went to my library to use their internet, given the
        slow internet their I always was fascinated by sites that loaded
        quickly. This and my enjoyment for clean designs fuels my passion for
        web development.
        <br />
        <br /> I first started playing around with web development in primary
        school, but didn&apos;t get into it until 2022 when taking a course on
        Front-End Web Development at Swinburne University.
        <br />
        <br /> I am currently in my second year studying computer science and
        doing free lancing on the side.
      </p>
    </>
  );

  const EducationText = (
    <>
      <h1>My Education</h1>
      <ul className={`${styles.description} ${styles.descriptionList} `}>
        <li>
          CT50220 Dimploma of Information Technology (Front End Web Development)
          | 2022
        </li>
        <li>BA-CS Bachelor of Computer Science | 2023 - current</li>
        <li>Next.Js</li>
        <li>Contentful</li>
        <li>React.Js</li>
        <li>JavaScript</li>
        <li>C#</li>
      </ul>
    </>
  );
  const TechnologiesText = (
    <>
      <h1>What I&apos;m confortable with</h1>
      <ul className={`${styles.description} ${styles.descriptionList} `}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Next.Js</li>
        <li>Contentful</li>
        <li>React.Js</li>
        <li>JavaScript</li>
        <li>C#</li>
      </ul>
    </>
  );

  let textContent;

  if (selected.about) {
    textContent = AboutText;
  }
  if (selected.technologies) {
    textContent = TechnologiesText;
  }
  if (selected.education) {
    textContent = EducationText;
  }
  return (
    <main className={styles.container}>
      <Menu selected={selected} onClick={handleClick} />
      <div className={styles.content}>
        <div>
          <div className={styles.paragraphContainer}>{textContent}</div>

          <div className={styles.links}>
            <a href="www.linkedin.com/in/davidwaitedev" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/David-Waite" target="_blank">
              GitHub
            </a>
            <a href="https://www.instagram.com/david__waite/" target="_blank">
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/aboutMe.jpg" fill={true} alt="David" />
        </div>
        \
      </div>
    </main>
  );
}
