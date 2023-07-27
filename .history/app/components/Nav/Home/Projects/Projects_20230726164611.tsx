"use client";

import Image from "next/image";
import styles from "./projects.module.css";

export default function About(props: { data: any }) {
  const projectCardsElement: any = props.data.map((item: any) => {
    return (
      <a
        key={item.title}
        href={`https://${item.link}`}
        target="_blank"
        style={{ textDecoration: "none" }}
        className={styles.contaner}
      >
        <div className={styles.projectsCard}>
          <div className={styles.projectContainer}>
            <div className={styles.projectInfo}>
              <div></div>
              <div>
                <h2>{item.link}</h2>
                <p>{item.description}</p>
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
      </a>
    );
  });
  return <div className={styles.projectsGrid}>{projectCardsElement}</div>;
}
