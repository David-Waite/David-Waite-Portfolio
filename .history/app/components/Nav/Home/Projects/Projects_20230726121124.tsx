"use client";

import styles from "../styles/projects.module.css";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function About() {
  const projects: any = [
    {
      image: "/Edable.jpg",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
    },
    {
      image: "/Edable.jpg",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
    },
    {
      image: "/Edable.jpg",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
    },
    {
      image: "/Edable.jpg",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
    },
    {
      image: "/Edable.jpg",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
    },
  ];
  const [modalState, setModalState] = useState(false);
  const [modalItem, setModalItem] = useState();

  const [height, setHeight] = useState(999);
  useEffect(() => {
    setTimeout(() => {
      setHeight(window.innerHeight), 1;
    });
  });

  const projectCardsElement: any = projects.map((item: any) => {
    return (
      <div key={item.sys.id} className={styles.projectsCard}>
        <div className={styles.hideScroll}></div>
        <div className={styles.projectImageContainer}>
          <img
            className={styles.projectImages}
            src={`https:${item.fields.image.fields.file.url}`}
            alt={item.fields.image.fields.description}
          />
        </div>
        <div className={styles.projectInfo}>
          <h3>{item.fields.description}</h3>
          <div className={styles.btnContainer}>
            <a
              href={item.fields.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                {item.fields.isGitHub ? "View on GitHub" : "View Website"}
              </button>
            </a>
          </div>

          <ul className={styles.madeWith}>
            {item.fields.madeWith.map((madewith) => (
              <li key={item.sys.key}>
                {`${madewith}${
                  madewith ===
                  item.fields.madeWith[item.fields.madeWith.length - 1]
                    ? ""
                    : ","
                }`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className={styles.project} id="projects">
        <div className={styles.content}>
          <h2>Projects</h2>
          <div className={styles.projectsGrid}>{projectCardsElement}</div>
        </div>
      </div>
    </>
  );
}
// import styles from "./projects.module.css";
// import Image from "next/image";
// export default function Projects() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.projects}>
//         <div className={styles.projectContainer}>
//           <div className={styles.imageContainer}>
//             <Image
//               src="/Edable.jpg"
//               fill={true}
//               alt="Edable homePage"
//               objectFit="contain"
//             />
//             <div className={styles.text}>
//               <h2>https://www.edable.org.au/</h2>
//               <p>
//                 A charity working on employing and educating in the field of
//                 autism
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className={styles.projectContainer}></div>
//         <div className={styles.projectContainer}></div>
//         <div className={styles.projectContainer}></div>
//         <div className={styles.projectContainer}></div>
//       </div>
//     </main>
//   );
// }
