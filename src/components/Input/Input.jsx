import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder, onChange, value }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={styles.input}
    />
  );
};

export default Input;
