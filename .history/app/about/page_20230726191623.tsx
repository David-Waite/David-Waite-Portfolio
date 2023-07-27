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

  const aboutText = (
    <p>
      I was born and raised in rural Australia. Never having internet at home
      growing up I always went to my library to use their internet, given the
      slow internet their I always was fascinated by sites that loaded quickly.
      This and my enjoyment for clean designs fuels my passion for web
      development.
      <br />
      <br /> I first started playing around with web development in primary
      school, but didn&apos;t get into it until 2022 when taking a course on
      Front-End Web Development at Swinburne University.
      <br />
      <br /> I am currently in my second year studying computer science and
      doing free lancing on the side.
    </p>
  );
  return (
    <main className={styles.container}>
      <Menu selected={selected} onClick={handleClick} />
      <div className={styles.content}>
        <div>
          <h1>G&apos;day I&apos;m David</h1>
          <div className={styles.paragraphContainer}>
            <p className={styles.description}>{aboutText}</p>
          </div>

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
