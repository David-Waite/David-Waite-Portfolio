"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import { useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import SegmentedToggle from "@/app/components/SegmentedToggle/SegmentedToggle";

const featuredProjects = projects.filter((p) => p.featured);

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const data: Project[] = showAll ? projects : featuredProjects;

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
      <SegmentedToggle
        options={["Featured", "All"]}
        selected={showAll ? "All" : "Featured"}
        onChange={(val) => setShowAll(val === "All")}
        className={styles.toggleSpacing}
      />
      <div className={styles.projectsGrid}>{projectCardsElement}</div>
    </>
  );
}
