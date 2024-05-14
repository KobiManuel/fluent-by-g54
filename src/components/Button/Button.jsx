import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  children,
  animate = true,
  transparent,
  onClick,
  primary,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${transparent && styles.transparent}  ${
        primary && styles.primary
      }`}
      style={{ width: size }}
    >
      {children}
      {animate && (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>{" "}
        </>
      )}
    </button>
  );
};

export default Button;
