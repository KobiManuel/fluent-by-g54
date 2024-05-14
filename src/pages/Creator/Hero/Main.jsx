import React from "react";
import styles from "./_Main.module.scss";
import { useNavigate } from "react-router-dom";
import Star from "../../../assets/Icons/Star.svg?react";
import star2 from "../../../assets/images/star2.png";
import widget from "../../../assets/images/widget.png";
import people from "../../../assets/images/people.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.creator}>
      <header>
        <h1>
          <Star /> Are you a creative?{" "}
          <img className={styles.widget1} src={people} alt="/" />
        </h1>
        <h1>
          <img className={styles.widget} src={widget} alt="/" />
          Join the Fluent Family!{" "}
          <img className={styles.star2} src={star2} alt="/" />
        </h1>
        <h6>
          Join Fluent's dynamic community of talent today. Sign up now for your
          free creator account and let's unleash your creative genius!
        </h6>
      </header>
    </section>
  );
};

export default Hero;
