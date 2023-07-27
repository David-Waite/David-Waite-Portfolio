"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

export default function About() {
  const projects: any = [
    {
      image: "/2022Porfolio.webp",
      imageAlt: "2022 portfolio",
      link: "myportfolio-three-psi.vercel.app",
      description: "My portfolio from 2022",
      madeWith: ["Next.Js", "Contentful"],
    },
    {
      image: "/hannahsBirthday.webp",
      imageAlt: "hannahs birthday",
      link: "hannahs-birthday.vercel.app",
      description: "A birthday reminder",
      madeWith: ["React.Js"],
    },
    {
      image: "/boredAPI.webp",
      imageAlt: "hannahs birthday",
      link: "hannahs-birthday.vercel.app",
      description: "A birthday reminder",
      madeWith: ["React.Js"],
    },
  ];

  const work: any = [
    {
      image: "/FifthLayerMusic.webp",
      imageAlt: "Fifth layer music home",
      link: "fifth-layer-music.vercel.app",
      description: "A platform for musicians to do what they do best",
      madeWith: ["Next.Js"],
    },
    {
      image: "/EdAble.webp",
      imageAlt: "Edable Home",
      link: "www.edable.org.au",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
    },
    {
      image: "/CassieFleming.webp",
      imageAlt: "Cassie Fleming illustrations",
      link: "www.cassiefleming.com",
      description: "An animation portfolio",
      madeWith: ["Next.Js", "Contentful"],
    },
  ];

  const [dropdown, setDropdown] = useState({
    selected: "Work",
    unselected: "Projects",
  });

  function handleSelect() {
    setDropdown((prev) => {
      return {
        selected: prev.unselected,
        unselected: prev.selected,
      };
    });
  }
  const data = dropdown.selected === "Projects" ? projects : work;

  const projectCardsElement: any = data.map((item: any) => {
    return (
      <div key={item.title} className={styles.contaner}>
        <div className={styles.outerContainer}>
          <div className={styles.projectsCard}>
            <div className={styles.projectContainer}>
              <div className={styles.projectInfo}>
                <div></div>
                <div>
                  <h2>{item.link}</h2>
                  <p>{item.description}</p>
                  <p className={styles.linkContainer}>
                    <a
                      href={`https://${item.link}`}
                      target="_blank"
                      className={styles.link}
                    >
                      View Website
                    </a>
                  </p>
                </div>

                <ul className={styles.madeWith}>
                  {item.madeWith.map((madewith: any) => (
                    <li key={item.title}>
                      {`${madewith}${
                        madewith === item.madeWith[item.madeWith.length - 1]
                          ? ""
                          : ","
                      }`}
                    </li>
                  ))}
                </ul>
              </div>

              <Image
                className={styles.projectImages}
                src={item.image}
                alt={item.imageAlt}
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <Dropdown onClick={handleSelect} dropdown={dropdown} />
      <div className={styles.projectsGrid}>{projectCardsElement}</div>
    </>
  );
}
