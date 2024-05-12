import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import Star from "../../assets/Icons/Star.svg?react";
import Facebook from "../../assets/Icons/facebook.svg?react";
import Instagram from "../../assets/Icons/_Instagram.svg?react";
import Twitter from "../../assets/Icons/twitter.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles["footer-top"]}>
        <Star /> Fluent <Star />
      </h1>
      <ul className={styles["footer-center"]}>
        <li>
          <Link to={"/"}>Join as a creator</Link>
        </li>
        <li>
          <Link to={"/"}>Contact</Link>
        </li>
        <li>
          <Link to={"/"}>Case Studies</Link>
        </li>
        <li>
          <Link to={"/"}>Press</Link>
        </li>
        <li>
          <Link to={"/"}>Blog</Link>
        </li>
        <li>
          <Link to={"/"}>Privacy</Link>
        </li>
        <li>
          <Link to={"/"}>Accessibility</Link>
        </li>
        <li>
          <Link to={"/"}>Terms</Link>
        </li>
        <li>
          <Link to={"/"}>Faqs</Link>
        </li>
      </ul>
      <div className={styles["footer-bottom"]}>
        <span className={styles["footer-bottom__left"]}>
          <a>
            <Facebook />
          </a>
          <a>
            <Instagram />
          </a>
          <a>
            <Twitter />
          </a>
        </span>
        <p className={styles["footer-bottom__right"]}>
          © 2024 Fluent.io — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
