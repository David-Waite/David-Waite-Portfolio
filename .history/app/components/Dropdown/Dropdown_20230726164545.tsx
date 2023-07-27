"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Dropdown(props: { data: any }) {
  const [hoverSVG, setHoverSVG] = useState(false);
  const [hover, setHover] = useState(false);

  const [dropdown, setDropdown] = useState({
    selected: "projects",
    unselected: "Work",
  });

  function handleSelect() {
    setDropdown((prev) => {
      return {
        selected: prev.unselected,
        unselected: prev.selected,
      };
    });
    setHover(false);
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
        onMouseOver={() => setHoverSVG(true)}
        onMouseOut={() => setHoverSVG(false)}
      >
        {dropdown.selected}
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
        {dropdown.unselected}
      </div>
    </div>
  );
}
