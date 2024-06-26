"use client";
import React, { useState } from "react";
import styles from "./MenuIcon.module.scss";

const MenuIcon = ({ handleMenuToggle }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
    handleMenuToggle();
  };
  return (
    <div className={styles.menuIcon}>
      <button
        className={
          menuIsActive
            ? `${styles.active} ${styles.menuButton}`
            : `${styles.menuButton}`
        }
        onClick={toggleMenu}
      >
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
      </button>
    </div>
  );
};

export default MenuIcon;
