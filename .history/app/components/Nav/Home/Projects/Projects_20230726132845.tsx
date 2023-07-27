"use client";

import Image from "next/image";
import styles from "./projects.module.css";

export default function About() {
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
      imageAlt: "Edable Home",
      link: "fifth-layer-music.vercel.app",
      description: "A platform for musicians to do what they do best",
      madeWith: ["Next.Js"],
    },
    {
      image: "/Edable.jpg",
      imageAlt: "Edable Home",
      link: "www.edable.org.au",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
    },
    {
      image: "/Edable.jpg",
      imageAlt: "Edable Home",
      link: "www.edable.org.au",
      description:
        "A charity working on employing and educating in the field of autism",
      madeWith: ["Next.Js", "Contentful"],
    },
  ];

  const projectCardsElement: any = projects.map((item: any) => {
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
