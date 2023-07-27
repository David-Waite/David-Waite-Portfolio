"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Dropdown(props: { onClick: any; dropdown: any }) {
  const [selectTopHover, setSelectTopHover] = useState(false);
  const [hover, setHover] = useState(false);

  function handleSelect() {
    props.onClick();
    setHover(false);
  }

  function toggleSelect() {
    setHover((prev) => !prev);
  }

  const openStyle = {
    top: "-32px",
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
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={styles.select}
        onMouseOver={() => setSelectTopHover(true)}
        onMouseOut={() => setSelectTopHover(false)}
        onClick={toggleSelect}
      >
        {props.dropdown.selected}
        <BiSolidDownArrow
          style={Object.assign(
            hover && openSVGStyle,
            selectTopHover && hoverSVGStyle
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
