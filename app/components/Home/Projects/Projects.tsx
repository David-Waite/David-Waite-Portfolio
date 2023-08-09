"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

export default function About() {
  const projects: any = [
    {
      title: "Video Button",
      image: "/videoButton.webp",
      imageAlt: "Video Button",
      link: "main--relaxed-haupia-364867.netlify.app",
      description: "Resizing video button (desktop only)",
      madeWith: ["Next.js"],
    },

    {
      title: "Simply Spell",
      image: "/simplySpell.webp",
      imageAlt: "Simply Spell",
      link: "main--radiant-pasca-39ceb4.netlify.app",
      description: "An app to help with spelling",
      madeWith: ["React Native", "expo"],
    },
    {
      title: "2022 Portfolio",
      image: "/2022Porfolio.webp",
      imageAlt: "2022 portfolio",
      link: "myportfolio-three-psi.vercel.app",
      description: "My portfolio from 2022",
      madeWith: ["Next.Js", "Contentful"],
    },
    {
      title: "Birthday Counter",
      image: "/hannahsBirthday.webp",
      imageAlt: "hannahs birthday",
      link: "hannahs-birthday.vercel.app",
      description: "A birthday reminder",
      madeWith: ["React.Js"],
    },
    {
      title: "Zappo Fan Page",
      image: "/zappoWebsite.webp",
      imageAlt: "zappo website landing page",
      link: "zappo-fan-page.vercel.app/",
      description: "A page showcasing my favourite lolly ",
      madeWith: ["React.Js"],
    },
    {
      title: "Suggestion Button",
      image: "/boredAPI.webp",
      imageAlt: "boredAPI",
      link: "main--endearing-lebkuchen-f290d5.netlify.app",
      description: "Playing around with bored API",
      madeWith: ["JavaScript"],
    },
    {
      title: "Colour Flipper",
      image: "/colourFlipper.webp",
      imageAlt: "colour Flipper main page",
      link: "main--superb-zuccutto-1e7bc5.netlify.app",
      description: "A random colour generator",
      madeWith: ["JavaScript"],
    },
  ];

  const work: any = [
    {
      title: "fifth-layer-music.vercel.app",
      image: "/FifthLayerMusic.webp",
      imageAlt: "Fifth layer music home",
      link: "fifth-layer-music.vercel.app",
      description: "A platform for musicians to do what they do best",
      madeWith: ["Next.Js"],
    },
    {
      title: "www.edable.org.au",
      image: "/EdAble.webp",
      imageAlt: "Edable Home",
      link: "www.edable.org.au",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
    },
    {
      title: "www.cassiefleming.com",
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
                  <h2>{item.title}</h2>
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
