import { Metadata, NextPage } from "next/types";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Flood Watch Bangladesh",
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Flood Watch Bangladesh</h1>
      </div>

      <div className={styles.videoContainer}>
        <iframe
          title="vimeo-player"
          className={styles.iframe}
          src="https://player.vimeo.com/video/1068665035?h=c95ac66d19&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.linkContainer}>
        <a
          href="https://github.com/David-Waite/Flood-Watch-Bangladesh"
          target="_blank"
          className={styles.link}
        >
          View on GitHub
        </a>
      </div>

      <div className={styles.article}>
        <h2>Overview</h2>
        <p>
          Flood Watch Bangladesh is a mobile application designed to provide
          real-time river level and flood status updates for communities in
          Bangladesh, particularly fisherfolk with limited digital literacy. The
          app was developed in collaboration with Oxfam Bangladesh and Monash
          University as part of a research initiative aimed at improving access
          to critical flood-related information.
        </p>
        <p>
          Built for Android, the app features an intuitive interface, local
          language support, warning notifications, and offline functionality to
          ensure accessibility even in areas with poor connectivity. Users can
          view real-time water levels on a map, track historical data, and
          receive alerts when their subscribed river gauges reach dangerous
          levels.
        </p>
        <h2>My Role & Teamwork</h2>
        <p>
          As part of a team of Swinburne students, I worked on developing the
          app alongside backend, frontend, and full-stack developers. Teamwork
          was a big part of the process—dividing up tasks, solving problems
          together, and making sure everything fit together properly. Everyone
          had different skills and ways of approaching things, so good
          communication was key, especially when we hit technical roadblocks or
          had to work under tight deadlines.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            Live River Data: Displays real-time water levels with color-coded
            status indicators.
          </li>
          <li>
            Map & List Views:Allows users to explore flood conditions in their
            area.
          </li>
          <li>
            Historical Data:Provides past water level trends for informed
            decision-making.
          </li>
          <li>
            Local Language Support: Ensures accessibility for non-English
            speakers.
          </li>
          <li>
            Custom Alerts:Notifies users when subscribed river gauges approach
            dangerous levels.
          </li>
          <li>
            Offline Access: Stores data locally for use in low-connectivity
            areas.
          </li>
        </ul>
        <p>
          This project was a great experience in working with real-world
          stakeholders, refining technical problem-solving skills, and adapting
          to user needs in a meaningful way.
        </p>
      </div>
    </div>
  );
}
