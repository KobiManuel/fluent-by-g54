import React from "react";
import styles from "./_Main.module.scss";
import { useNavigate } from "react-router-dom";

const Creator = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.creator}>
      <header>
        <h1>
          <img src={star1} alt="/" /> Are you a creative?{" "}
          <img src={people} alt="/" />
        </h1>
        <h1>
          <img src={widget} alt="/" />
          Join the Fluent Family! <img src={star2} alt="/" />
        </h1>
      </header>
    </section>
  );
};

export default Creator;
