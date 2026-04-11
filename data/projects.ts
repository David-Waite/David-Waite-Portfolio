export type ListItem = string | { text: string; subItems: string[] };

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: ListItem[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; title?: string };

export type Project = {
  slug?: string;
  title: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  madeWith: string[];
  /** External URL without https:// — used for non-article projects */
  link?: string;
  /** Internal path like /projects/slug — used for article projects */
  inLink?: string;
  /** GitHub repo URL — shown on the article page */
  githubUrl?: string;
  featured: boolean;
  content?: ContentBlock[];
};

export const projects: Project[] = [
  {
    slug: "smart-coaster-with-friends",
    title: "Smart Coaster with Friends",
    cardDescription:
      "An IoT-enabled smart coaster system for friends to track water consumption, receive reminders, and interact via Discord",
    image: "/smartCoasterWithFriends.webp",
    imageAlt: "Smart Coaster with Friends",
    inLink: "/projects/smart-coaster-with-friends",
    githubUrl: "https://github.com/David-Waite/Smart-Coaster-With-Friends",
    madeWith: ["IoT", "Arduino", "Raspberry Pi", "Discord API", "ThingsBoard"],
    featured: true,
    content: [
      {
        type: "image",
        src: "/smartCoasterWithFriends.webp",
        alt: "Smart Coaster system overview",
      },
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "The Smart Coaster with Friends is an IoT-enabled device designed to track water consumption and provide timely hydration reminders. It integrates with Discord, allowing friends to motivate each other. This project was developed in an IoT class and was driven by the personal goal of encouraging better hydration habits.",
      },
      { type: "heading", level: 2, text: "System Functionality" },
      {
        type: "paragraph",
        text: "The Smart Coaster with Friends system offers a set of features designed to encourage consistent hydration and facilitate social interaction. Each smart coaster functions as follows:",
      },
      { type: "heading", level: 3, text: "Core Coaster Actions" },
      {
        type: "list",
        items: [
          "Placing a water bottle on the coaster registers a new drink. Upon lifting the cup and placing it back down lighter, a sip is registered. A heavier weight detected upon placement registers a new drink.",
          "Each time a sip is taken, a drinking timer activates.",
          "An RGB light fades from green to red to indicate the status of the timer.",
          "A tune plays to alert the user when the timer is up.",
          "The brightness of the RGB light can be controlled by a dial (potentiometer).",
          {
            text: "A push button on the system allows for individual actions:",
            subItems: [
              "Single Press: If it's the first press after the device is ready, it starts a new tracking session, resetting the total consumed and reminder light to green. If a cup is already on the scale, it registers a new cup, corrects a mistaken sip, and sets the current weight as the new starting weight for a full cup.",
              "Double Press: Resets total consumption, starts a new session, and resets the reminder cycle.",
              "Long Press: Instructs the scale to re-tare itself.",
            ],
          },
        ],
      },
      { type: "heading", level: 3, text: "Discord Integration" },
      {
        type: "image",
        src: "/discord.webp",
        alt: "Discord channel showing coaster notifications",
      },
      {
        type: "list",
        items: [
          "Each coaster is registered as a separate unit and connected to a shared Discord server.",
          "Devices send notifications to the Discord channel regarding status or action updates — such as when a user starts the device or a session, starts a new drink, takes a sip (including sip amount and total amount), or when the buzzer is active.",
          "The Discord server can also be used to control the individual timer and buzzer of each coaster. Proposed commands include setting the drinking timer length and muting or unmuting the buzzer.",
          "This setup enables friends to update their device settings, monitor each other's drinking habits, engage in conversations about water consumption, or even unmute someone's buzzer as a friendly nudge — all from a centralized location.",
        ],
      },
      { type: "heading", level: 3, text: "Flask Web Server" },
      {
        type: "paragraph",
        text: "A Flask web server provides a local graphical interface for debugging and monitoring each device. It allows for updating settings and hosts two pages:",
      },
      {
        type: "image",
        src: "/flaskDebugPage.webp",
        alt: "Flask debug index page",
        caption: "Index page — real-time system info",
      },
      {
        type: "image",
        src: "/flaskHistroyPage.webp",
        alt: "Flask history page",
        caption: "History page — breakdown of past sessions",
      },
      { type: "heading", level: 3, text: "ThingsBoard Integration" },
      {
        type: "image",
        src: "/thingsboard.webp",
        alt: "ThingsBoard cloud dashboard",
      },
      {
        type: "paragraph",
        text: "All devices are connected to a ThingsBoard cloud platform for monitoring hardware telemetry data. This allowed for real-time monitoring of system properties for debugging purposes and as an assignment requirement, without flooding the Discord channel with unnecessary notifications.",
      },
      { type: "heading", level: 2, text: "System Architecture & Design" },
      {
        type: "paragraph",
        text: "The system was designed so that each unit integrates both front-end and back-end components with a robust data-fetching mechanism through various communication protocols.",
      },
      { type: "heading", level: 3, text: "Architecture Diagram" },
      {
        type: "image",
        src: "/ArduinoBlockDiagram.webp",
        alt: "Arduino block diagram showing system layers",
      },
      { type: "heading", level: 3, text: "Multi-layered IoT Architecture" },
      {
        type: "paragraph",
        text: "The system's architecture came together through an iterative process, integrating its physical and software components to enable data reporting to ThingsBoard and communication through various protocols.",
      },
      {
        type: "list",
        items: [
          "Physical Layer: The fundamental hardware components for all four smart coasters — Arduino, a 5Kg load cell for accurate weight measurement, a user input button, a potentiometer for brightness control, an RGB LED, and a passive buzzer.",
          "Edge Computing Layer: Each coaster has a Raspberry Pi running on a Debian virtual machine. The Pi is responsible for immediate data collection, core logic, and managing the state of the local device.",
          "Network/Communication Layer: Responsible for Serial communication between Arduino and Raspberry Pi, MQTT protocol between the Pi and the cloud, and HTTPS from the Pi to the Discord API.",
          "Cloud/Application Layer: ThingsBoard.io serves as the cloud layer for monitoring and visualising device telemetry. The Discord API facilitates bidirectional communication for notification services and bot interaction.",
        ],
      },
      { type: "heading", level: 3, text: "Key Hardware Components" },
      {
        type: "list",
        items: [
          "Load Cell & HX711 Amplifier: A 5KG load cell with HX711 amplifier converting the analog signal to digital. Assembly involved soldering the amplifier, extending wires with heat shrink, and calibrating via the HX711 library.",
          "Potentiometer: A 10K potentiometer providing analog voltage from 0–5V for RGB LED brightness control.",
          "Push Button: A digital sensor for triggering operations such as taring the weight sensor, resetting, or initiating a new session.",
          "RGB LED: Displays the current timer state, fading from green to red.",
          "Passive Buzzer: Plays a tune when the timer is up — chosen over an active buzzer to allow for custom tunes.",
        ],
      },
    ],
  },

  {
    slug: "free-dinner-for-one",
    title: "Free Dinner For One",
    cardDescription:
      "A social media-style fitness tracking platform built for a year-long workout competition with friends.",
    image: "/freeDinnerForoOne.webp",
    imageAlt: "Free Dinner For One",
    inLink: "/projects/free-dinner-for-one",
    githubUrl: "https://github.com/David-Waite/Free-dinner-for-one",
    madeWith: ["React", "Firebase"],
    featured: true,
    content: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "Free Dinner for One is a social media-style fitness tracking platform built for a year-long workout competition with friends. It lets users post a daily workout photo and description while keeping track of how everyone is placing, making competition tracking a breeze. The app also lets users comment on and react to posts, turning it into a more interactive and community-driven experience.",
      },
      { type: "heading", level: 2, text: "Development" },
      {
        type: "paragraph",
        text: "I was responsible for developing the platform from start to finish. I worked with friends to figure out what features we wanted, then built the app with a focus on a smooth user experience. I handled the React frontend, integrated Firebase for real-time data, and added image compression to save on storage costs. It was a great hands-on project that let me apply my full-stack skills in a fun way.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "list",
        items: [
          "Daily Posts: Users can upload a workout photo and description every day.",
        ],
      },
      {
        type: "image",
        src: "/FDFFPost.webp",
        alt: "Daily post feed",
        caption: "Daily workout post feed",
      },
      {
        type: "list",
        items: [
          "Community Interaction: Users can comment on and react to posts, creating a fun and supportive vibe.",
        ],
      },
      {
        type: "image",
        src: "/FDFFReacts.webp",
        alt: "Emoji reactions on a post",
        caption: "Emoji reactions",
      },
      {
        type: "image",
        src: "/FDFFSComment.webp",
        alt: "Comments section on a post",
        caption: "Comment threads",
      },
      {
        type: "list",
        items: [
          "Tracking: Users can view the leaderboard to see how everyone is progressing.",
        ],
      },
      {
        type: "image",
        src: "/FDFFStandings.webp",
        alt: "Leaderboard standings screen",
        caption: "Leaderboard standings",
      },
      {
        type: "list",
        items: [
          "Image Compression: Helps reduce storage costs by compressing images without compromising quality.",
          "Real-time Updates: Posts, comments, and reactions sync instantly for an engaging user experience.",
        ],
      },
      {
        type: "paragraph",
        text: "Overall, this project was a great way to build a full-stack app while keeping things fun and functional. It taught me a lot about resource management and how to build a social platform with a focus on user experience.",
      },
    ],
  },

  {
    slug: "flood-watch-bangladesh",
    title: "Flood Watch Bangladesh",
    cardDescription:
      "A mobile app that provides real-time flood status updates for rivers across Bangladesh.",
    image: "/floodWatchBangladesh.webp",
    imageAlt: "Flood Watch Bangladesh",
    inLink: "/projects/flood-watch-bangladesh",
    githubUrl: "https://github.com/David-Waite/Flood-Watch-Bangladesh",
    madeWith: ["React Native", "Firebase"],
    featured: true,
    content: [
      {
        type: "video",
        src: "https://player.vimeo.com/video/1068665035?h=c95ac66d19&badge=0&autopause=0&player_id=0&app_id=58479",
        title: "Flood Watch Bangladesh demo",
      },
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "Flood Watch Bangladesh is a mobile application designed to provide real-time river level and flood status updates for communities in Bangladesh, particularly fisherfolk with limited digital literacy. The app was developed in collaboration with Oxfam Bangladesh and Monash University as part of a research initiative aimed at improving access to critical flood-related information.",
      },
      {
        type: "paragraph",
        text: "Built for Android, the app features an intuitive interface, local language support, warning notifications, and offline functionality to ensure accessibility even in areas with poor connectivity. Users can view real-time water levels on a map, track historical data, and receive alerts when their subscribed river gauges reach dangerous levels.",
      },
      { type: "heading", level: 2, text: "My Role & Teamwork" },
      {
        type: "paragraph",
        text: "As part of a team of Swinburne students, I worked on developing the app alongside backend, frontend, and full-stack developers. Teamwork was a big part of the process — dividing up tasks, solving problems together, and making sure everything fit together properly. Everyone had different skills and ways of approaching things, so good communication was key, especially when we hit technical roadblocks or had to work under tight deadlines.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "list",
        items: [
          "Live River Data: Displays real-time water levels with colour-coded status indicators.",
          "Map & List Views: Allows users to explore flood conditions in their area.",
          "Historical Data: Provides past water level trends for informed decision-making.",
          "Local Language Support: Ensures accessibility for non-English speakers.",
          "Custom Alerts: Notifies users when subscribed river gauges approach dangerous levels.",
          "Offline Access: Stores data locally for use in low-connectivity areas.",
        ],
      },
      {
        type: "paragraph",
        text: "This project was a great experience in working with real-world stakeholders, refining technical problem-solving skills, and adapting to user needs in a meaningful way.",
      },
    ],
  },

  {
    title: "2048 Clone",
    cardDescription: "Clone of the popular 2048 game",
    image: "/2048.webp",
    imageAlt: "2048 Clone",
    link: "davidwaite2048clone.netlify.app/",
    madeWith: ["React"],
    featured: true,
  },

  {
    title: "A Trip to Pomodoro",
    cardDescription:
      "A Pomodoro timer. Unlock different backgrounds and cars the more you study",
    image: "/aTripToPomodoro.webp",
    imageAlt: "A Trip to Pomodoro",
    link: "atriptopomodoro.netlify.app/",
    madeWith: ["Vue.js", "Firebase"],
    featured: true,
  },

  {
    title: "Fifth Layer Music mock website",
    cardDescription: "A platform for musicians to do what they do best",
    image: "/FifthLayerMusic.webp",
    imageAlt: "Fifth layer music home",
    link: "fifth-layer-music.vercel.app",
    madeWith: ["Next.Js"],
    featured: true,
  },

  {
    title: "www.edable.org.au",
    cardDescription:
      "A charity working on employing and educating in the field of autism",
    image: "/EdAble.webp",
    imageAlt: "Edable Home",
    link: "www.edable.org.au",
    madeWith: ["Next.Js", "Contentful"],
    featured: true,
  },

  {
    title: "www.cassiefleming.com",
    cardDescription: "An animation portfolio",
    image: "/CassieFleming.webp",
    imageAlt: "Cassie Fleming illustrations",
    link: "www.cassiefleming.com",
    madeWith: ["Next.Js", "Contentful"],
    featured: true,
  },

  {
    title: "Video Button",
    cardDescription: "Resizing video button (desktop only)",
    image: "/videoButton.webp",
    imageAlt: "Video Button",
    link: "main--relaxed-haupia-364867.netlify.app",
    madeWith: ["Next.js"],
    featured: false,
  },

  {
    title: "Simply Spell",
    cardDescription: "An app to help with spelling",
    image: "/simplySpell.webp",
    imageAlt: "Simply Spell",
    link: "main--radiant-pasca-39ceb4.netlify.app",
    madeWith: ["React Native", "expo"],
    featured: true,
  },

  {
    title: "2022 Portfolio",
    cardDescription: "My portfolio from 2022",
    image: "/2022Porfolio.webp",
    imageAlt: "2022 portfolio",
    link: "myportfolio-three-psi.vercel.app",
    madeWith: ["Next.Js", "Contentful"],
    featured: false,
  },

  {
    title: "Birthday Counter",
    cardDescription: "A birthday reminder",
    image: "/hannahsBirthday.webp",
    imageAlt: "hannahs birthday",
    link: "hannahs-birthday.vercel.app",
    madeWith: ["React.Js"],
    featured: false,
  },

  {
    title: "Zappo Fan Page",
    cardDescription: "A page showcasing my favourite lolly",
    image: "/zappoWebsite.webp",
    imageAlt: "zappo website landing page",
    link: "zappo-fan-page.vercel.app/",
    madeWith: ["React.Js"],
    featured: false,
  },

  {
    title: "Suggestion Button",
    cardDescription: "Playing around with bored API",
    image: "/boredAPI.webp",
    imageAlt: "boredAPI",
    link: "main--endearing-lebkuchen-f290d5.netlify.app",
    madeWith: ["JavaScript"],
    featured: false,
  },

  {
    title: "Colour Flipper",
    cardDescription: "A random colour generator",
    image: "/colourFlipper.webp",
    imageAlt: "colour Flipper main page",
    link: "main--superb-zuccutto-1e7bc5.netlify.app",
    madeWith: ["JavaScript"],
    featured: false,
  },
];
