"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function About() {
  const projects: any = [
    {
      image: "/Edable.jpg",
      imageAlt: "Edable Home",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
    },
    {
      image: "/Edable.jpg",
      imageAlt: "Edable Home",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
    },

    {
      image: "/Edable.jpg",
      imageAlt: "Edable Home",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
    },
    {
      image: "/Edable.jpg",
      imageAlt: "Edable Home",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
    },
    {
      image: "/Edable.jpg",
      imageAlt: "Edable Home",
      link: "https://www.edable.org.au/",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
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
      <div key={item.title} className={styles.projectsCard}>
        <div className={styles.hideScroll}></div>
        <div className={styles.projectImageContainer}>
          <Image
            className={styles.projectImages}
            src={item.image}
            alt={item.imageAlt}
            fill={true}
          />
        </div>
        <div className={styles.projectInfo}>
          <h3>{item.description}</h3>
          <div className={styles.btnContainer}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>View Website</button>
            </a>
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
      </div>
    );
  });
  return <div className={styles.projectsGrid}>{projectCardsElement}</div>;
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
