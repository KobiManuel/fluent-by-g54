import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ progress, className }) => {
  return (
    <div className={styles["progressBar-container"]}>
      <div
        className={`${styles.progressAnimation} ${className}`}
        style={{ width: progress }}
      ></div>
    </div>
  );
};

export default ProgressBar;
