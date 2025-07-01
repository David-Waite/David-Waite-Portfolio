/* eslint-disable @next/next/no-img-element */
import { Metadata, NextPage } from "next/types";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Free Dinner for One",
};

export default function FreeDinnerForOne() {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Free Dinner for One</h1>
      </div>

      <div className={styles.linkContainer}>
        <a
          href="https://github.com/David-Waite/Free-dinner-for-one"
          target="_blank"
          className={styles.link}
        >
          View on GitHub
        </a>
      </div>

      <div className={styles.article}>
        <h2>Overview</h2>
        <p>
          Free Dinner for One is a social media-style fitness tracking platform
          built for a year-long workout competition with friends. It lets users
          post a daily workout photo and description while keeping track of how
          everyone is placing, making competition tracking a breeze. The app
          also lets users comment on and react to posts, turning it into a more
          interactive and community-driven experience.
        </p>

        <h2>Development</h2>
        <p>
          I was responsible for developing the platform from start to finish. I
          worked with friends to figure out what features we wanted, then built
          the app with a focus on a smooth user experience. I handled the React
          frontend, integrated Firebase for real-time data, and added image
          compression to save on storage costs. It was a great hands-on project
          that let me apply my full-stack skills in a fun way.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>
            Daily Posts: Users can upload a workout photo and description every
            day.
          </li>
          <div className={styles.articleImageCon}>
            <img
              className={styles.articleImage}
              src="/FDFFPost.webp"
              alt="Post"
            />
          </div>
          <li>
            Community Interaction: Users can comment on and react to posts,
            creating a fun and supportive vibe.
            <div className={styles.articleImageCon}>
              <img
                className={styles.articleImage}
                src="/FDFFReacts.webp"
                alt="Reactions"
              />
            </div>
            <div className={styles.articleImageCon}>
              <img
                className={styles.articleImage}
                src="/FDFFSComment.webp"
                alt="Comments"
              />
            </div>
          </li>
          <li>
            Tracking: Users can view the leaderboard to see how everyone is
            progressing.
          </li>
          <div className={styles.articleImageCon}>
            <img
              className={styles.articleImage}
              src="/FDFFStandings.webp"
              alt="Leaderboard"
            />
          </div>
          <li>
            Image Compression: Helps reduce storage costs by compressing images
            without compromising quality.
          </li>
          <li>
            Real-time Updates: Posts, comments, and reactions sync instantly for
            an engaging user experience.
          </li>
        </ul>
        <p>
          Overall, this project was a great way to build a full-stack app while
          keeping things fun and functional. It taught me a lot about resource
          management and how to build a social platform with a focus on user
          experience.
        </p>
      </div>
    </div>
  );
}
