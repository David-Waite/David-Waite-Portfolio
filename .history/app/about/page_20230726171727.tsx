import Image from "next/image";

export default function About() {
  return (
    <main>
      <div>
        <h1>G&apos;day I&apos;m David</h1>
        <p>
          I was born and raised in rural Australia. Never having internet at
          home growing up I always went to my library to use their internet,
          given the slow internet their I always was fascinated by sites that
          loaded quickly. This and my enjoyment for clean designs fuels my
          passion for web development.
          <br />
          <br /> I first started playing around with web development in primary
          school, but didn&apos;t get into it until 2022 when taking a course on
          Front-End Web Development at Swinburne University.
          <br />
          <br /> I am currently in my second year studying computer science and
          doing free lancing on the side.
        </p>
      </div>
      <div>
        <Image scr="/aboutMe" fill={true} alt="David" />
      </div>
    </main>
  );
}
