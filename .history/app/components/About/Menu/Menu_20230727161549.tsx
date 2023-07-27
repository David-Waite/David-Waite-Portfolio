"use client";
import { CSSProperties, useState } from "react";
import styles from "./menu.module.css";
import { usePathname } from "next/navigation";
export default function Menu(props: {
  onClick: any;
  selected: any;
  mobile: boolean;
}) {
  const pathname = usePathname();
  function handleClick(select: string) {
    props.onClick(select);
  }

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    select: string
  ) => {
    if (pathname === "/about") {
      e.preventDefault();
    }
    console.log(bind);
    handleClick(select);
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const selectedBackground: any = {
    left: "0px",
  };
  const selectedP: any = {
    color: "white",
  };

  return (
    <div
      className={`${styles.menu} ${
        props.mobile === true ? styles.moblie : styles.desktop
      }`}
      id="menu"
    >
      <a
        className={`${styles.linkContainer} ${styles.about}`}
        onClick={handleScroll.bind("about")}
        href="/about#aboutHeading"
      >
        <div
          className={styles.aboutBackground}
          style={Object.assign(props.selected.about && selectedBackground)}
        ></div>
        <p style={Object.assign(props.selected.about && selectedP)}>
          <a href="/about#aboutHeading">About</a>
        </p>
      </a>
      <br />
      <div
        className={`${styles.linkContainer} ${styles.education}`}
        onClick={() => handleClick("education")}
      >
        <div
          className={styles.educationBackground}
          style={Object.assign(props.selected.education && selectedBackground)}
        ></div>
        <p style={Object.assign(props.selected.education && selectedP)}>
          <a
            className={Object.assign(props.selected.about && selectedP)}
            href="/about#aboutHeading"
          >
            Education
          </a>
        </p>
      </div>
      <br />
      <div
        className={`${styles.linkContainer} ${styles.technologies}`}
        onClick={() => handleClick("technologies")}
      >
        <div
          className={styles.technologiesBackground}
          style={Object.assign(
            props.selected.technologies && selectedBackground
          )}
        ></div>
        <p style={Object.assign(props.selected.technologies && selectedP)}>
          <a href="/about#aboutHeading">Technologies</a>
        </p>
      </div>
    </div>
  );
}
