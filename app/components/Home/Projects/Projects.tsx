"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.featured);

export default function Projects() {
  const [dropdown, setDropdown] = useState({
    selected: "Featured",
    unselected: "All",
  });

  function handleSelect() {
    setDropdown((prev) => ({
      selected: prev.unselected,
      unselected: prev.selected,
    }));
  }

  const data: Project[] = dropdown.selected === "All" ? projects : featuredProjects;

  function trackClick(project: string, url: string) {
    const session_id = localStorage.getItem("session_id") ?? undefined;
    fetch("/api/analytics/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ project, url, session_id }),
    });
  }

  const projectCardsElement = data.map((item, index) => {
    return (
      <div key={item.title} className={styles.contaner}>
        <div className={styles.outerContainer}>
          <div className={styles.projectsCard}>
            <div className={styles.projectContainer}>
              <div className={styles.projectInfo}>
                <div></div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.cardDescription}</p>
                  <div className={styles.linkContainer}>
                    {item.inLink ? (
                      <Link className={styles.link} href={item.inLink}>
                        View About
                      </Link>
                    ) : (
                      <a
                        href={`https://${item.link}`}
                        target="_blank"
                        className={styles.link}
                        onClick={() =>
                          trackClick(item.title, item.link ?? "")
                        }
                      >
                        View Website
                      </a>
                    )}
                  </div>
                </div>

                <ul className={styles.madeWith}>
                  {item.madeWith.map((tech) => (
                    <li key={tech}>
                      {`${tech}${
                        tech === item.madeWith[item.madeWith.length - 1]
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
                sizes="(max-width: 768px) 100vw, (max-width: 1300px) 50vw, 33vw"
                loading={index === 0 ? "eager" : "lazy"}
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
