import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, transparent, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${transparent && styles.transparent}`}
    >
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Button;
