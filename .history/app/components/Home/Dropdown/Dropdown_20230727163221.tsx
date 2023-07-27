"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Dropdown(props: { onClick: any; dropdown: any }) {
  const [hoverSVG, setHoverSVG] = useState(false);
  const [hover, setHover] = useState(false);

  function handleSelect() {
    props.onClick();
    setHover(false);
  }

  function toggleSelect() {
    setHover((prev) => !prev);
  }

  const openStyle = {
    top: "-34px",
  };

  const closedStyle = {
    top: "4px",
  };

  const openSVGStyle = {
    transform: "rotate(180deg)",
  };

  const hoverSVGStyle = {
    color: "white",
  };

  return (
    <div
      className={styles.selectContainer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={styles.select}
        onMouseOut={() => setHoverSVG(false)}
        onClick={toggleSelect}
      >
        {props.dropdown.selected}
        <BiSolidDownArrow
          style={Object.assign(
            hover && openSVGStyle,
            hoverSVG && hoverSVGStyle
          )}
        />
      </div>
      <div
        onClick={handleSelect}
        className={styles.dropdown}
        style={hover ? closedStyle : hover === false ? openStyle : closedStyle}
      >
        {props.dropdown.unselected}
      </div>
    </div>
  );
}
