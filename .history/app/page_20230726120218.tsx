import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  function modalHandler(action, item) {
    if (action) {
      setModalItem(item);
    } else {
      window.scrollTo({
        top: height * 2,
        behavior: "smooth",
      });
    }

    setModalState(action);
  }

  console.log(projects[0].fields.isGitHub);
  const projectCardsElement = projects.map((item) => {
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
            <button onClick={() => modalHandler(true, item)}>View about</button>
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
    <main className={styles.main}>
      <div className={styles.headingContainer}>
        <h1>Hello, hello. I&apos;m David</h1>
        <p>
          I like to create simple clean websites that gets the user to where
          they wanna go without the clutter.
        </p>
      </div>
      <div className={styles.projects}>
        <div className={styles.projectContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/Edable.jpg"
              fill={true}
              alt="Edable homePage"
              objectFit="contain"
            />
            <div className={styles.text}>
              <h2>https://www.edable.org.au/</h2>
              <p>
                A charity working on employing and educating in the field of
                autism
              </p>
            </div>
          </div>
        </div>
        <div className={styles.projectContainer}></div>
        <div className={styles.projectContainer}></div>
        <div className={styles.projectContainer}></div>
        <div className={styles.projectContainer}></div>
      </div>
    </main>
  );
}
