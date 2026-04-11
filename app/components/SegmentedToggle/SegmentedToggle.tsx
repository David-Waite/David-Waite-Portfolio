"use client";

import styles from "./segmentedToggle.module.css";

interface Props {
  options: [string, string];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function SegmentedToggle({ options, selected, onChange, className }: Props) {
  const activeIndex = options.indexOf(selected);

  return (
    <div className={`${styles.container}${className ? ` ${className}` : ""}`}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {options.map((option) => (
        <button
          key={option}
          className={`${styles.button} ${selected === option ? styles.active : ""}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
