"use client";

import Image from "next/image";
import styles from "./About.module.css";

import { useState } from "react";
import Menu from "./Menu/Menu";

export default function AboutMain() {
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
      <h1 id="aboutHeading">G&apos;day I&apos;m David</h1>
      <p className={styles.description}>
        I was born and raised in rural Australia. Never having internet at home
        growing up I always went to my library to use their internet, given the
        slow internet there I always was fascinated by sites that loaded
        quickly. This and my enjoyment of clean designs fuels my passion for web
        development
        <br />
        <br /> I started playing around with web development a few years ago but
        didn&apos;t get into it until 2022 when taking a course on Front-End Web
        Development at Swinburne Universit
        <br />
        <br /> I am currently in my second year studying computer science while
        working on a personal project and freelancing on the side.
      </p>
    </>
  );

  const EducationText = (
    <>
      <h1 id="aboutHeading">My Education</h1>
      <ul className={`${styles.description} ${styles.descriptionList} `}>
        <li>
          CT50220 Dimploma of Information Technology (Front End Web Development)
          | 2022
        </li>
        <li>BA-CS Bachelor of Computer Science | 2023 - current</li>
        <li>Front end developer career path (72hrs) | Scrimba (online)</li>
        <li>
          React Native - The Practical Guide 2022 (26hrs) | Udemy (online)
        </li>
        <li>
          C# Basics for Beginners: Learn C# Fundamentals by Coding (6hrs) |
          Udemy (online)
        </li>
        <li>
          C# Intermediate: Classes, Interfaces and OOP (6hrs) | Udemy (online)
        </li>
      </ul>
    </>
  );
  const TechnologiesText = (
    <>
      <h1 id="aboutHeading">What I&apos;m confortable with</h1>
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
      <Menu selected={selected} onClick={handleClick} mobile={false} />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.paragraphContainer}>{textContent}</div>
          <div className={`${styles.desktopLink} ${styles.links}`}>
            <a href="https://github.com/David-Waite" target="_blank">
              GitHub
            </a>
            <a href="www.linkedin.com/in/davidwaitedev" target="_blank">
              LinkedIn
            </a>
            {/* <a href="https://www.instagram.com/david__waite/" target="_blank">
              Instagram
            </a> */}
          </div>
        </div>
        <div className={styles.moblieLinkContainer}>
          <Menu selected={selected} onClick={handleClick} mobile={true} />
          <div className={`${styles.moblieLink} ${styles.links}`}>
            <a href="https://github.com/David-Waite" target="_blank">
              GitHub
            </a>
            <a href="www.linkedin.com/in/davidwaitedev" target="_blank">
              LinkedIn
            </a>
            {/* <a href="https://www.instagram.com/david__waite/" target="_blank">
            Instagram
          </a> */}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/logo.webp"
            fill={true}
            alt="David"
            priority
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABlAGUDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAGBABAQEBAQAAAAAAAAAAAAAAAAECERL/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD12VrKwS0lPSUpPSelNJ6RJStpQ1DQ+U5Tygqw8TlPKWaYM6CHQygVlFpKek0UnpPSmktFJ0vW6pLQ0aU8qUppQl808qMp5Syp0E6EnYwdZ1kspKa0lpBNJaqmqjqkp6qdptVK0o3TTSPTTQTomjzTnzo80gv6CXoJPR6zpestZLbSarbU7TAXVS3T6qO60k9VLVNupapTfTZpK0TQTomjzTnmjzQS3oJegk9XrLS9Zaym2k1RanqtxM1Ud02qlqtyDSaqWqbVS1Vg0WjpLR1mlSaPNIyt9Aregl6CT2estZ1lrETLU9U1qWq6Rml1UtU2qlqukjOl1U7TaqdVTLR1lYxWjdb0nR1E/QToRe6ygOcSek9AOkYqWktAOsZT0SgCmFrAGK1GAAEAAp//2Q=="
            placeholder="blur"
          />
        </div>
      </div>
    </main>
  );
}
