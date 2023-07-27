"use client";
import { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import Projects from "./components/Nav/Home/Projects/Projects";
import styles from "./page.module.css";
import Image from "next/image";

import { BiSolidDownArrow } from "react-icons/bi";
export default function Home() {
  const projects: any = [
    {
      image: "/Edable.jpg",
      imageAlt: "Edable Home",
      link: "www.edable.org.au",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
    },
    {
      image: "/CassieFleming.jpg",
      imageAlt: "Cassie Fleming illustrations",
      link: "www.cassiefleming.com",
      description: "An animation portfolio",
      madeWith: ["Next.Js", "Contentful"],
    },

    {
      image: "/FifthLayerMusic.jpg",
      imageAlt: "Fifth layer music home",
      link: "fifth-layer-music.vercel.app",
      description: "A platform for musicians to do what they do best",
      madeWith: ["Next.Js"],
    },
  ];

  const work: any = [
    {
      image: "/FifthLayerMusic.jpg",
      imageAlt: "Fifth layer music home",
      link: "fifth-layer-music.vercel.app",
      description: "A platform for musicians to do what they do best",
      madeWith: ["Next.Js"],
    },
  ];

  const [dropdown, setDropdown] = useState({
    selected: "projects",
    unselected: "Work",
  });

  function handleSelect() {
    setDropdown((prev) => {
      return {
        selected: "projects",
        unselected: "Work",
      };
    });
  }

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
      <Dropdown onClick={handleSelect} />
      <Projects data={dropdown.selected} />
    </main>
  );
}
